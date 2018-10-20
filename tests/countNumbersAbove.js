const test=require('assert');
const lib=require('../functionsOfArray');

test.deepEqual(lib.countNumbersAbove([2,45,56],4),2);
console.log('1st test passed');
test.deepEqual(lib.countNumbersAbove([2],4),0);
console.log('2nd test passed');
test.deepEqual(lib.countNumbersAbove([2,45,6,4,56],4),3);
console.log('3rd test passed');
