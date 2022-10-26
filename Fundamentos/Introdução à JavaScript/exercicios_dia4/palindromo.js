//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function palindromo(palavra) {
    
    for(index in palavra){
        if(palavra[index] != palavra[(palavra.length - 1) - index]){return false

        }
        return true;
    }
    
}
console.log(palindromo('arara'));
console.log(palindromo('desenvolvimento'));

// outra forma de fazer: Primeiro o método split transformará a string em um array onde cada posição será uma letra da string. Depois o método reverse fará o array ficar de trás pra frente. Em seguida o método join faz com que todo o array vire uma string novamente.

function palindromo(palavra){
    let reverse = palavra.split('').reverse().join('');
    if (reverse === palavra) {
        return true;
    } else{
        return false;
    }

    
}
console.log(palindromo('arara'));
console.log(palindromo('desenvolvimento'));