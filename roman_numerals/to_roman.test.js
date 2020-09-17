// Our product owner wants users to be able to use roman numerals
//
//The rules for Roman numerals are as follows:
//
//The basic symbols are I (= 1), V (= 5), X (= 10), L (= 50), C (= 100), D (= 500), and M (= 1000).
//
//If a letter is immediately followed by one of equal or lesser value,
//  the two numbers are added; thus,
//  XX = 20, XV = 15, VI = 6.
//
//If a letter is immediately followed by one of greater value,
//  the first is subtracted from the second;
//  thus IV = 4, XL = 40, CM = 900.
//

const digitValue = {
  1: "I",
  10: "X",
  100: "C",
};

const firstHalfMapping = {
  1: "IV",
  10: "XL",
  100: "CD",
};
const secondHalfMapping = {
  1: "IX",
  10: "XC",
  100: "CM",
};

const secondHalfPrefixMapping = {
  1: "V",
  10: "L",
  100: "D",
};
const charStringOfLength = (char, length) => {
  return new Array(length + 1).join(char);
};
const divisorString = (n, divisor) => {
  const digit = Math.floor(n / divisor) % 10;
  const firstHalf = Math.floor(digit / 5) == 0;
  const halfRemainder = digit % 5;
  if (halfRemainder === 4) {
    return firstHalf ? firstHalfMapping[divisor] : secondHalfMapping[divisor];
  } else {
    const prefix = firstHalf ? "" : secondHalfPrefixMapping[divisor];
    return prefix + charStringOfLength(digitValue[divisor], halfRemainder);
  }
};
const thousandsString = (n) => {
  const thousandsDigit = Math.floor(n / 1000) % 10;
  return charStringOfLength("M", thousandsDigit);
};
const toRoman = (n) => {
  return (
    thousandsString(n) +
    divisorString(n, 100) +
    divisorString(n, 10) +
    divisorString(n, 1)
  );
};
describe("toRoman", () => {
  test("1-9", () => {
    expect(toRoman(1)).toBe("I");
    expect(toRoman(3)).toBe("III");
    expect(toRoman(4)).toBe("IV");
    expect(toRoman(5)).toBe("V");
    expect(toRoman(8)).toBe("VIII");
    expect(toRoman(9)).toBe("IX");
  });
  test("10 - 90", () => {
    expect(toRoman(10)).toBe("X");
    expect(toRoman(13)).toBe("XIII");
    expect(toRoman(15)).toBe("XV");
    expect(toRoman(20)).toBe("XX");
    expect(toRoman(38)).toBe("XXXVIII");
    expect(toRoman(39)).toBe("XXXIX");
    expect(toRoman(40)).toBe("XL");
    expect(toRoman(45)).toBe("XLV");
    expect(toRoman(48)).toBe("XLVIII");
    expect(toRoman(49)).toBe("XLIX");
    expect(toRoman(50)).toBe("L");
    expect(toRoman(88)).toBe("LXXXVIII");
    expect(toRoman(89)).toBe("LXXXIX");
    expect(toRoman(90)).toBe("XC");
  });
  test("100 - 999", () => {
    expect(toRoman(100)).toBe("C");
    expect(toRoman(388)).toBe("CCCLXXXVIII");
    expect(toRoman(389)).toBe("CCCLXXXIX");
    expect(toRoman(399)).toBe("CCCXCIX");
    expect(toRoman(400)).toBe("CD");
    expect(toRoman(500)).toBe("D");
    expect(toRoman(899)).toBe("DCCCXCIX");
    expect(toRoman(900)).toBe("CM");
    expect(toRoman(950)).toBe("CML");
    expect(toRoman(999)).toBe("CMXCIX");
  });
  test("1000 - 3000", () => {
    expect(toRoman(1000)).toBe("M");
    expect(toRoman(3000)).toBe("MMM");
  });
});
