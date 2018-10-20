const sortArray=function(a,b){
  return a-b;
}
//function to select odd numbers in an array
const selectOddNumbers=function(source) {
  return source.filter(function(number) { 
    return number%2!=0;
  });
}
exports.selectOddNumbers=selectOddNumbers;

//function to select even numbers in an array
const selectEvenNumber=function(source) {
  return source.filter(function(number) { 
    return number%2==0;
  });
} 
exports.listOfEvenNumbers=selectEvenNumber;

//function to add all numbers of an given array
const sumOfElements=function(source) {
  return source.reduce(function(num1,num2) {
    return num1 + num2;
  });
}
exports.sumOfElements=sumOfElements;

//function to select that values which have odd index
const selectEvenIndexValues=function(source){
  return source.filter(function(number,index) {
    if(index%2==0) 
      return number;
  });
}
exports.selectEvenIndexValues=selectEvenIndexValues;

//function to reverse all elements of an array
const reverse=function(source){
  return source.reduce(function(initializer,value) {
    initializer.unshift(value);
    return initializer;
  },[]);
}
exports.reverse=reverse;

//function to generate fibonacci series in an array upto given number of terms
const createFibonacciSeries= function(numberOfTerms){
  let result=[];
  result[0]=0;
  if(numberOfTerms>1){
    result[1]=1;
  }
  for(let index=2; index<numberOfTerms; index++){
    result[index]=result[index-1]+result[index-2];
  }
  return result;
}
exports.fibonacci=createFibonacciSeries;

//function to generate fibonacci in reverse order
const reverseFibonacci=function(noOfTerms){
  let list=createFibonacciSeries(noOfTerms);
  let result=reverse(list);
  return result;
}
exports.reverseFibonacci=reverseFibonacci;

//function to find the greatest number in an given array
const getGreatestNumber=function(source){
  let result=0;
  for(let index=0; index<source.length; index++){
    if(result<source[index])
      result=source[index];
  }
  return result;
}
exports.greatestNumber=getGreatestNumber;

const getSmallestNumber=function(source){
  let result=source[0];
  for(let index=0; index<source.length; index++){
    if(result>source[index])
      result=source[index];
  }
  return result;
}
exports.getSmallestNumber=getSmallestNumber;

const average=function(source){
  let result=0;
  for(let index=0; index<source.length; index++){
    result+=source[index];
  }
  return result/(source.length);
}
exports.average=average;

const mapLength=function(source){
  let result=[];
  for(let index=0; index<source.length; index++){
    result.push(source[index].length);
  }
  return result;
}
exports.mapLength=mapLength;

const countOdds=function(source){
  let count=0;
  for(let index=0; index<source.length; index++){
    if(source[index]%2!=0)
      count++;
  }
  return count;
}
exports.countOdds=countOdds;

const countEvens=function(source){
  let count=0;
  for(let index=0; index<source.length; index++){
    if(source[index]%2==0)
      count++;
  }
  return count;
}
exports.countEvens=countEvens;

const countNumbersAbove=function(source,limit){
  let count=0;
  for(let index=0; index<source.length; index++){
    if(source[index]>limit)
      count++;
  }
  return count;
}
exports.countNumbersAbove=countNumbersAbove;

const countNumbersBelow=function(source,limit){
  let count=0;
  for(let index=0; index<source.length; index++){
    if(source[index]<limit)
      count++;
  }
  return count;
}
exports.countNumbersBelow=countNumbersBelow;

const indexOfValue=function(source,value){
  let count='';
  for(let index=0; index<source.length; index++){
    if(source[index]==value){
      count=index;
    }
  }
  return count;
}
exports.indexOfValue=indexOfValue;

const isAscending=function(source){
  message=true;
  for(let index=0; index<source.length-1; index++){
    message=(source[index]<source[index+1]);
    if(!message){
      return message;
    }
  }
  return message;
}
exports.isAscending=isAscending;

const isDescending=function(source){
  message=true;
  for(let index=0; index<source.length-1; index++){
    message=(source[index]>source[index+1]);
    if(!message){
      return message;
    }
  }
  return message;
}
exports.isDescending=isDescending;

const extractDigits = function(number){
  let digitsOfNumbers=[];
  let string=""+number;
  for(let index=0; index<string.length; index++){
    digitsOfNumbers.push(+string[index]);
  }
  return digitsOfNumbers;
}
exports.extractDigits=extractDigits;

const unique = function(source){
  let testObject={};
  let result=[];
  for(let index=source.length-1; index>=0; index--){
    testObject[source[index]]=index;
  }
  let keys=Object.keys(testObject);
  for(let index=0; index<keys.length; index++){
    result.push(+keys[index]);
  }
  return result;
}
exports.unique=unique;

const union = function(list1,list2){
  let result=list1.slice();
  for(let index=0; index<list2.length; index++){
    result.push(list2[index]);
  }
  return unique(result);
}
exports.union=union;

const intersection = function(source1,source2){
  let testObject={};
  let result=[];
  for(let index=source1.length-1; index>=0; index--){
    testObject[source1[index]]=source1[index];
  }
  let length=source2.length;
  for(let index=0; index<length; index++){
    if(testObject[source2[index]]==source2[index])
      result.push(source2[index]);
  }
  return unique(result);
}
exports.intersection=intersection;

const difference = function(source1,source2){
  let testObject={};
  let result=[];
  for(let index=source2.length-1; index>=0; index--){
    testObject[source2[index]]=source2[index];
  }
  let length=source1.length;
  for(let index=0; index<length; index++){
    if(testObject[source1[index]]!=source1[index])
      result.push(source1[index]);
  }
  return unique(result);
}
exports.difference=difference;

const isSubset = function(set,subset){
  let testObject={};
  for(let index=set.length-1; index>=0; index--){
    testObject[set[index]]=set[index];
  }
  let length=subset.length;
  for(let index=0; index<length; index++){
    if(testObject[subset[index]]!=subset[index])
      return false;
  }
  return true;
}
exports.isSubset=isSubset;

const zip = function(source1,source2){
  let result=[];
  let arrayContent=[];
  let length=source1.length;
  if(source2.length<source1.length){
    length=source2.length;
  }
  for(let index=0; index<length; index++){
    arrayContent[0]=source1[index];
    arrayContent[1]=source2[index];
    result.push(arrayContent.slice());
  }
  return result;
}
exports.zip=zip;

const rotate = function(source,indexFromRotate){
  let result=[];
  let sourceIndex=0;
  for(let index=0; index<source.length; index++){
    sourceIndex=indexFromRotate+index;
    if(sourceIndex>=source.length){
      sourceIndex=sourceIndex-source.length;
    }
    result[index]=source[sourceIndex];
  }
  return result;
}
exports.rotate=rotate;

const partition= function(source,value){
  let result=[];
  let firstNestedArray=[];
  let secNestedArray=[];
  for(let index=0; index<source.length; index++){
    if(source[index]<=value){
      firstNestedArray.push(source[index]);
    } else {
      secNestedArray.push(source[index]);
    }
  }
  result[0]=firstNestedArray.sort(sortArray);
  result[1]=secNestedArray.sort(sortArray);
  return result;
}
exports.partition=partition;
