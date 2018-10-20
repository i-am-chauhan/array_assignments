const assert=require('assert');
const {extractDigits}=require('../functionsOfArray');

assert.deepEqual(extractDigits(1234),[1,2,3,4]);
console.log('1st test passed');
assert.deepEqual(extractDigits(0),[0]);
console.log('2nd test passed');
assert.deepEqual(extractDigits(12),[1,2]);
console.log('3rd test passed');
