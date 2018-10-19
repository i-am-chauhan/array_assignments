const assert=require('assert');
const {zip}=require('../functionsOfArray');

assert.deepEqual(zip([1,2],[2,3]),[[1,2],[2,3]]);
console.log('1st test passed');
assert.deepEqual(zip([0],[2,3]),[[0,2]]);
console.log('2st test passed');
assert.deepEqual(zip([1,2,3],[4,5]),[[1,4],[2,5]]);
console.log('3st test passed');
