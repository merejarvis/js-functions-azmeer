// Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel and false, otherwise.

function isCharacterAVowel(char){
switch(char){
case 'a':
return true;

case 'e':
return true;
case 'i':
return true;

case 'o':
return true;

case 'u':
return true;

default:
return false;
}
}

var test= isCharacterAVowel('e')
console.log(test)
