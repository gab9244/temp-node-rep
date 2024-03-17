///Modulos de caminho

const path = require('path');
//A propriedade sep retorna o separador, se é \ ou /
console.log(path.sep)

//Este método retorna o caminho até o arquivo base
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

//Este método retorna o nome do arquivo base 
const base = path.basename(filePath)
console.log(base)

//Este método retorna o caminho absoluto
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)