const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const res = Array(rows).fill().map(() => Array(cols).fill(0));
  
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c]) {
        // This cell is a mine
        for (let i = r-1; i <= r+1; i++) {
          for (let j = c-1; j <= c+1; j++) {
            if (i >= 0 && i < rows && j >= 0 && j < cols && !(i == r && j == c)) {
              // Increment count of all neighboring cells
              res[i][j]++;
            }
          }
        }
      }
    }
  }
  
  return res;
}

module.exports = {
  minesweeper
};
