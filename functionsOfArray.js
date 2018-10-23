const sortArray=function(a,b){
  return a-b;
}

const isEven=function(number) {
  return number%2==0;
}

const isOdd=function(number) {
  return number%2!=0;
}

const sumOfTwoNumbers=function(num1,num2) {
  return num1 + num2;
}

//function to select odd numbers in an array
const selectOddNumbers=function(source) {
  return source.filter(isOdd);
}
exports.selectOddNumbers=selectOddNumbers;

//function to select even numbers in an array
const selectEvenNumber=function(source) {
  return source.filter(isEven);
} 
exports.listOfEvenNumbers=selectEvenNumber;

//function to add all numbers of an given array
const sumOfElements=function(source) {
  return source.reduce(sumOfTwoNumbers);
}
exports.sumOfElements=sumOfElements;

//function to select that values which have odd index
const isEvenIndexValues=function(number,index) {
  if(isEven(index)) 
    return number;
}

const selectEvenIndexValues=function(source){
  return source.filter(isEvenIndexValues);
}
exports.selectEvenIndexValues=selectEvenIndexValues;

//function to reverse all elements of an array
const reversePush=function(initializer,value) {
  initializer.unshift(value);
  return initializer;
}

const reverse=function(source){
  return source.reduce(reversePush,[]);
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
const max=function(firstNumber,secNumber) {
  return firstNumber>secNumber?firstNumber:secNumber;
}

const getGreatestNumber=function(source){
  return source.reduce(max);
}
exports.greatestNumber=getGreatestNumber;

//function to find the smallest number in an given array
const min=function(firstNumber,secNumber) {
  return firstNumber<secNumber?firstNumber:secNumber;
}

const getSmallestNumber=function(source){
  return source.reduce(min);
}
exports.getSmallestNumber=getSmallestNumber;

//function to find average of numbers in an given array
const average=function(source){
  return sumOfElements(source)/source.length;
}
exports.average=average;

//function to map the length of elements of an given array
const calcLength=function(element) {
  return element.length;
}

const mapLength=function(source){
  return source.map(calcLength);
}
exports.mapLength=mapLength;

//function to count odd numbers of an given array
const countOdds=function(source){
  return selectOddNumbers(source).length;
}
exports.countOdds=countOdds;

//function to count even numbers of an given array
const countEvens=function(source){
  return selectEvenNumber(source).length;
}
exports.countEvens=countEvens;

//function to count greater numbers from a given in an given array
const isabove=function(limit){
  return function(value) {
    return value>limit;
  }
}

const countNumbersAbove=function(source,limit){
  return source.filter(isabove(limit)).length;
}
exports.countNumbersAbove=countNumbersAbove;

//function to count smaller numbers from a given in an given array
const isBelow=function(limit){
  return function(value) {
    return value<limit;
  }
}

const countNumbersBelow=function(source,limit){
  return source.filter(isBelow(limit)).length;
}
exports.countNumbersBelow=countNumbersBelow;

const indexOfValue=function(source,value){
  return source.indexOf(value);
}
exports.indexOfValue=indexOfValue;

const isAscending=function(source){
  let message=true;
  return source.every(function(element,index,array) {
    if(index<array.length-1)
      message=(array[index+1]>element);
    return message;
  });
}
exports.isAscending=isAscending;

const isDescending=function(source){
  let message=true;
  return source.every(function(element,index,array) {
    if(index<array.length-1)
      message=(array[index+1]<element);
    return message;
  });
}
exports.isDescending=isDescending;

const extractDigits = function(number){
  let string=""+number;
  return string.split('').map(function(element) {
    return +element;
  });
}
exports.extractDigits=extractDigits;

const unique = function(source){
  return source.reduce(function(initializer,element) {
    if(!initializer.includes(element))
      initializer.push(element);
    return initializer;
  },[]).sort(sortArray);
}
exports.unique=unique;

const union = function(list1,list2){
  let result=list2.reduce(function(initializer,element) {
    initializer.push(element);
    return initializer;
  },list1);
  return unique(result);
}
exports.union=union;

const intersection = function(source1,source2){
  let result= source2.filter(function(element) {
    return source1.includes(element);
  });
  return unique(result);
}
exports.intersection=intersection;

const difference = function(source1,source2){
  let result=source1.filter(function(element) {
    return !(source2.includes(element));
  });
  return unique(result);
}
exports.difference=difference;

const isSubset = function(set,subset){
  return subset.every(function(element) {
    return set.includes(element);
  });
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

const partition= function(source,limit){
  let result=source.reduce(function(initializer,value) {
    value<=limit ? initializer[0].push(value):initializer[1].push(value);
  return initializer;
  },[[],[]]);
  return [result[0].sort(sortArray),result[1].sort(sortArray)];
}
exports.partition=partition;
