let str = true;
let options = { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' };
// 'truefalse!!!false??? truefalse!!!false??? truefalse!!!false'

function repeater(str, options) {

  str = str.toString();

  let arr = [];
  let addition = options.addition.toString();

  if (addition) {

    if (!options.additionRepeatTimes) {
      str += addition;
    } else {
      if (options.additionSeparator) {
        let addArr = [];

        for (let i = 0; i < options.additionRepeatTimes; i++) {
          addArr.push(addition)
        }
        addition = addArr.join(`${options.additionSeparator}`);
      }
      str += addition;

    }
  }

  if (!options.repeatTimes) {
    arr.push(str);
  } else {
    for (let i = 0; i < options.repeatTimes; i++) {
      arr.push(str);
    }
  }

  options.separator ? result = arr.join(`${options.separator}`) : result = arr.join('+')

  return result;
}

console.log(repeater(str, options));