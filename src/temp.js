let arr = [1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575', ['adas', ['dfg', [0]]]]];

// 2

function calculateDepth(arr) {
  
  let counter = 1;
  let max = 1;

  for(let elem of arr){
    if(Array.isArray(elem)){
      max = Math.max(calculateDepth(elem),max);
    }
  }
  return counter + max;
}

console.log(calculateDepth(arr))