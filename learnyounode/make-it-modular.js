const myModule = require('./mymodule')
const dir = process.argv[2]
const ext = process.argv[3]

const callback = function (err, data) {
    if (err) throw err
    data.forEach((file) => {
        console.log(file);
    })
}

myModule(dir, ext, callback)