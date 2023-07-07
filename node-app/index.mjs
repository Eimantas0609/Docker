import fs from 'fs'

fs.appendFile('my_file.txt', 'File created on Node.js', (err) => {
if (err) throw err
console.log('File saved!')
})

setTimeout(() => console.log('Done'), 10000)