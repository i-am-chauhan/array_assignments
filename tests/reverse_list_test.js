const assert=require('assert');
const reverse=require('../functionsOfArray.js').reverse;

assert.deepEqual(reverse([2,4,5,6,7]),[7,6,5,4,2]);
assert.deepEqual(reverse([7]),[7]);
assert.deepEqual(reverse([2,4,5,8,7]),[7,8,5,4,2]);
assert.deepEqual(reverse([2,4,48,67]),[67,48,4,2]);
