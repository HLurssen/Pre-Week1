// SNIPPET 1 
function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');

// Answer 
console.log ("hello Dojo")



// SNIPPET 2
function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);

// VAR
result 
// VALUE
hello 


//SNIPPET 3
function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('x is', result);

// VAR
result 
//VALUE
3


//SNIPPET 4
var num = 15;
console.log(num);
function logAndReturn(num){
   console.log(num);   
   return num;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);

// VAR
num - result 
// VALUE
15 - 10


//SNIPPET 5
var num = 15;
console.log(num);
function timesTwo(num){
   console.log(num);   
   return num*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);


// VAR

// VALUE



//SNIPPET 6
function timesTwoAgain(num) {
    console.log('num is', num);
    y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);


// VAR

// VALUE



//SNIPPET 7
function sumNums(num1, num2) {  
    return num1+num2;
 }
 console.log(sumNums(2,3))
 console.log(sumNums(3,5))
 

// VAR

// VALUE



//SNIPPET 8
function printSumNums(num1, num2) {
    console.log(num1);   
    return num1+num2;
 }
 console.log(printSumNums(2,3))
 console.log(printSumNums(3,5))
 

// VAR

// VALUE



//SNIPPET 9
function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result);


// VAR

// VALUE



//SNIPPET 10
function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);


// VAR

// VALUE
