// findLongestWord(arr)
//
// Write a function findLongestWord that takes an array of words and returns the length of the longest word in the array.

//iterate loop over array
//find length of each element
//longestWordLength= 0
//length(i)>longestWordLength, store longestWordLength=length(i)
//return longestWordLength

function findLongestWord(arr){
  var longestWordLength = 0;
for(var i = 0; i<arr.length; i++){
  if(arr[i].length> longestWordLength){
    longestWordLength= arr[i].length
}
}
  return longestWordLength
}

var arr1=['ironman', 'blackpanther', 'captainamerica', 'blackwidow', 'thor']
console.log(findLongestWord(arr1))
