const {readFileSync, writeFileSync} = require('fs')

const first=readFileSync('./content/file.txt','utf8');

console.log(first);  

writeFileSync(
    './content/result-sync.txt',
    `Here is the result ${first} `,
    )
