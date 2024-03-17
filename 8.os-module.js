const os = require('os')
//Info sobre o usuário atual
const user = os.userInfo()
// console.log(user)

//Retorna o tempo que o sistema esta rodando em segundos

// console.log(`O sistena esta ativo a ${os.uptime()} em segundos`)

const currentOS = {
    name:os.type(),
    release: os.release(),
    totalMem:  os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)