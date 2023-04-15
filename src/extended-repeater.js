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

  if(str === null){
    str = 'null';
  }

  let arr = [];

  
  if (options.addition !== undefined) {
    let addition = options.addition;
    if(addition === null){
      addition = 'null';
    }
    
    if (!options.additionRepeatTimes) {
      str += addition;
    } else {
      let addArr = [];

      for (let i = 0; i < options.additionRepeatTimes; i++) {
        addArr.push(addition)
      }
      if (options.additionSeparator) {
        addition = addArr.join(`${options.additionSeparator}`);
      }else{
        addition = addArr.join('|');
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

module.exports = {
  repeater
};
