const test=require('assert');
const lib=require('../functionsOfArray');

test.deepEqual(lib.countNumbersBelow([1,2,3,4],4),3);
test.deepEqual(lib.countNumbersBelow([4,4,4],4),0);
test.deepEqual(lib.countNumbersBelow([0,100],4),1);
