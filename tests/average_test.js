const assert=require('assert');
const average=require('../functionsOfarray').average;

assert.deepEqual(average([45]),45);
assert.deepEqual(average([45,35]),40);
assert.deepEqual(average([10,20,30]),20);
