const assert=require('assert');
const oddIndexNumbers=require('../functionsOfArray.js').selectOddIndexValues;

assert.deepEqual(oddIndexNumbers([1,2,3,4,5]),[1,3,5]);
