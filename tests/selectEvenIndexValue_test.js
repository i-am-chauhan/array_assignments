const assert=require('assert');
const evenIndexNumbers=require('../functionsOfArray.js').selectEvenIndexValues;

assert.deepEqual(evenIndexNumbers([1,2,3,4,5]),[1,3,5]);
console.log('1st test passed');
assert.deepEqual(evenIndexNumbers([1,2,3,4,5]),[1,3,5]);
console.log('2nd test passed');
assert.deepEqual(evenIndexNumbers([1,2,3,4,5]),[1,3,5]);
console.log('3rd test passed');
