/**
"1. Sort the string composed of only [a-z] chars in descending order in Linear Time. 
2. Sort the string composed of only [a-z,A-Z] chars in ascending order in linear Time.        
3. Write a recursive code to find the x^y . example: 2^5 = 32.        
4. Find GCD of two number using recursion. GCD(4,8) => 4.        
5. For the questions given in images , solve it using callStack or recursion tree method , and post the solution steps along with your results."
*/

const swap=(arr,index1,index2)=>{
    [arr[index1],arr[index2]]=[arr[index2],arr[index1]];
    }
    const bubbleSort=(arr)=>{
    const n=arr.length
    let isSwap;
        for( let i=n;i>0;i--){
            isSwap=true
            for(let j=0;j<i-1;j++){
                if(arr[j]<arr[j+1]){
                    swap(arr,j,j+1)
                    isSwap=false
                }
            }
            if(isSwap){
                break;
            }
        }
        return arr
    
    }

let sortinDecending=(str)=>{
    let arr=[]
    for(let i=0 ;i<str.length;i++){
       arr.push(str.charCodeAt(i))
    }
    let res=String.fromCharCode(...bubbleSort(arr))
    console.log(res)
}
sortinDecending("abhishek")