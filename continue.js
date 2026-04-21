// continue --> skip this one 
// break -> i'm done with this loop 

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; 
    }
    console.log(i); 
}

let n = 0; 
while (n <= 10) {
    if (n % 5 !== 0) {
        continue;
    }
    console.log(n);
    n++;
}