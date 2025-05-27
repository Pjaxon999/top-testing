import {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
} from './index';

// Capitalize function tests

describe('capitalize function', () => {
    it('capitalizes the first letter of a string', () => {
        expect(capitalize("meat")).toBe("Meat");
    });
    it('does not just return the input string every time', () => {
        expect(capitalize("team")).toBe("Team");
    }); 
    it('works with strings that have white space', () => {
        expect(capitalize("   hello world!   ")).toBe("Hello world!");
    });
    it('deals with empty strings', () => {
        expect(capitalize("")).toBe("");
    });
    it('does not mess with already capitalized strings', () => {
        expect(capitalize("Meat")).toBe("Meat");
    });
    it('handles bad inputs', () => {
        expect(capitalize(12)).toBe("Strings only please!");
    })
    it('handles strings with non-alphabetic first characters', () => {
        expect(capitalize("123abc")).toBe("123abc");
    })
    it('handles non-english first letters', () => {
        expect(capitalize("éclair")).toBe("Éclair");
    })
    it('handles multi-word strings', () => {
        expect(capitalize("hello world!")).toBe("Hello world!");
    })
});

// reverse function tests
describe('reverse string function', () => {
    it('reverses a string', () => {
        expect(reverseString("team")).toBe("maet");
    })
    it('does not just reverse team', () => {
        expect(reverseString("meat")).toBe("taem");
    })
    it('handles empty strings', () => {
        expect(reverseString("")).toBe("");
    })
    it('handles non string inputs', () => {
        expect(reverseString(321)).toBe("Strings only please!");
    })
    it('handles multi word strings', () => {
        expect(reverseString("hello world!")).toBe("!dlrow olleh");
    })
    it('handles strings with non-alphabetic characters', () => {
        expect(reverseString("123abc")).toBe("cba321");
    })
    it('handles strings with accents', () => {
        expect(reverseString("café")).toBe("éfac");
    })
    it('handles non-english strings', () => {
        expect(reverseString("こんにちは")).toBe("はちにんこ");
    })
    it('handles whitespace', () => {
        expect(reverseString(" hello ")).toBe(" olleh ");
    })
    it('handles palindromes', () => {
        expect(reverseString("abba")).toBe("abba");
    })
})

// Calculator function tests
describe('calculator object', () => {
    it('adds two and two', () => {
        expect(calculator.add(2, 2)).toBe(4);
    })
    it('adds other number pairs', () => {
        expect(calculator.add(4,4)).toBe(8);
        expect(calculator.add(3,3)).toBe(6);
    })
    it('subtracts number pairs', () => {
        expect(calculator.subtract(2,2)).toBe(0);
        expect(calculator.subtract(4,2)).toBe(2);
    })
    it('divides number pairs', () => {
        expect(calculator.divide(2,2)).toBe(1);
        expect(calculator.divide(4,2)).toBe(2);
    })
    it('multiplys number pairs', () => {
        expect(calculator.multiply(2,2)).toBe(4);
        expect(calculator.multiply(4,4)).toBe(16);
    })
    it('handles negative numbers', () => {
        expect(calculator.add(0, -1)).toBe(-1);
        expect(calculator.subtract(1, -1)).toBe(2);
        expect(calculator.multiply(3, -2)).toBe(-6);
        expect(calculator.divide(-1, -1)).toBe(1);
    })
    it('handles divide by 0', () => {
        // Javascript follows IEEE standards so dividing by 0 should be infinity, and dividing 0 by itself should result in NaN
        expect(calculator.divide(2, 0)).toBe(Infinity);
        expect(calculator.divide(0, 0)).toBe(NaN);
    })
    it('handles non number inputs', () => {
        expect(calculator.add (2, "two")).toBe("numbers only!");
        expect(calculator.subtract("3", "one")).toBe("numbers only!");
        expect(calculator.divide("zero", 1)).toBe("numbers only!");
    })
    it('handles floating point number nonsense', () => {
        // Look it's not Javascripts fault that this happens ok it is the IEEE standards
        expect(calculator.add(0.1, 0.2)).toBe(0.30000000000000004);
    })
})

// Caesar cipher tests
describe('Caesar cipher function', () => {
    it('returns correct answer from a shift of 3', () => {
        expect(caesarCipher("abc", 3)).toBe("def");
    })
    it('also returns correct answer from shift of 5', () => {
        expect(caesarCipher("abc", 5)).toBe("fgh");
    })
    it('handles wrapping from z to a', () => {
        expect(caesarCipher('xyz', 3)).toBe("abc");
    })
    it('handles case preservation even though the original Caesar Ciphers did not but let us not dwell on this', () => {
        expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    })
    it('handles punctuation even though again the original ciphers did not either :x', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    })
    it('handles negative shift factors', () => {
        expect(caesarCipher('abc', -3)).toBe("xyz");
    })
})