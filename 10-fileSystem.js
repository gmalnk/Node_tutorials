const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt', 'ascii')

writeFileSync('./content/result-sync.txt','hello',{flag:'a'})

console.log(first,second);
