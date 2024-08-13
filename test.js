const path = require('path')
const fs = require('fs')
const child_process = require('child_process')
const { stdin } = require('process')

console.log(path.dirname('C:\\Users\\LENOVO\\OneDrive\\Desktop\\SEM-3\\WT'))
console.log(path.resolve('C:\\Users\\LENOVO\\OneDrive\\Desktop\\SEM-3\\WT','\\git-bash.lnk'))
fs.stat('test.js', (err,data)=>{
    console.log(data)
})

let a = 2 + 3
console.log(a);