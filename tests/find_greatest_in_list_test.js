const assert=require('assert');
const greatestNumber=require('../functionsOfArray.js').greatestNumber;

let array=[12,3,4,5,45];
let result=greatestNumber(array);
assert.deepEqual(45,result);
assert.deepEqual(greatestNumber([12,234,45,56]),234);
assert.deepEqual(greatestNumber([23,45,46,76]),76);
assert.deepEqual(greatestNumber([43,45,53,88]),88);
