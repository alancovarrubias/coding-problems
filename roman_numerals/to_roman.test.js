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

const buildVString = (n) => {
  let iString = new Array(n + 1).join("I");
  let vString = "";
  while (iString.length >= 4) {
    if (iString.length === 4) {
      vString += "IV";
      iString = iString.substring(4);
    } else {
      vString += "V";
      iString = iString.substring(5);
    }
  }
  return vString + iString;
};

const buildXString = (n) => {
  let vString = buildVString(n);
  let xString = "";
  let vMatches = vString.match(/V/g);
  while (vMatches && vMatches.length >= 2) {
    if (vString.substring(0, 2) === "VV") {
      xString += "X";
      vString = vString.substring(2);
    } else {
      xString += "IX";
      vString = vString.substring(3);
    }
    vMatches = vString.match(/V/g);
  }
  return xString + vString;
};

const buildLString = (n) => {
  let xString = buildXString(n);
  let lString = "";
  while (xString.startsWith("XXXX")) {
    if (xString.startsWith("XXXXX")) {
      lString += "L";
      xString = xString.substring(5);
    } else {
      lString += "XL";
      xString = xString.substring(4);
    }
  }
  return lString + xString;
};
const buildCString = (n) => {
  let lString = buildLString(n);
  let cString = "";
  let lMatches = lString.match(/L/g);
  while (lMatches && lMatches.length >= 2) {
    if (lString.substring(0, 2) === "LL") {
      cString += "C";
      lString = lString.substring(2);
    } else {
      cString += "XC";
      lString = lString.substring(3);
    }
    lMatches = lString.match(/L/g);
  }
  return cString + lString;
};

const buildDString = (n) => {
  let cString = buildCString(n);
  let dString = "";
  while (cString.startsWith("CCCC")) {
    if (cString.substring(0, 5) === "CCCCC") {
      dString += "D";
      cString = cString.substring(5);
    } else {
      dString += "CD";
      cString = cString.substring(4);
    }
  }
  return dString + cString;
};

const toRoman = (n) => {
  let dString = buildDString(n);
  let mString = "";
  let dMatches = dString.match(/D/g);
  while (dMatches && dMatches.length >= 2) {
    if (dString.substring(0, 2) === "DD") {
      mString += "M";
      dString = dString.substring(2);
    } else {
      mString += "CM";
      dString = dString.substring(3);
    }
    dMatches = dString.match(/D/g);
  }
  return mString + dString;
};

describe("toRoman", () => {
  test("1-3", () => {
    expect(toRoman(1)).toBe("I");
    expect(toRoman(3)).toBe("III");
  });
  test("4-8", () => {
    expect(toRoman(4)).toBe("IV");
    expect(toRoman(5)).toBe("V");
    expect(toRoman(8)).toBe("VIII");
  });
  test("9 - 39", () => {
    expect(toRoman(9)).toBe("IX");
    expect(toRoman(10)).toBe("X");
    expect(toRoman(13)).toBe("XIII");
    expect(toRoman(15)).toBe("XV");
    expect(toRoman(20)).toBe("XX");
    expect(toRoman(38)).toBe("XXXVIII");
    expect(toRoman(39)).toBe("XXXIX");
  });
  test("40 - 89", () => {
    expect(toRoman(40)).toBe("XL");
    expect(toRoman(45)).toBe("XLV");
    expect(toRoman(48)).toBe("XLVIII");
    expect(toRoman(49)).toBe("XLIX");
    expect(toRoman(50)).toBe("L");
    expect(toRoman(88)).toBe("LXXXVIII");
    expect(toRoman(89)).toBe("LXXXIX");
  });
  test("90 - 399", () => {
    expect(toRoman(90)).toBe("XC");
    expect(toRoman(100)).toBe("C");
    expect(toRoman(388)).toBe("CCCLXXXVIII");
    expect(toRoman(389)).toBe("CCCLXXXIX");
    expect(toRoman(399)).toBe("CCCXCIX");
  });
  test("400 - 899", () => {
    expect(toRoman(400)).toBe("CD");
    expect(toRoman(500)).toBe("D");
    expect(toRoman(899)).toBe("DCCCXCIX");
  });
  test("900 - 1000", () => {
    expect(toRoman(900)).toBe("CM");
    expect(toRoman(950)).toBe("CML");
    expect(toRoman(1000)).toBe("M");
  });
});
