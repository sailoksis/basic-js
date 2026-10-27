const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const result = [];

  for (let i = 0; i < members.length; i++) {
    const element = members[i];

    if (typeof element === 'string') {
      const cleanName = element.trim();

      if (cleanName.length > 0) {
        const letter = cleanName[0].toUpperCase();
        result.push(letter);
      }
    }
  }

  result.sort();
  return result.join('');
}

module.exports = {
  createDreamTeam
};
