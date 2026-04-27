let str = "Vedam is Knowledge and Wisdom";

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.slice(0,5));
console.log(str.replace("Wisdom", "Power"));

let word = "Vedam";
let reversed = word.split("").reverse().join("");
if(word.toLowerCase()===reversed.toLowerCase()){
    console.log("Is a Palindrome.");
}else{
    console.log("Vedam is not a Palindrome.");
}