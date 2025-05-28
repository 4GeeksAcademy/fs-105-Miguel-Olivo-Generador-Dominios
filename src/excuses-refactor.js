window.onload= ()=>{
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
  
  let p = document.getElementById("Identificar")
  p.textContent= results.join('\n')
  // Escribir los resultados en el archivo 'excuses.txt'

}


console.log('Resultados guardados en resultados/excuses.txt');
