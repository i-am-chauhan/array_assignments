const assert=require('assert');
const countEvens=require('../functionsOfArray').countEvens;

assert(countEvens([12,13]),1);
console.log('1st test passed');
assert(countEvens([12,13,2,4]),3);
console.log('2nd test passed');
assert(countEvens([12,11,10,13]),2);
console.log('3rd test passed');
