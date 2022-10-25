//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

const numeros = 50;
let numeroPrimo = 0;
let contador = 0;

for(let index = 2; index <= numeros; index +=1){
    if(contador === 2){
        numeroPrimo = index -1;
    }

contador = 0;

    for(let indice = 1; indice <= index; indice +=1){
    if( index % indice ===0) {
        contador= contador + 1;
    }
 }
}

console.log("O maior número primo entre 2 a 50 é: ", numeroPrimo)