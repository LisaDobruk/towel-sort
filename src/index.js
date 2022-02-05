
// You should implement your task here.

module.exports = function towelSort (matrix) {
    console.log(matrix);
    if(matrix == undefined){
        return [];
    }
    if(matrix.length == 0){
        return [];
    }
    let arr = matrix[0];
    console.log('arr1 =' + arr);
    for(let i = 1; i < matrix.length; i++){
        if(i % 2 == 0){
           arr.push(matrix[i]);
           console.log(arr[i]);
        }else{
            let arrEl = matrix[i].reverse();
            arr.push(arrEl);
            console.log[arr[i]];
        }
    }
    console.log('arr2=' + arr);
  return arr.flat();
}
