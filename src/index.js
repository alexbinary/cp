
let ncp = require('ncp')
let path = require('path')

let mkdirp = require('alexbinary.mkdirp')
let promisify = require('alexbinary.promisify')
let callbackify = require('alexbinary.callbackify')

function cp (sourcePath, targetPath) {
  return mkdirp(path.dirname(targetPath))
  .then(() => promisify(ncp)(sourcePath, targetPath))
}

module.exports = callbackify(cp)
