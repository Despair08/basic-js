let matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
];

function getMatrixElementsSum(matrix) {
  let result = 0;

  for(let i = 0; i < matrix.length; i++){
    for(let k = 0; k < matrix[i].length; k++){
      console.log({i})
      if(i > 0){
        if(matrix[i-1][k] !== 0){
          result += matrix[i][k];
        }
      }else{
        result += matrix[i][k];
      }
    }
  }

  return result;
}

console.log(getMatrixElementsSum(matrix));