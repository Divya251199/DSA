/**
Program for Mean and median of an unsorted array
Input  : a[] = {1, 3, 4, 2, 6, 5, 8, 7}
Output : Mean = 4.5
         Median = 4.5
Sum of the elements is 1 + 3 + 4 + 2 + 6 + 
5 + 8 + 7 = 36
Mean = 36/8 = 4.5
Since number of elements are even, median
is average of 4th and 5th largest elements.
which means (4 + 5)/2 = 4.5
Input  : a[] = {4, 4, 4, 4, 4}
Output : Mean = 4
         Median = 4 
*/


let meanAndMedian=(arr)=>{
    arr.sort((num1,num2)=>{
        return num1-num2;
    })
    let median;
    if(arr.length%2!==0){
        median=arr[arr.length/2]
    }else{
        median=(arr[Math.floor((arr.length-1)/2)] + arr[arr.length / 2]) / 2
    }

    let sum=arr.reduce((acc,curr)=>{return acc+=curr},0)

    let mean=sum/(arr.length)

    return({median,mean})

}

console.log(meanAndMedian([1, 3, 4, 2, 6, 5, 8, 7]))