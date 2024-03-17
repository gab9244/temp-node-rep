//CommonJS, every file is module (by default)
//Module - Encapsulated Code (only share minimum)

const names = require('./4.firstModule')
const sayHi = require('./5.secondModule')
const data = require('./6.alternative-flavor')

console.log(data)
require('./7.mind-granade')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

console.log(names)