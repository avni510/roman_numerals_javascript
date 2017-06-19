var expect = require('chai').expect;
var RomanNumerals = require('../../src/roman_numerals/romanNumerals').RomanNumerals;

describe('Roman Numerals', function() {
  it("converts 1 to the Roman Numeral 'I'", function() {
    expect(RomanNumerals(1)).to.eq('I');
  });

  it ("converts 2 to the Roman Numeral 'II'", function() {
    expect(RomanNumerals(2)).to.eq('II');
  })

  it ("converts 3 to the Roman Numeral 'III'", function() {
    expect(RomanNumerals(3)).to.eq('III');
  })

  it ("converts 4 to the Roman Numeral 'IV'", function() {
    expect(RomanNumerals(4)).to.eq('IV');
  })


  it ("converts 5 to the Roman Numeral 'V'", function() {
    expect(RomanNumerals(5)).to.eq('V');
  })

  it ("converts 6 to the Roman Numeral 'VI'", function() {
    expect(RomanNumerals(6)).to.eq('VI');
  })

  it ("converts 9 to the Roman Numeral 'IX'", function() {
    expect(RomanNumerals(9)).to.eq('IX');
  })

  it ("converts 10 to the Roman Numeral 'X'", function() {
    expect(RomanNumerals(10)).to.eq('X');
  })
});
