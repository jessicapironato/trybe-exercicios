const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

  //Adicione seu código aqui
  const verifyAges = (arr, idadeMinima) => {
    return arr.every((person) => person.age >= idadeMinima)
  }

console.log(verifyAges(people, 50));
console.log(verifyAges(people, 14));