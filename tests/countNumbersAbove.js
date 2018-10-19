const test=require('assert');
const lib=require('../functionsOfArray');

test.deepEqual(lib.countNumbersAbove([2,45,56],4),2);
test.deepEqual(lib.countNumbersAbove([2],4),0);
test.deepEqual(lib.countNumbersAbove([2,45,6,4,56],4),3);
