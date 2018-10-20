const assert=require('assert');
const average=require('../functionsOfarray').average;

assert.deepEqual(average([45]),45);
console.log('1st test passed');
assert.deepEqual(average([45,35]),40);
console.log('2nd test passed');
assert.deepEqual(average([10,20,30]),20);
console.log('3rd test passed');
