let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma= 0;
let index = 0;
let media = 0;

for(index = 0; index < numbers.length; index ++) { 
soma += numbers[index];
};

media = soma / numbers.length;

console.log (media);


if (media < 20){
    console.log ("o valor é menos que 20")
} else {
    console.log ("o valor é maior que 20")
}