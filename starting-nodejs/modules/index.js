
// Modules javascript
const { printName, lastName } = require('./printName')

printName(`John ${lastName}`)

// Modules native

const os = require('os')

const checkSystem = () => {
  console.log(os.type())
  console.log(os.release())
  console.log(os.platform())
  console.log(os.arch())
  console.log(os.cpus()[0].model)
}

checkSystem()