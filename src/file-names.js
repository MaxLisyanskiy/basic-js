const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

// ********** DONE **********

function renameFiles(names) {
  let map = new Map()

  if(names.length < 0) return []

  return names.map( item => {
    let getValue = map.get(item)

    if(getValue) {
      let value = `${item}(${getValue})`
      map.set(item, getValue + 1)
      map.set(value, 1)
      return value
    } else {
      map.set(item, 1)
      return item
    }
  })

}

module.exports = {
  renameFiles
};
