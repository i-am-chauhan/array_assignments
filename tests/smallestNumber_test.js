const assert=require('assert');
const smallestNumber=require('../functionsOfArray').getSmallestNumber;

assert.deepEqual(smallestNumber([23,-1,12,12,1,0]),-1);
console.log('1st test passed');
assert.deepEqual(smallestNumber([23,12,12,11,1]),1);
console.log('2nd test passed');
assert.deepEqual(smallestNumber([23]),23);
console.log('3rd test passed');
assert.deepEqual(smallestNumber([23,-23]),-23);
console.log('4th test passed');
