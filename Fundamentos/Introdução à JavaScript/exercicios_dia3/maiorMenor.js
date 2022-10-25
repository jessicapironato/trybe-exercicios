//2 algoritmos: retorne a palavra maior e a palavra menor
// percorrer o array >> for
//condição para achar palavra maior e menor>> if
// variaveis maior e menor


let array = ['java', 'javascript', 'python', 'html', 'css'];
let palavraMaior = '';
let palavraMenor = array[0];

for(let index=0; index < array.length; index +=1){
    if(array[index].length > palavraMaior.length){
        palavraMaior = array[index]

    } 
}

for(let index=0; index < array.length; index +=1){
 if (array[index].length < palavraMenor.length){
    palavraMenor = array[index];
}
};


console.log("A palavra maior é:" , palavraMaior, "e" , "a palavra menor é:",palavraMenor)

// explicando primeiro if -  serve para o segundo tb:
// se o array na posição atual >>> if(array[java].length for maior que o tamanho da palavra maior no array inteiro), então a palavraMaior receberá o array atual, ou seja, o java.
// etao nessa logica, o java é comparado ao javascript, pyton, html e css, para saber se ele é maior e se sim, o palavraMaior guarda ele. O mesmo para a lógica do palavraMenor.