//Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.

const a = 1;
const b = 2;
const c = 3;

let umEhPar = false;

if( a % 2 === 0 || b % 2 === 0 || c % 2 === 0){
    umEhPar =  true;
};

console.log(umEhPar);