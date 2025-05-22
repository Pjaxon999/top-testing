export default function reverseString(string){
    if (typeof string !== "string") return "Strings only please!";
    return string.split("").reverse().join("")
}