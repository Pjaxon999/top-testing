// Helper for case preservation
const isUpperCase = str => str === str.toUpperCase();

export default function caesarCipher(string, shiftFactor) {
    const output = [];
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const stringArray = string.split('');

    stringArray.forEach((letter) => {
        // check if we are dealing with letters first, then force them in to lower case for now so that we can find them in the alphabet array
        const lowerLetter = letter.toLowerCase();
        const index = alphabet.indexOf(lowerLetter);

        // handle something that isn't a letter
        if (index === -1) {
            output.push(letter);
            return;
        }
        // to handle overflow cases, I use modulo 26 (not 25 because of 0 based indexing) to force numbers to cycle within the alphabet's length (the array length)
        let newIndex = (index + shiftFactor) % 26

        // handle negative shift values by forcing them to be their positive equivalent (shift of -3 is the same as shift of 23)
        if (newIndex < 0) newIndex += 26;

        let target = alphabet[newIndex];

        // case preservation
        if (isUpperCase(letter)) {
            target = target.toUpperCase();
        }

        output.push(target);
    })
    // put humpty dumpty back together again
    return output.join('');
}