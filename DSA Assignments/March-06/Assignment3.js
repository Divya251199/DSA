/**
Write a head recursion code to print only EVEN elements in decreasing order starting from user-defined input N.
*/


// for(let i=76;i>0;i-=2){
//     if(i%2===0) console.log(i)
// }

let recurEven=(n)=>{
    if(n<0){
        return
    }else{
        if(n%2===0){
            console.log(n)
            recurEven(n-2)
        }else{
            recurEven(n-1)
        }
    }
}

recurEven(76)