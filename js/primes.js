
// Using your isPrime() function, create a function primes that will return an array of all prime numbers up to a certain amount.
//loop thru numbers smaller than it
//if prime; store in array

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

function primes(upperLimit){
  var arr = []
  for(var j = 2; j<= upperLimit; j++){
    if(isPrime(j)){
      arr.push(j)
    }
  }
  return arr
}

var num1 = 37 //Enter number 2 and above
console.log(primes(num1))
