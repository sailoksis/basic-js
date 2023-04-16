const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, options) {
  const repeatTimes = options.hasOwnProperty('repeatTimes') ? options.repeatTimes : 1;
  const separator = options.hasOwnProperty('separator') ? options.separator : '+';
  let addition = options.hasOwnProperty('addition') ? options.addition : '';
  const additionRepeatTimes = options.hasOwnProperty('additionRepeatTimes') ? options.additionRepeatTimes : 1;
  const additionSeparator = options.hasOwnProperty('additionSeparator') ? options.additionSeparator : '|';
  
  str = String(str);
  addition = String(addition);
  
  const additionStr = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  const resultStr = new Array(repeatTimes).fill(str + additionStr).join(separator);
  
  return resultStr;
}

module.exports = {
  repeater
};
