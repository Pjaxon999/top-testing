export default function capitalize(string) {
    if (typeof string !== "string") {return "Strings only please!"}
    const trimmedString = string.trim();
    const capitalizedLetter = trimmedString.charAt(0).toUpperCase();
    const stringWithoutFirstLetter = trimmedString.slice(1);
    return capitalizedLetter + stringWithoutFirstLetter;
}