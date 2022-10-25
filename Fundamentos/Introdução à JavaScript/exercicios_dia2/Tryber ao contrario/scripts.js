let word = 'tryber';
let invertida = '';

for (let index = 0; index < word.length; index += 1) {
  
    invertida= invertida + (word[word.length - 1 - index]);
}

console.log(invertida)
