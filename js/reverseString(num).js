// Define a function reverseString that reverses a string. For example, reverseString("jag testar") should return the string "ratset gaj".

function reverseString(str){
  var strArr = str.split('')
  var revArr=[]

  for(var i= strArr.length- 1; i>=0; i--){
revArr.push(strArr[i])
  }
return revArr.join('')
}

var input1 = 'jag testar'
console.log(reverseString(input1))
