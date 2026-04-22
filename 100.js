/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let sum = 0;  
let num = 1; 

while (true) {
    sum += num; 
    // 0 + 1 = 1; 
    // 1 + 2 = 3; 
    // 3 + 3 = 6; 
    // 6 + 4 = 10; 

    console.log("Sum: ", sum); 

    if (num >= 100) {
        break; 
    }

    num++; 
}
