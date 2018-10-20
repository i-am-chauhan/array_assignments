const assert=require('assert');
const {partition}=require('../functionsOfArray');

assert.deepEqual(partition([1,2,5,3,6,4,7,8,9],5),[[1,2,3,4,5],[6,7,8,9]]);
console.log('1st test passed');
assert.deepEqual(partition([2,4,6,8,10],5),[[2,4],[6,8,10]]);
console.log('2nd test passed');
assert.deepEqual(partition([3,0],5),[[0,3],[]]);
console.log('3rd test passed');
