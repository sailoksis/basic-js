const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options = {}) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  const mainString = String(str);
  const additionString = String(addition);

  const repeatedAddition = Array(additionRepeatTimes)
    .fill(additionString)
    .join(additionSeparator);

  const combinedString = mainString + repeatedAddition;

  return Array(repeatTimes)
    .fill(combinedString)
    .join(separator);
}

module.exports = {
  repeater
};
