
//Agora vamos demostrar como usar packages no node

//No código abaixo, depois de termos baixado o lodash com o npm vamos ultiliza-lo com o node
const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems) // [1,2,3,4]

//Como podemos ver flattenDeep() do lodash plana a array aninhada


//.gitignore é um arquivo que espeficica quais arquivos devem ser ignorados pelo controle de fontes