const assert=require('assert');
const {unique}=require('../functionsOfArray')

assert.deepEqual(unique([2,3,2,3]),[2,3]);
console.log('1st test passed');
assert.deepEqual(unique([]),[]);
console.log('2st test passed');
assert.deepEqual(unique([2,3,2,32]),[2,3,32]);
console.log('3st test passed');
