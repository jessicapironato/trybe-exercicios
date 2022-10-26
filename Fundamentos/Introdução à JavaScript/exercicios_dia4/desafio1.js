// Exercício 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer.
// Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato abaixo:
// Fórmulas: perimetro = (2 * base) + (2 * altura) area = base * altura

// let objeto = {
//     area: 0,
//     perimetro: 0,
//   };
  
  function calculaAreaPerimetro (base, altura) {
    
    let objeto = {
        area: 0, 
        perimetro: 0
    }
    
     objeto.area = base * altura;
     objeto.perimetro = (2*base) + (2*altura);

   return objeto;

  }

  console.log(calculaAreaPerimetro(2,4))