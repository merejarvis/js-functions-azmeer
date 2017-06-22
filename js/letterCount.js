// Write a function that takes a string that finds out how many times a character occurs. For example, the string "apple" would print the following:
//
// a - 1
// p - 2
// l - 1
// e - 1
// Hint: Loop through each letter, and increment the value to a key in an object. The key should be that object.
//
// BONUS: Make sure that lower case letters and upper case letters count for the same character. Also, ignore spaces and punctuation.


var str = 'apple'
var arrStr= str.split('')
var object ={}

for (var i = 0; i<arrStr.length; i++){
object.arrStr[i]=1

}

console.log(object)
