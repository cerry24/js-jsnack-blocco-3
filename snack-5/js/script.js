/**
 * Crea una funzione che accetti due argomenti, e che restituisca un valore numerico randomico tra i due argomenti inclusi.
 */


// Math.floor ( math.random() * (max - min + 1) + min )



function getRandomNumber(numMin, numMax) {
    const randomNumber = Math.floor( Math.random() * (numMax - numMin + 1) + numMin );

    return randomNumber;
}


console.log(getRandomNumber(20, 466));