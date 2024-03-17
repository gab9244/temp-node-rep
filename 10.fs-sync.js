//Lendo e criando arquivos sincronicamente

//O Método readFileSync ler o conteúdo de um arquivo
const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second)

//O Método writeFileSync adiciona conteúdo a um arquivo e caso esse arquivo não exista ele será criado e terá o valor do segundo parâmetro de writeFileSync como conteúdo

writeFileSync('./content/result-sync.text',` Here is the result :  ${first}, ${second}`, {flag: 'a'} )