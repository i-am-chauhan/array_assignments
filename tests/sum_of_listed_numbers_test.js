const assert=require('assert');
const sumOfElements=require('../functionsOfArray.js').sumOfElements;

assert.deepEqual(sumOfElements([12,13,15]),40);
console.log('1st test passed');
assert.deepEqual(sumOfElements([12,13,15,1]),41);
console.log('2st test passed');
assert.deepEqual(sumOfElements([1,2,3,4]),10);
console.log('3st test passed');
