const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

// ********** DONE **********

function createDreamTeam(members) {
  if(!Array.isArray(members)) return false

  const sorted = members.map( item => {
    if(typeof item === 'string') {
      let string = item.trim()
      return string[0].toUpperCase()
    }
  })

  return sorted.sort().join('')
}

module.exports = {
  createDreamTeam
};
