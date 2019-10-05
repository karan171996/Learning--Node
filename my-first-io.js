const fs = require('fs')

const bsf =fs.readFileSync(process.argv[2])
let stringData = bsf.toString();

console.log(stringData.split('\n').length - 1);
