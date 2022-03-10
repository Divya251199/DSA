/**
 * 
 * @param {*} x 
 * @param {*} y 
 * @returns 
    Write a recursive code to find the x^y . example: 2^5 = 32.   
 */

    let power=(x,y)=>{
        if(y===0){
            return 1
        }
        return x*power(x,y-1)
    
    }
    
    console.log(power(2,5))