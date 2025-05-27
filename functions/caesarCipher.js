export default function caesarCipher(string, shiftFactor) {
    const output = [];
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'w', 'y', 'z']
    const stringArray = string.split('');
    stringArray.forEach((letter) => {
        let index = alphabet.indexOf(letter);
        output.push(alphabet[index + shiftFactor]);
    })
    return output.join('');
}