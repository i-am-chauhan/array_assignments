const assert=require('assert');
const greatestNumber=require('../functionsOfArray.js').greatestNumber;

assert.deepEqual(greatestNumber([12,3,4,5,45]),45);
console.log('1st test passed');
assert.deepEqual(greatestNumber([12,234,45,56]),234);
console.log('2nd test passed');
assert.deepEqual(greatestNumber([23,45,46,76]),76);
console.log('3rd test passed');
assert.deepEqual(greatestNumber([43,45,53,88]),88);
console.log('4th test passed');
