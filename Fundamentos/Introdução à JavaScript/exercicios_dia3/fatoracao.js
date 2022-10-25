//algoritmo que fatore 10
// fatoração: 10*9*8*7*6*5*4*3*2*1=

let fatorial=1;

for(let i=10; i >0; i -=1) {
    fatorial *=  i
};

console.log("O fatorial de 10 é: " , fatorial)

// += guarda o valor encontrado e soma ao todo
// outras formas: fatorial = fatorial * i