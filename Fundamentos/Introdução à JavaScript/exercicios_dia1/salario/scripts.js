//A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

//INSS (Instituto Nacional do Seguro Social)

//Salário bruto até R$ 1.556,94: alíquota de 8%
//Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
//Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
//Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

//iR (Imposto de Renda)

//Até R$ 1.903,98: isento de imposto de renda
//De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
//De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
//de R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
//Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

let salarioBruto = 20000;
let aliquotaINSS;
let aliquotaIR;

if (salarioBruto <= 1556.94){
    aliquotaINSS = salarioBruto * 0.08;

} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    aliquotaINSS = salarioBruto * 0.09;

} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    aliquotaINSS = salarioBruto * 0.11;

} else {
    aliquotaINSS = 570.88;
}

let salarioBase = salarioBruto - aliquotaINSS

if (salarioBase <= 1903.98){
    aliquotaIR = 0;

} else if (salarioBase  >= 1903.99 && salarioBase <= 2826.65) {
    aliquotaIR = (salarioBase * 0.075) - 142.80;

} else if (salarioBase >= 2826.66 && salarioBase<= 3751.05) {
    aliquotaIR = (salarioBase * 0.015) - 354.80;

} else if (salarioBase >=3751.06 && salarioBase >=4664.68) {
    aliquotaIR = (salarioBase * 0.225) - 636.13;

} else {
    aliquotaIR = (salarioBase * 0.275) - 869.36;
}

console.log ("O salário é :" + (salarioBase - aliquotaIR));
