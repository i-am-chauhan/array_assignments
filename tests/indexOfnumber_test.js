const assert=require('assert');
const indexOfValue=require('../functionsOfArray.js').indexOfValue;

assert.deepEqual(indexOfValue([2,4,6,8],4),1);
console.log('1st test passed');
assert.deepEqual(indexOfValue([2,4,6,8],2),0);
console.log('2nd test passed');
assert.deepEqual(indexOfValue([2,4,6,8],6),2);
console.log('3rd test passed');
assert.deepEqual(indexOfValue([2,4,6,8],7),-1);
console.log('4th test passed');
assert.deepEqual(indexOfValue([2,4,6,8,6],6),2);
console.log('5th test passed');
