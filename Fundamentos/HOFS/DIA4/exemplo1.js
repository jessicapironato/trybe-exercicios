// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maçã', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['melancia', 'cereja', 'kiwi'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  const newSalad = [...fruit, ...additional]
  return newSalad
};

console.log(fruitSalad(specialFruit, additionalItens));