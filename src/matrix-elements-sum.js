const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

// ********** DONE **********

function getMatrixElementsSum(matrix) {
  let result = 0
  let newArr = []

  function addInNewArray(arr) {
    arr.forEach((item, index) => {
      if(newArr[index]) {
        newArr[index].push(item)
      } else {
        newArr[index] = [item]
      }
    }) 
  }

  function sumArray(arr) {
    let sum = 0

    for (let i = 0; i < arr.length; i++) {
      if(i === 0 && arr[i] === 0) {
        i = arr.length
      } else if(arr[i] === 0) {
        i = arr.length
      } else {
        sum += arr[i]
      }
    }

    result += sum
  }

  matrix.forEach(item => addInNewArray(item))

  newArr.forEach(item => sumArray(item))

  return result
}

module.exports = {
  getMatrixElementsSum
};
