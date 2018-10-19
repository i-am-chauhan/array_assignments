const assert=require('assert');
const {intersection}=require('../functionsOfArray');

assert.deepEqual(intersection([1,2,3,4,5],[3,5,4,5]),[3,4,5]);
console.log('1st test passed');
assert.deepEqual(intersection([4,5,3,4],[23,45]),[]);
console.log('2st test passed');
assert.deepEqual(intersection([0],[0]),[0]);
console.log('3st test passed');
