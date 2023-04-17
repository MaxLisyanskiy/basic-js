const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

// ********** DONE **********

class VigenereCipheringMachine {
  constructor(bool = true) {
    this.bool = bool
  }

  encrypt(message, key) {
    if(!message || !key) throw Error('Incorrect arguments!')

    return this.handleCrypt(message, key, 'encrypt')
  }
  decrypt(encryptedMessage, key) {
    if(!encryptedMessage || !key) throw Error('Incorrect arguments!')

    return this.handleCrypt(encryptedMessage, key, 'decrypt')
  }

  handleCrypt(msg, key, type) {
    // const codes = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const secretMsg = msg.toUpperCase()
    const secretKey = key.toUpperCase()
    const arr = secretMsg.split('')

    let result = [];
    let step = 0;

    arr.forEach((item, index) => {
        const charValue = secretMsg.charCodeAt(index);
        const isValid = charValue >= 65 && charValue <= 90 

        if (isValid) {
          const keyInCode = secretKey.charCodeAt(step % secretKey.length) - 65;
          const code = (type === 'encrypt') 
            ? (((charValue - 65) + keyInCode) % 26) + 65
            : (((charValue - 65) - keyInCode + 26) % 26) + 65
          result.push(String.fromCharCode(code));
          step++;
        } else {
          result.push(item);
        }
      })

    // console.log(result.join(""));
    return this.bool ? result.join("") : result.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
