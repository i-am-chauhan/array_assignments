const something=require('assert');
const mapLength=require('../functionsOfArray').mapLength;

something.deepEqual(mapLength(["aftab","musta","shubham"]),[5,5,7]);
something.deepEqual(mapLength(["aftab","musta"]),[5,5]);
something.deepEqual(mapLength(["aftab","musta","shubham","nan"]),[5,5,7,3]);
