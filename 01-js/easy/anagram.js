/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // array1 = str1.toLowerCase().split('');
  // array2 = str2.toLowerCase().split('');

  // if(str1.length != str2.length){
  //   return false;
  // }
  // else{
  //   flag = true;
  //   for (const element of array1) {
  //     if(!array2.includes(element)){
  //       flag = false;
  //       break;
  //     }
  //   }
  //   return flag;
  // }

  const array1 = str1.toLowerCase().split('').sort().join('');
  const array2 = str2.toLowerCase().split('').sort().join('');

  return array1 === array2;
}

module.exports = isAnagram;
