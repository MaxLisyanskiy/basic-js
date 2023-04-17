const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

// ********** DONE **********

function minesweeper(matrix) {
  let result = []

  for (let i = 0; i < matrix.length; i++) {
    result.push([])

    for (let j = 0; j < matrix[i].length; j++) {
      let value = 0;
      const current = matrix[i]
      const nextValue = matrix[i + 1]
      const prevValue = matrix[i - 1]
      
      if (current[j + 1] || current[j - 1]) {
        value += 1;
      }

      if (nextValue) {
        if (nextValue[j] || nextValue[j + 1] || nextValue[j - 1]) {
          value += 1;
        }
      }

      if (prevValue) {
        if (prevValue[j] || prevValue[j + 1] || prevValue[j - 1]) {
          value += 1;
        }
      }

      result[i][j] = value;
    }
  }

  return result
}

module.exports = {
  minesweeper
};
