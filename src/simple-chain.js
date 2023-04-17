const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

// ********** DONE **********

const chainMaker = {
  result: [],

  getLength() {
    return this.result.length
  },

  addLink(value) {
    this.result.push(value)
    return this;
  },

  removeLink(position) {
    if(typeof position !== 'number' || (position === 0 || Math.sign(position) === -1) || this.result[position] === undefined) {
      this.result = []
      throw Error(`You can't remove incorrect link!`)
    }

    this.result = this.result.filter((_, index) => index + 1 !== position)

    return this;
  },

  reverseChain() {
    this.result = this.result.reverse()
    return this;
  },

  finishChain() {
    let str = ''

    this.result.forEach((item, index) => {
      str = `${str}( ${item} )${index + 1 !== this.result.length ? '~~': ''}`
    })

    this.result = []

    return str
  }
};

module.exports = {
  chainMaker
};
