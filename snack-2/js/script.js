/**
 *  Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
 * Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.
 *  */





const numbers = [];
let sum = 0;

while ( sum < 50 ) {
    const number = parseInt(prompt('immetti un numero'));

    sum += number;

    numbers.push(number);

    console.log(numbers);
    console.log(sum);
}