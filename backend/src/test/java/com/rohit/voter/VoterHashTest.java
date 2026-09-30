package com.rohit.voter;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

class VoterHashTest {
  @Test
  void sameRowProducesTheSameCode() {
    String first = VoterHash.of("Randhir Raosaheb Aaher", "Raosaheb Punjaji Aaher", "Vitthalnagar, Shirur", "BSC BED", "", 52, "M", "", "pune", "100", 1);
    String second = VoterHash.of("Randhir Raosaheb Aaher", "Raosaheb Punjaji Aaher", "Vitthalnagar, Shirur", "BSC BED", "", 52, "M", "", "pune", "100", 1);
    assertEquals(first, second);
    assertEquals(64, first.length());
  }

  @Test
  void oneChangedColumnProducesAnotherCode() {
    String original = VoterHash.of("Randhir", "Raosaheb", "Shirur", "BSC BED", "", 52, "M", "", "pune", "100", 1);
    String changedAge = VoterHash.of("Randhir", "Raosaheb", "Shirur", "BSC BED", "", 53, "M", "", "pune", "100", 1);
    assertNotEquals(original, changedAge);
  }

  @Test
  void qualificationAndOccupationChangeTheCode() {
    String plain = VoterHash.of("Randhir", "Raosaheb", "Shirur", "BSC BED", "", 52, "M", "", "pune", "100", 1);
    String teacher = VoterHash.of("Randhir", "Raosaheb", "Shirur", "BSC BED", "Teacher", 52, "M", "", "pune", "100", 1);
    assertNotEquals(plain, teacher);
  }
}
