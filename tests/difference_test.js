const assert=require('assert');
const {difference}=require('../functionsOfArray');

assert.deepEqual(difference([12,12,1,2],[1,12]),[2]);
console.log('1st test passed');
assert.deepEqual(difference([3,4,2,6],[6,3,78,6]),[2,4]);
console.log('2st test passed');
assert.deepEqual(difference([0],[0]),[]);
console.log('3st test passed');
