const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
 function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const commands = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev'
  ];

  const counts = arr.map((element) => {
    return commands.includes(element) ? 0 : 1;
  });

  for (let i = 0; i < arr.length; i++) {
    const command = arr[i];

    if (command === '--discard-next') {
      if (i + 1 < arr.length && counts[i + 1] > 0) {
        counts[i + 1]--;
      }
    }

    if (command === '--discard-prev') {
      if (i > 0 && counts[i - 1] > 0) {
        counts[i - 1]--;
      }
    }

    if (command === '--double-next') {
      if (i + 1 < arr.length && counts[i + 1] > 0) {
        counts[i + 1]++;
      }
    }

    if (command === '--double-prev') {
      if (i > 0 && counts[i - 1] > 0) {
        counts[i - 1]++;
      }
    }
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < counts[i]; j++) {
      result.push(arr[i]);
    }
  }

  return result;
}





module.exports = {
  transform
};
