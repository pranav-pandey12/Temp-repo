// npm - global command, comes with node
// npm --version

// local directory - use it only in the particular project

// npm i <packagename>

// global dependency 
// npm install -g <packageName>

// packet.json - manifest file (store important info about project / package )
 
// manual approach ( create packet.json in the root , create properties etc)

// npm init ( step by step , press enter to skip)
 
// npm init -y (everything default)

const _=require('lodash')

const items=[1,[2,[3,[4]]]]

const newItems= _.flattenDeep(items)
console.log(newItems)