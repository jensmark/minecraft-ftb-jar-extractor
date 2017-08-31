
const clone = require('git-clone');

clone('git@github.com:mcdevs/Burger.git', './Burger', (err) => {
  if (err) console.trace(err)
  console.log('Burger downloaded')
})
