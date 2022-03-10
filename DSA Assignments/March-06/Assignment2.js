/**
Write a recursive code for printing the Fibonacci series up to N. 
        example : if the user enters 10 , then print 1,1,2,3,5,8,13,21,34,55
*/
let n=5;
let fibSeriesUsingRecursion=(n)=>{
    if(n<=1){
        return n;
    }else{
        return fibSeriesUsingRecursion(n-1) + fibSeriesUsingRecursion(n-2)
    }
}

for(let i=1;i<=n;i++){
    console.log(fibSeriesUsingRecursion(i))
}