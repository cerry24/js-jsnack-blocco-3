/**
 *
 * Crea una funzione che dato un array, calcoli la somma dei suoi elementi.
 *
 */






function getSumOfArrayElements (array) {
    let sum = 0;

    for ( i = 0; i < array.length; i++ ) {
        const castedElement = parseInt(array[i], 10)

        if ( !Number.isNaN(castedElement) ) {
            sum += castedElement;
        }
    }

    return sum;
}

const list = [1, '2', 5, 6, 'casa', 'panettone', 3, '8'];

console.log(getSumOfArrayElements(list));