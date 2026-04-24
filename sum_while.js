// Display sum of all the odd numbers from 81 to 131.
let oddSum = 0;
let i = 81;

while (i <= 131) {
  if (i % 2 !== 0) {
    oddSum += i; 
  }
  i += 2;
}
console.log(`Total odd sum: ${oddSum}`); 

// Display sum of all the even numbers from 206 to 311.
let evenSum = 0; 
let n = 206; 

while (n <= 311) {
    if (n % 2 === 0) {
        evenSum += n; 
    }
    n += 2; 
}
console.log(`Total even sum: ${evenSum}`); 