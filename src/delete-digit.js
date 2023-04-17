const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

// ********** DONE **********

 function deleteDigit(number) {
	const arr = String(number).split('')
	let result = 0

	function accValues(arr, index) {
		let newArr = []
      	let result = []

      for (let key in arr) {
		newArr.push(arr[key])
      }

	delete newArr[index];


      newArr.forEach((item, index) => {
        if(item === '0' && result.length > 0) {
          result.push(item)
        } else if(item && item !== '0') {
          result.push(item)
        }
      })

      return result.join('')
	}

	arr.forEach((item, index) => {
		const value = accValues(arr, index)

		if(+value > result) result = +value
	})

	return Number(result)
}

module.exports = {
  deleteDigit
};
