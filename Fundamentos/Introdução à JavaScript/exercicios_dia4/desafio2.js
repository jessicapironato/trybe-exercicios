// Exercício 2 - Crie uma função que, dado um array de números inteiros,
// // retorne a quantidade de números pares e ímpares no formato abaixo:

// let numeros = {
//   pares: 0,
//   ímpares: 0,
// };

function numerosParesImpares(array) {
    let numeros = {
        pares: 0,
        impares: 0,
    }


    for(let numero of array) {
        if(numero % 2 ===0) {
            numeros.pares +=1;

        }else {
            numeros.impares +=1;
        }
    }

   return numeros;      // retornar o objeto fora do for  
}


console.log(numerosParesImpares([0,1,2,3,4,5, 6]))