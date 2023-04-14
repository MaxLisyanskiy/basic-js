const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

 function getCommonCharacterCount(s1, s2) {
  let sum = 0
  let smallString = s1.length <= s2.length ? s1.split('') : s2.split('')
  let bigString = s1.length > s2.length ? s1.split('') : s2.split('')

  smallString.forEach(symbol => {
    let index = bigString.indexOf(symbol);
    if(index !== -1) {
      delete bigString[index];
      sum++
    }
  })
	return sum
}

module.exports = {
  getCommonCharacterCount
};
