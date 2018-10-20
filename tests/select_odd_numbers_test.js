const assert=require('assert');
const selectOddNumbers=require('../functionsOfArray.js').selectOddNumbers;

assert.deepEqual(selectOddNumbers([12,13,15]),[13,15]);
console.log('1st test passed');
assert.deepEqual(selectOddNumbers([12]),[]);
console.log('2st test passed');
