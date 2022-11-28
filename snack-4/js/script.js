/**
 * Prendere due array della stessa lunghezza e generarne un terzo, 
 * prendendo alternativamente gli elementi da uno e dall'altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
 */





const numbers = [1, 2, 3, 4];
const letters = ['a', 'b', 'c', 'd'];
const alphanumeric =[];

for ( i = 0; i < numbers.length; i++ ) {
    alphanumeric.push(numbers[i] + letters[i]);
}

console.log(alphanumeric);