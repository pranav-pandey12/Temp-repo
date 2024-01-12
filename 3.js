// CommonJS , every file is module by default 
// Modules - Encapsulated Code 

// const names = require('./4-name')
const names = require('./4-name')
const SayHi = require('./5-utils')

const data = require('./6-alternative') 

require('./7-mind-granade')

console.log(data);
SayHi('susan')
SayHi(names.peter)
SayHi(names.t)