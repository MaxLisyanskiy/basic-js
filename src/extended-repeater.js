const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

// ********** DONE **********

 function repeater(str, options) {
  const { 
    repeatTimes = 1, 
    separator = '+', 
    addition = '', 
    additionRepeatTimes = 1, 
    additionSeparator = '|' 
  } = options

  let result = ''
  let additionStr = ''

  if(String(addition).trim() !== '') {
    for (let j = 0; j < additionRepeatTimes; j++) {
      additionStr = `${additionStr}${String(addition)}${j !== additionRepeatTimes - 1 ? additionSeparator: ''}`
    }
  }

  for (let i = 0; i < repeatTimes; i++) {
    result = `${result}${str}${additionStr}${i !== repeatTimes - 1 ? separator: ''}`
  }

  return result
}


module.exports = {
  repeater
};
