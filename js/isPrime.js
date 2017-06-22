// isPrime(num)
//
// Create a function to return true or false if a number passed in a prime number.

//check if number can be divided by numbers smaller than it
//2 is the first prime number
//run thru loop
//if else

function isPrime(num){
if (num===2){
  return true
}
  else{
    for(var i= 2; i<num; i++){
      if((num%i)===0){
        return false
      }
      else {
        return true
      }
    }
  }
}
var num1 = 37 //Enter number 2 and above
console.log(isPrime(num1))
