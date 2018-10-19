const assert=require('assert');
const selectOddNumbers=require('../functionsOfArray.js').selectOddNumbers;

assert.deepEqual(selectOddNumbers([12,13,15]),[13,15]);
assert.deepEqual(selectOddNumbers([12]),[]);
