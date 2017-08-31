const program = require('commander')
const package = require('./package.json')
const fs = require('fs')
const python = require('python-shell')

program.version(package.version)
  .option('-f --jar <server jar>','')
  .option('-o --output <file>','')
  .parse(process.argv)


let burgerPath = __dirname + '/Burger';
try {
  fs.accessSync(burgerPath)
}catch(e){
  console.log('Need burger')
  require('./prepare')
}

console.log('run python')
python.run('setup.py', {
  scriptPath: burgerPath,
  args: []
}, (err) => {
  if (err) throw err
  console.log('finished')
})
