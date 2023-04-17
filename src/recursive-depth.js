const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

// ********** DONE **********

class DepthCalculator {
  calculateDepth(array) {
    let result = 1

    array.forEach(item => {
      let depth = 1;

      if (Array.isArray(item)) {
        depth += this.calculateDepth(item);

        if (depth > result) {
          result = depth;
        }
      }

    });

    // console.log(result)
    return result;
  }
}


module.exports = {
  DepthCalculator
};
