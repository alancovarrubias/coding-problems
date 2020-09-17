const ROMAN_LETTERS = ["M", "D", "C", "L", "X", "V", "I"];
const letterValueMapping = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};
const letterPrefixMapping = {
  M: "C",
  D: "C",
  C: "X",
  L: "X",
  X: "I",
  V: "I",
  I: null,
};
const calculateLetterValue = (roman, letter) => {
  let value = 0;
  const regex = new RegExp(letter, "g");
  const match = roman.match(regex);
  if (match) {
    value += match.length * letterValueMapping[letter];
    const lastIndex = roman.lastIndexOf(letter);
    const prefix = letterPrefixMapping[letter];
    const prefixRegex = new RegExp(prefix);
    const prefixMatches = roman.substring(0, lastIndex).match(prefixRegex);
    if (prefixMatches) {
      value -= letterValueMapping[prefix];
    }
  }
  return value;
};
const removeLetterFromRoman = (roman, letter) => {
  const lastIndex = roman.lastIndexOf(letter);
  return roman.substring(lastIndex + 1);
};
const toArabic = (roman) => {
  let value = 0;
  for (let i = 0; i < ROMAN_LETTERS.length; i++) {
    const letter = ROMAN_LETTERS[i];
    value += calculateLetterValue(roman, letter);
    roman = removeLetterFromRoman(roman, letter);
  }
  return value;
};

describe("toArabic", () => {
  test("I - III", () => {
    expect(toArabic("I")).toBe(1);
    expect(toArabic("III")).toBe(3);
  });
  test("IV - VIII", () => {
    expect(toArabic("IV")).toBe(4);
    expect(toArabic("V")).toBe(5);
    expect(toArabic("VIII")).toBe(8);
  });
  test("IX - XXXVIII", () => {
    expect(toArabic("IX")).toBe(9);
    expect(toArabic("X")).toBe(10);
    expect(toArabic("XIII")).toBe(13);
    expect(toArabic("XIII")).toBe(13);
  });
  test("XL - LXXXIX", () => {
    expect(toArabic("XL")).toBe(40);
    expect(toArabic("XLV")).toBe(45);
    expect(toArabic("XLVIII")).toBe(48);
    expect(toArabic("XLIX")).toBe(49);
    expect(toArabic("L")).toBe(50);
    expect(toArabic("LXXXVIII")).toBe(88);
    expect(toArabic("LXXXIX")).toBe(89);
  });
  test("XC - CCCXCIX", () => {
    expect(toArabic("XC")).toBe(90);
    expect(toArabic("C")).toBe(100);
    expect(toArabic("CCCLXXXVIII")).toBe(388);
    expect(toArabic("CCCLXXXIX")).toBe(389);
    expect(toArabic("CCCXCIX")).toBe(399);
  });
  test("CD - DCCCXCIX", () => {
    expect(toArabic("CD")).toBe(400);
    expect(toArabic("D")).toBe(500);
    expect(toArabic("DCCCXCIX")).toBe(899);
  });
  test("CM - M", () => {
    expect(toArabic("CM")).toBe(900);
    expect(toArabic("CML")).toBe(950);
    expect(toArabic("M")).toBe(1000);
  });
});
