const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

// ********** DONE **********

function getDNSStats(domains) {
  let map = {}

  if(domains.length <= 0) return map

  domains.forEach(domain => {
    let dns = ''

    domain.split('.').reverse().forEach( item => {
      dns = `${dns}.${item}`
      let getDns = map[dns]

      if(getDns) {
        map[dns] = getDns + 1
      } else {
        map[dns] = 1
      }
    })
  })


  return map
}

module.exports = {
  getDNSStats
};
