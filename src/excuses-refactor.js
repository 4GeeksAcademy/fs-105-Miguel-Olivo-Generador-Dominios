const fs = require('fs');

let excuses = [
  'I am too busy',
  'I am sick',
  'I forgot',
  'I have an appointment',
  'I am tired',
];

let results = [];

excuses.forEach(excuse => {
  results.push(excuse);
});

// Escribir los resultados en el archivo 'excuses.txt'
fs.writeFileSync('resultados/excuses.txt', results.join('\n'));

console.log('Resultados guardados en resultados/excuses.txt');
