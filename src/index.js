// You should implement your task here.
module.exports = function towelSort (matrix) {
  // let mas1 = matrix.map((value) => value[2].reverse())
  // console.log(mas1);
  // return mas1;
  // console.log(matrix);
 if(!matrix){
  return [];
 }
  let mas1 = matrix.reduce((value, index, arr) => {
    return value.concat((!(arr % 2) ? index : index.reverse()));
  }, []) ;
  return mas1;
}
