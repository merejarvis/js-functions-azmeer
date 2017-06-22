//maxOfThree(num1, num2, num3)
//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. Use the if-then-else //construct available in Javascript.

function maxOfThree(num1, num2, num3){
var largest = 0
if(num1>largest){
largest = num1
}
if(num2>largest){
largest= num2
}
if(num3>largest){
largest= num3
}
return largest
}

var max = maxOfThree(8,200,3);
console.log(max)
