const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  if (matrix.length === 0) {
    return 0;
  }
  let res = 0;
  for (let item of matrix) {
    for (let elem of item) {
      if (elem === '^^') {
        res++;
      }
    }
  }
  return res;
}

module.exports = {
  countCats,
};
