const { NotImplementedError } = require('../lib');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  while (n >= 10) {
    const digits = String(n);
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
      let dig = digits[i];
      let num = (Number(dig));
      sum += num;
    }
    n = sum;
  }
 

  return n;
}

module.exports = {
  getSumOfDigits
};
