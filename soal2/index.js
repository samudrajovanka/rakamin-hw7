const fs = require('fs');

fs.readFile('./soal2/homework.log', 'utf-8', (errRead, data) => {
  if (errRead) {
    console.log(errRead);
    console.log('error read file')
  } else {
    fs.writeFile('./soal2/log.txt', data, (errWrite) => {
      if (errWrite) {
        console.log('error write file');
      } else {
        console.log('File created!');
      }
    });
  }
});
