const assert=require('assert');
const isDescending=require('../functionsOfArray.js').isDescending;

assert.deepEqual(isDescending([12,11,10,9]),true);
console.log('1st test passed');
assert.deepEqual(isDescending([12,11,12,9]),false);
console.log('2nd test passed');
assert.deepEqual(isDescending([12,11,15,9]),false);
console.log('3rd test passed');
assert.deepEqual(isDescending([]),true);
console.log('4th test passed');
assert.deepEqual(isDescending([0]),true);
console.log('5th test passed');
