/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    str = str.toLowerCase();
    array = str.split('');
    number =0;

    const vowels =['a', 'e', 'i', 'o', 'u']

    for (const vowel of array) {
      if(vowels.includes(vowel)){
        number++;
      }
    }

    return number;
}

module.exports = countVowels;