const fs = require('fs');

let pronoun = ['my', 'your', 'our', 'super'];
let adj = ['crazy', 'fast', 'funky', 'sleepy'];
let noun = ['cat', 'ninja', 'banana', 'robot'];
let extensions = ['.com', '.org', '.dev', '.xyz'];

let resultados = [];

pronoun.forEach(p => {
  adj.forEach(a => {
    noun.forEach(n => {
      extensions.forEach(ext => {
        resultados.push(`${p}${a}${n}${ext}`);
      });
    });
  });
});

fs.writeFileSync('resultados/dominios_generados.txt', resultados.join('\n'));

console.log('Resultados guardados en resultados/dominios_generados.txt');
