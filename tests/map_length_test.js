const something=require('assert');
const mapLength=require('../functionsOfArray').mapLength;

something.deepEqual(mapLength(["aftab","musta","shubham"]),[5,5,7]);
console.log('1st test passed');
something.deepEqual(mapLength(["aftab","musta"]),[5,5]);
console.log('2nd test passed');
something.deepEqual(mapLength(["aftab","musta","shubham","nan"]),[5,5,7,3]);
console.log('3rd test passed');
