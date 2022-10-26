// //crie uma função que receba um array de inteiros e retorne o índice do maior valor. [2, 3, 6, 7, 10, 1];

function indiceMaior (array) {
    let indiceMaior = 0;
    for (let indice in array){
        let index = Number(indice)
        if (array[indiceMaior] < Number(array[index])){
            indiceMaior = index;
            

        }
    }
    return "O indice maior está na posição: " + indiceMaior;
}


//console.log("O indice maior está na posição: " + indiceMaior)
console.log(indiceMaior([2,3,50,12,10,1]))