const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length < 1) return "";

  let result = "";
  let count = 0;
  let i = 0;

  while (i < str.length) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result = `${result}${count !== 0 ? count + 1 : ""}${str[i]}`;
      count = 0;
    }
    i = i + 1;
  }

  return result;
}

module.exports = {
  encodeLine,
};
