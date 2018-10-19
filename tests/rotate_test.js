const assert=require('assert');
const {rotate}=require('../functionsOfArray');

assert.deepEqual(rotate([1,2,3,4,5],2),[3,4,5,1,2]);
console.log('1st test passed');
assert.deepEqual(rotate([1,2,3,4,5],4),[5,1,2,3,4]);
console.log('2st test passed');
assert.deepEqual(rotate([12,13,3],1),[13,3,12]);
console.log('3st test passed');
