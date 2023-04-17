const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */

// ********** DONE **********

function getEmailDomain(email) {
  let lastIndex = email.lastIndexOf('@'); 

  if(lastIndex) {
    return email.slice(lastIndex + 1)
  } else {
    return ''
  }
}

module.exports = {
  getEmailDomain
};
