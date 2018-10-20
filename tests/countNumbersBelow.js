const assert=require('assert');
const lib=require('../functionsOfArray');

assert.deepEqual(lib.countNumbersBelow([1,2,3,4],4),3);
console.log('1st test passed');
assert.deepEqual(lib.countNumbersBelow([4,4,4],4),0);
console.log('2nd test passed');
assert.deepEqual(lib.countNumbersBelow([0,100],4),1);
console.log('3rd test passed');
