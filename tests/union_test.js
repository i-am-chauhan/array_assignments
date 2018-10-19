const assert=require('assert');
const {union}=require('../functionsOfArray');

assert.deepEqual(union([1,2,3,2,1],[12,3,4,2]),[1,2,3,4,12]);
console.log('1st test passed');
assert.deepEqual(union([0,00,12],[12,3,12,2]),[0,2,3,12]);
console.log('2st test passed');
assert.deepEqual(union([],[12,3,4,2]),[2,3,4,12]);
console.log('3st test passed');
