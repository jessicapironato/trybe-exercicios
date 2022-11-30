const names = ['João', 'Irene', 'Fernando', 'Maria'];

// Adicione seu código aqui

const nome5Letras = () => {
  return names.find((nome) => nome.length === 5);
}
console.log(nome5Letras())