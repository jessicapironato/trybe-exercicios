//algoritmo para inverter palavra

let word = 'tryber';
let reverso = '';

for(let i=word.length -1; i >= 0; i -=1){

    reverso = reverso + word[ i]
}
console.log(reverso)

//SEGUNDA OPÇÃO DE FAZER

// for(let index = 0; index < word.length ; index +=1){
//     reverso = reverso + word[word.length -1 - index] 
// }
// console.log(reverso)