const fs = require('fs');
const path = require('path');
fs.readdir(process.argv[2], {
    withFiles: true
}, (err, list) => {
    if (err) {
        return console.error(err)
    } else {
        for (let item of list) {
            if (path.extname(item) === '.' + process.argv[3]) {
                console.log(item)
            }
        }
    }
})