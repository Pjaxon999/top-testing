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
});