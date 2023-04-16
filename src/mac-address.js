const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(inputString) {
  const addressParts = inputString.split("-");

  // Check if the input string has exactly 6 parts
  if (addressParts.length !== 6) {
    return false;
  }

  // Check if each part is a valid hexadecimal value
  for (let part of addressParts) {
    // Check if the part has exactly 2 characters
    if (part.length !== 2) {
      return false;
    }

    // Check if each character in the part is a valid hexadecimal digit
    for (let char of part) {
      if (!/[0-9A-F]/.test(char)) {
        return false;
      }
    }
  }

  return true;
}
module.exports = {
  isMAC48Address
};
