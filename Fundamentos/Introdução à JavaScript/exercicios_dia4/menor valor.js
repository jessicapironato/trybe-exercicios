//crie uma função que receba um array de inteiros e retorne o índice do menor valor. Array de teste: [2, 4, 6, 7, 10, 0, -3];.

const array = [2, 4, 6, 7, 10, 0, -3];
function menorValor (numeros) {
    
    let indiceMenor =0;
    
    for (let indice in numeros) {
        if(numeros[indiceMenor] > numeros[indice]) {
            indiceMenor = indice;
        }

    }
return indiceMenor;
}


console.log(menorValor(array))

//Caso o valor do índice atual seja menor do que o menor número, a variável indiceMenor deve receber o valor do novo índice.