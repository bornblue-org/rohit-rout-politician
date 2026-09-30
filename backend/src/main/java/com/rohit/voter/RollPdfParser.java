package com.rohit.voter;

import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.apache.pdfbox.text.TextPosition;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Locale;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Reads a Maharashtra legislative council graduates' roll PDF (the PART100 layout): a repeating header with
 * district and part, then ten columns - serial, name, relative, address, qualification, occupation, age, gender,
 * epic, photo - and one elector per serial number. The photo column is ignored.
 */
public class RollPdfParser {
  private static final Pattern PART_HEADING = Pattern.compile("District:\\s*([A-Za-z]+).*?Part:\\s*(\\d+)", Pattern.CASE_INSENSITIVE);
  private static final int COLUMNS = 10;

  public List<ParsedVoter> parse(Path pdf) throws IOException {
    try (PDDocument document = Loader.loadPDF(pdf.toFile())) {
      return parse(document);
    }
  }

  public List<ParsedVoter> parse(InputStream pdf) throws IOException {
    try (PDDocument document = Loader.loadPDF(pdf.readAllBytes())) {
      return parse(document);
    }
  }

  private List<ParsedVoter> parse(PDDocument document) throws IOException {
    WordStripper stripper = new WordStripper();
    stripper.setSortByPosition(true);
    stripper.getText(document);
    List<Line> lines = lines(stripper.words);
    List<ParsedVoter> voters = new ArrayList<>();
    String district = "";
    String part = "";
    float[] columns = null;
    float[] edges = null;
    boolean inTable = false;
    Row current = null;

    for (Line line : lines) {
      String text = line.text();
      Matcher heading = PART_HEADING.matcher(text);
      if (heading.find()) {
        district = normalizeDistrict(heading.group(1));
        part = heading.group(2);
      }
      List<Word> indexWords = columnIndexWords(line);
      if (indexWords != null) {
        columns = new float[indexWords.size()];
        for (int index = 0; index < indexWords.size(); index++) {
          columns[index] = indexWords.get(index).x;
        }
        edges = columnEdges(columns);
        inTable = true;
        continue;
      }
      if (!inTable || columns == null) {
        continue;
      }
      if (text.startsWith("Part:")) {
        inTable = false;
        continue;
      }
      if (text.contains("Elector Name") || text.contains("Maharashtra") || text.contains("Qualify Date")) {
        continue;
      }
      if (current == null && !hasSerial(line, columns)) {
        continue;
      }
      for (Word word : line.words) {
        if (isSerial(word, columns)) {
          if (current != null) {
            add(voters, current, district, part);
          }
          current = new Row();
          current.add(0, word.text);
        } else if (current != null) {
          current.add(columnAt(word, edges), word.text);
        }
      }
    }
    if (current != null) {
      add(voters, current, district, part);
    }
    if (voters.isEmpty()) {
      throw new IllegalArgumentException("No voter rows were found. Upload a graduates' roll PDF in the PART100 layout.");
    }
    return voters;
  }

  private void add(List<ParsedVoter> voters, Row row, String district, String part) {
    String serialText = clean(row.cols[0]);
    String name = clean(row.cols[1]);
    if (!serialText.matches("\\d+") || name.isBlank() || district.isBlank() || part.isBlank()) {
      return;
    }
    voters.add(new ParsedVoter(
        district,
        part,
        Integer.parseInt(serialText),
        name,
        clean(row.cols[2]),
        clean(row.cols[3]),
        clean(row.cols[4]),
        occupation(clean(row.cols[5])),
        parseAge(clean(row.cols[6])),
        parseGender(clean(row.cols[7])),
        compactEpic(clean(row.cols[8]))));
  }

  /** The roll wraps long epic numbers onto a second line, so the pieces are rejoined. */
  private String compactEpic(String value) {
    String joined = value.replace(" ", "").toUpperCase(Locale.ROOT);
    return joined.matches("[A-Z]{3}\\d{7}") ? joined : "";
  }

  /** The roll breaks a few long occupations mid-word; put the common ones back together. */
  private String occupation(String value) {
    String fixed = value
        .replaceAll("(?i)businessm\\s*an", "Businessman")
        .replaceAll("(?i)governme\\s*n\\s*t", "Government")
        .replaceAll("(?i)investmen\\s*t", "Investment")
        .replaceAll("(?i)\\bofcer\\b", "officer");
    return fixed.equalsIgnoreCase("Other") ? "" : fixed;
  }

  /** The index row under the headings is "1 2 3 ... 10" with one number per column. */
  private List<Word> columnIndexWords(Line line) {
    List<Word> numbers = line.words.stream().filter(word -> word.text.matches("\\d{1,2}")).toList();
    if (numbers.size() != COLUMNS || numbers.size() != line.words.size()) {
      return null;
    }
    for (int index = 0; index < COLUMNS; index++) {
      if (!numbers.get(index).text.equals(String.valueOf(index + 1))) {
        return null;
      }
    }
    return numbers;
  }

