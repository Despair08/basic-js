calculateDepth(arr) {
  let counter = 1;
  let max = 1;

  for (let elem of arr) {
    if (Array.isArray(elem)) {
      max = Math.max(this.calculateDepth(elem), max);
    }
  }
  return counter + max;
}