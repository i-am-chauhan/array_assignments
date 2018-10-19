const assert=require('assert');
const sumOfElements=require('../functionsOfArray.js').sum;

assert.deepEqual(sumOfElements([12,13,15]),40);
assert.deepEqual(sumOfElements([12,13,15,1]),41);
