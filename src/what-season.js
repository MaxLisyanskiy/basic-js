const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

// ********** DONE **********

 function getSeason(date) {

  if(!date) return 'Unable to determine the time of year!'

  const isCorrect = date.toString === Date.prototype.toString
  const isDate = new Date(date).getMonth() + 1

  if(isDate && typeof date === 'object' && isCorrect) {
      if(isDate === 12 || isDate === 1 || isDate === 2) {
        return 'winter'
      } else if(isDate === 3 || isDate === 4 || isDate === 5) {
        return 'spring'
      } else if(isDate === 6 || isDate === 7 || isDate === 8) {
        return 'summer'
      } else {
        return 'autumn'
      }
  } else {
    throw Error('Invalid date!')
  }
}

module.exports = {
  getSeason
};
