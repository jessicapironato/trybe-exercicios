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


console.log(palavraMaior , palavraMenor)


