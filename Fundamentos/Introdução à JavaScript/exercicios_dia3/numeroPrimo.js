//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

const numeros = 50;
let numeroPrimo = 0;
let contador = 0;

// esse for percorre todos os numeros entre 2 e 50, e apos a execução do segundo for, ele armazena o numero primo na memoria, e vai substituindo o numero até achar o maior dentre todos testados.

for(let index = 2; index <= numeros; index +=1){
    if(contador === 2){
        numeroPrimo = index -1;
    }

contador = 0;

// esse for pega o primeiro numero do index e divide pelo indice até encontrar todos os numeros que o modulo dá zero. quando encontra, acrescenta mais um no contador, que joga esse numero no for anterior, que sera comparado no if. Esse numero teve o numero de divisoes estritamente igual a 2? se sim, acrescenta mais um no numero primo, menos -1, porque o for já rodou mais uma vez.

    for(let indice = 1; indice <= index; indice +=1){
    if( index % indice ===0) {
        contador= contador + 1;
    }
 }
}

console.log("O maior número primo entre 2 a 50 é: ", numeroPrimo)


// Caso queira imprimir todos os numeros primos de 2 a 50:
//Na linha 4 declara o numeroPrimo como um array vazio numeroPrimo = []; e na linha 9 ao invés de usa numeroPrimo = index -1; você coloca numeroPrimo.push(index - 1);