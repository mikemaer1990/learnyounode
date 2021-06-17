const fs = require('fs');

const data = fs.readFileSync(process.argv[2]);
let count = 0

data.forEach(letter => {
    if (letter.toString() === '10') {
        count++
    }
})
console.log(count);