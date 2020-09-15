const toArabic = (roman) => {
  let value = 0;
  const mMatch = roman.match(/M/g);
  if (mMatch) {
    value += mMatch.length * 1000;
    const lastMIndex = roman.lastIndexOf("M");
    const beforeMCMatches = roman.substring(0, lastMIndex).match(/C/);
    if (beforeMCMatches) {
      value -= 100;
    }
    roman = roman.substring(lastMIndex + 1);
  }
  const dMatch = roman.match(/D/g);
  if (dMatch) {
    value += dMatch.length * 500;
    const lastDIndex = roman.lastIndexOf("D");
    const beforeDCMatches = roman.substring(0, lastDIndex).match(/C/);
    if (beforeDCMatches) {
      value -= 100;
    }
    roman = roman.substring(lastDIndex + 1);
  }
  const cMatch = roman.match(/C/g);
  if (cMatch) {
    value += cMatch.length * 100;
    const lastCIndex = roman.lastIndexOf("C");
    const beforeCXMatches = roman.substring(0, lastCIndex).match(/X/);
    if (beforeCXMatches) {
      value -= 10;
    }
    roman = roman.substring(lastCIndex + 1);
  }
  const lMatch = roman.match(/L/g);
  if (lMatch) {
    value += lMatch.length * 50;
    const lastLIndex = roman.lastIndexOf("L");
    const beforeLXMatches = roman.substring(0, lastLIndex).match(/X/);
    if (beforeLXMatches) {
      value -= 10;
    }
    roman = roman.substring(lastLIndex + 1);
  }
  const xMatch = roman.match(/X/g);
  if (xMatch) {
    value += xMatch.length * 10;
    const lastXIndex = roman.lastIndexOf("X");
    const beforeXIMatches = roman.substring(0, lastXIndex).match(/I/);
    if (beforeXIMatches) {
      value -= 1;
    }
    roman = roman.substring(lastXIndex + 1);
  }
  const vMatch = roman.match(/V/g);
  if (vMatch) {
    value += vMatch.length * 5;
    const firstVIndex = roman.indexOf("V");
    const beforeVIMatches = roman.substring(0, firstVIndex).match(/I/);
    if (beforeVIMatches) {
      value -= 1;
    }
    const lastVIndex = roman.lastIndexOf("V");
    roman = roman.substring(lastVIndex + 1);
  }
  value += roman.length;
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
