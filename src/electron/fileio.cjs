const fs = require('fs')
const path = require('path')

function createDirectory(dir, addition = '') {
    console.log(dir, addition)
    const dirToAdd = path.join(dir, addition)
    if (!fs.existsSync(dirToAdd)){
        fs.mkdirSync(dirToAdd, { recursive: true });
    }
}

module.exports = {
    createDirectory
}