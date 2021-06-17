const args = process.argv.slice(2)
let total = 0
for (let x of args) {
    total += parseInt(x)
}

console.log(total);