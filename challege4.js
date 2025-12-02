
console.log(message)

// Challenge 4:String Method Challenge

let text = "   hello world   ";

// Clean spaces
let trimmed = text.trim();

// Change to uppercase
let upper = trimmed.toUpperCase();

// Check if the word "world" is inside
let hasWorld = trimmed.includes("world");

// Replace "world" with "JavaScript"
let replaced = trimmed.replace("world", "JavaScript");

// Split into words
let words = trimmed.split(" ");

console.log(trimmed);   // "hello world"
console.log(upper);     // "HELLO WORLD"
console.log(hasWorld);  // true
console.log(replaced);  // "hello JavaScript"
console.log(words);     // ["hello", "world"]