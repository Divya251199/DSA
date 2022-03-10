/**
create and print 2d matrix
*/


let createMatrix=(row,col)=>{
    let arr= new Array(row);
    for(let i=0;i<arr.length;i++){
        arr[i]=(new Array(col))
    }
    console.log(arr)
}
createMatrix(5,3)


let printMatrix=(matrix)=>{
    matrix.forEach((row)=>{
        row.forEach((item)=>{
            console.log(item)
        })
    })
}
printMatrix([
    [1, 2],
    [3, 4],
    [5, 6]
  ])