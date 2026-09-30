package com.rohit.voter;

import org.junit.jupiter.api.Test;

import java.nio.file.Path;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

class RollPdfParserTest {
  @Test
  void readsPunePart100GraduatesLayout() throws Exception {
    List<RollPdfParser.ParsedVoter> rows = new RollPdfParser().parse(Path.of("..", "PART100_EN_6366.pdf"));
    assertEquals(886, rows.size());
    for (int index = 0; index < rows.size(); index++) {
      assertEquals(index + 1, rows.get(index).serial(), "serial order at row " + index);
      assertEquals("pune", rows.get(index).district());
      assertEquals("100", rows.get(index).part());
      assertTrue(rows.get(index).age() != null && rows.get(index).age() > 17, "age of " + rows.get(index).name());
      assertTrue(rows.get(index).gender().equals("M") || rows.get(index).gender().equals("F"), "gender of " + rows.get(index).name());
    }
    RollPdfParser.ParsedVoter first = rows.get(0);
    assertEquals("RANDHIR RAOSAHEB AAHER", first.name());
    assertEquals("RAOSAHEB PUNJAJI AAHER", first.relativeName());
    assertTrue(first.address().startsWith("VITTHALNAGAR") && first.address().endsWith("412210"), first.address());
    assertEquals("BSC BED", first.qualification());
    assertEquals("", first.occupation());
    assertEquals(52, first.age());
    assertEquals("M", first.gender());
    assertEquals("", first.epicNo());
    assertEquals("FCC2118149", rows.get(4).epicNo());
    assertEquals("NYM7639818", rows.get(22).epicNo());
    assertEquals("MCOM, M Phil", rows.get(14).qualification());
    assertEquals("Teacher", rows.get(14).occupation());
    assertEquals("BBA", rows.get(2).qualification());
    assertEquals("Businessman", rows.get(2).occupation());
    assertEquals("BSc", rows.get(3).qualification());
    assertEquals("Teacher", rows.get(3).occupation());
    assertEquals("B.COM", rows.get(4).qualification());
    assertEquals("Farmer", rows.get(4).occupation());
    assertEquals("BE CIVIL", rows.get(46).qualification());
    assertEquals("Government Services", rows.get(46).occupation());
    RollPdfParser.ParsedVoter last = rows.get(rows.size() - 1);
    assertEquals("Amol Arjun Zinjurke", last.name());
    assertEquals("NYM1733070", last.epicNo());
    assertEquals(37, last.age());
  }
}
