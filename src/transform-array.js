const { NotImplementedError } = require('../extensions/index.js');

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

  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

  if (arr.length === 0) return arr;

  let resultArray = [];

  for (let i = 0; i < arr.length; i++) {

    let elem = arr[i];
    // Пропустить если команда на первой позиции
    if (i === 0) {
      if (arr[i] === '--discard-prev' || arr[i] === '--double-prev') {

        console.log(`Пропуск первой позиции`, { i }, { elem })
        i++;
      }
    }

    // дублировать, если команда не на последней позиции
    if (arr[i] === '--double-next' && arr[i] !== arr[arr.length - 1]) {
      console.log(`Дублирую следующий`, { i }, { elem })
      resultArray.push(arr[i + 1]);
    }

    // дублировать предыдущий
    if (arr[i] === '--double-prev') {
      console.log(`Дублирую предыдущий`, { i }, { elem })
      resultArray.push(arr[i - 1]);
      i++;
    }

    // убрать предыдущий
    if (arr[i] === '--discard-prev') {
      console.log(`Удаляю предыдущий`, { i }, { elem })
      resultArray.pop();
    }

    // убрать следующий, если не на последней позиции
    if (arr[i] === '--discard-next' && arr[i] !== arr[arr.length - 1]) {
      console.log(`Удаляю следующий`, { i }, { elem })
      i += 2;
    }

    resultArray.push(arr[i]);


    // убрать команду с последней позиции
    if (resultArray[resultArray.length - 1] === '--discard-next' || resultArray[resultArray.length - 1] === '--double-next' || resultArray[resultArray.length - 1] === '--discard-prev' || resultArray[resultArray.length - 1] === '--double-prev') {
      console.log(`Удаляю последний`, { i }, { elem })
      resultArray.pop();
    }
  }


  return resultArray;
}

module.exports = {
  transform
};