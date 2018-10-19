const assert=require('assert');
const result=require('../functionsOfArray.js').reverseFibonacci;

assert.deepEqual(result(12),[89,55,34,21,13,8,5,3,2,1,1,0]);
assert.deepEqual(result(1),[0]);
assert.deepEqual(result(2),[1,0]);
assert.deepEqual(result(3),[1,1,0]);
assert.deepEqual(result(4),[2,1,1,0]);
assert.deepEqual(result(5),[3,2,1,1,0]);
assert.deepEqual(result(6),[5,3,2,1,1,0]);
