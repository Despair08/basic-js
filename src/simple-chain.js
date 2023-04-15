const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArr: [],

  getLength() {
    return this.chainArr.length;
  },

  addLink(value) {
    this.chainArr.push(value);
    return this;
  },

  removeLink(position) {
    if(position <= 0 || position > this.getLength() || !Number.isInteger(position) || typeof(position) !== 'number'){
      this.chainArr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chainArr.splice(position - 1,1);
    return this;
  },

  reverseChain() {
  this.chainArr = [...this.chainArr].reverse();
  return this;
  },

  finishChain() {
    let chain = this.chainArr;
    this.chainArr = [];
    for(let i = 0; i < chain.length; i++){
      chain[i] = `( ${chain[i]} )`;
    }
    return chain.join('~~');
  }
};

module.exports = {
  chainMaker
};
