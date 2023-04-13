// transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
let arr = [1, 2, 3, "--discard-next", "--double-prev", 1337, 4, 5];

function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  if (arr.length === 0) {
    return arr;
  }

  let resultArray = [];
  let doubleNext = '--double-next';
  let doublePrev = '--double-prev';
  let discPrev = '--discard-prev';
  let discNext = '--discard-next';

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== doubleNext || arr[i] !== doublePrev || arr[i] !== discNext || arr[i] !== discPrev || arr[i] !== undefined) {
      resultArray.push(arr[i]);
    }
    if (arr[i] === '--double-next') {
      if (typeof (arr[i + 1]) === 'number') {
        resultArray.push(arr[i + 1]);
      } else {
        i++;
      }
    }
    if (arr[i] === '--double-prev') {
      if (typeof (arr[i - 1]) === 'number') {
        resultArray.push(arr[i - 1]);
      } else {
        i++;
      }
    }
    if (arr[i] === '--discard-prev') {
      if (typeof (arr[i - 1]) === 'number') {
        resultArray.splice(i - 1, 1);
      } else {
        i++
      }
    }
    if (arr[i] === '--discard-next' && typeof (arr[i + 1]) === 'number') {
      if (typeof (arr[i + 1]) === 'number') {
        i++;
      } else {
        resultArray.push(arr[i]);
      }
    }
  };

  return resultArray;
}

console.log(transform(arr));