/**
 * // Crea due array che hanno un numero di elementi diversi. 
 * Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.
 */





const numbers = [1, 2, 3, 4];
const letters = ['a', 'b', 'c', 'd', 'e', 'f',];

while ( numbers.length != letters.length ) {
    if ( numbers.length > letters.length ) {
        letters.push(prompt('inserisci una lettera'));
    } else {
        numbers.push(parseInt(prompt('inserisci un numero')));
    }
}

console.log(numbers);
console.log(letters);