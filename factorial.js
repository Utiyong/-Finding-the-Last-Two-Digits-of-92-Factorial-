
let factorial = 1;
for (let i = 1; i <= 92; i++) {
    factorial = (factorial * i) % 100; // Keep only the last two digits
}

console.log("The last two digits of 92! are:", factorial);
