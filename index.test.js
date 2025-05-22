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
})