// Continuare a chiedere all'utente un numero tra 1 e 10 fino a quando l'utente non inserisce il valore corretto




let userNumber = parseInt(prompt('inserisci un numero tra 1 e 10'));

while (  userNumber > 10 || userNumber < 1 ) {
    userNumber = parseInt(prompt('inserisci un numero tra 1 e 10'));
}