  /**
   * The index numbers are centred over their columns, so each column's left edge is the mirror of the previous
   * edge about that centre. The first edge is estimated from the gap to the second column.
   */
  private float[] columnEdges(float[] centres) {
    float[] edges = new float[centres.length];
    edges[0] = centres[0] - (centres[1] - centres[0]) * 0.2f;
    for (int index = 1; index < centres.length; index++) {
      edges[index] = 2 * centres[index - 1] - edges[index - 1];
    }
    return edges;
  }

  private int columnAt(Word word, float[] edges) {
    int column = 0;
    for (int index = 1; index < edges.length; index++) {
      if (word.x >= edges[index] - 3f) {
        column = index;
      }
    }
    return column;
  }

  private boolean hasSerial(Line line, float[] columns) {
    for (Word word : line.words) {
      if (isSerial(word, columns)) {
        return true;
      }
    }
    return false;
  }

  private boolean isSerial(Word word, float[] columns) {
    return word.text.matches("\\d{1,4}") && Math.abs(word.x - columns[0]) < 14;
  }

  private Integer parseAge(String value) {
    if (!value.matches("\\d+")) {
      return null;
    }
    return Integer.valueOf(value);
  }

  private String parseGender(String value) {
    if (value.equalsIgnoreCase("M") || value.equalsIgnoreCase("F")) {
      return value.toUpperCase(Locale.ROOT);
    }
    return "";
  }

  private String normalizeDistrict(String raw) {
    return switch (raw.toUpperCase(Locale.ROOT)) {
      case "PUNE" -> "pune";
      case "SATARA" -> "satara";
      case "SANGLI" -> "sangli";
      case "KOLHAPUR" -> "kolhapur";
      case "SOLAPUR" -> "solapur";
      default -> raw.toLowerCase(Locale.ROOT);
    };
  }

  private String clean(String value) {
    if (value == null) {
      return "";
    }
    return value.replace("\u0000", "").replaceAll("\\s+", " ").trim();
  }

  private List<Line> lines(List<Word> words) {
    List<Word> sorted = words.stream()
        .sorted(Comparator.comparingInt((Word word) -> word.page).thenComparingDouble(word -> word.y).thenComparingDouble(word -> word.x))
        .toList();
    List<Line> lines = new ArrayList<>();
    for (Word word : sorted) {
      Line line = lines.isEmpty() ? null : lines.get(lines.size() - 1);
      if (line == null || line.page != word.page || Math.abs(line.y - word.y) > 3.5f) {
        line = new Line(word.page, word.y);
        lines.add(line);
      }
      line.words.add(word);
    }
    // Words on one visual line can differ slightly in baseline (smaller font in long cells), so read them left to right.
    lines.forEach(line -> line.words.sort(Comparator.comparingDouble((Word word) -> word.x)));
    return lines;
  }

  public record ParsedVoter(
      String district,
      String part,
      int serial,
      String name,
      String relativeName,
      String address,
      String qualification,
      String occupation,
      Integer age,
      String gender,
      String epicNo
  ) {}

  private static final class Word {
    final String text;
    final float x;
    final float y;
    final int page;

    Word(String text, float x, float y, int page) {
      this.text = text;
      this.x = x;
      this.y = y;
      this.page = page;
    }
  }

  private static final class Line {
    final int page;
    final float y;
    final List<Word> words = new ArrayList<>();

    Line(int page, float y) {
      this.page = page;
      this.y = y;
    }

    String text() {
      StringBuilder builder = new StringBuilder();
      for (Word word : words) {
        if (!builder.isEmpty()) {
          builder.append(' ');
        }
        builder.append(word.text);
      }
      return builder.toString();
    }
  }

  private static final class Row {
    final String[] cols = new String[COLUMNS];

    void add(int column, String text) {
      if (column < 0 || column >= cols.length || text.isBlank()) {
        return;
      }
      cols[column] = cols[column] == null ? text : cols[column] + " " + text;
    }
  }

  private static final class WordStripper extends PDFTextStripper {
    final List<Word> words = new ArrayList<>();

    WordStripper() throws IOException {
      super();
    }

    @Override
    protected void writeString(String text, List<TextPosition> positions) {
      StringBuilder token = new StringBuilder();
      float startX = 0;
      float y = 0;
      TextPosition previous = null;
      for (TextPosition position : positions) {
        String character = position.getUnicode();
        if (character == null || character.isBlank()) {
          flush(token, startX, y);
          token.setLength(0);
          previous = position;
          continue;
        }
        float gap = previous == null ? 0 : position.getXDirAdj() - (previous.getXDirAdj() + previous.getWidthDirAdj());
        if (previous != null && gap > 1.8f) {
          flush(token, startX, y);
          token.setLength(0);
        }
        if (token.isEmpty()) {
          startX = position.getXDirAdj();
          y = position.getYDirAdj();
        }
        token.append(character);
        previous = position;
      }
      flush(token, startX, y);
    }

    private void flush(StringBuilder token, float x, float y) {
      String text = token.toString().trim();
      if (!text.isEmpty()) {
        words.add(new Word(text, x, y, getCurrentPageNo()));
      }
    }
  }
}
