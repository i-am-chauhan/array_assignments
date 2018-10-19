const assert=require('assert');

const smallestNumber=require('../functionsOfArray').getSmallestNumber;

assert.deepEqual(smallestNumber([23,-1,12,12,1,0]),-1);
assert.deepEqual(smallestNumber([23,12,12,11,1]),1);
assert.deepEqual(smallestNumber([23]),23);
