/**
"1.Write a recursive code for finding the max and min element in the given array arr ={1,-1,0,2,-2,3,-3,4,-4}
        NOTE: pass arr in every function call.
2.Write a recursive code for printing the Fibonacci series up to N. 
        example : if the user enters 10 , then print 1,1,2,3,5,8,13,21,34,55
3.Write a head recursion code to print only EVEN elements in decreasing order starting from user-defined input N.
        example: N = 76 
                       Output: 76,74,72,70,68,66......2
        
4.Write a recursive code to find the factorial of a user defined N 
        example : N = 5 => 5! => 120 must be printed on screen.     
5.Write a recursive code to check if a string is a palindrome or not. [Hint: reverse the string and send both strings into the function and check.]"
*/

let max=(array)=> {
    if (array.length === 1) {  // Step1: set up your base case
        return array[0]
   } else {  
       return Math.max(array.shift(), max(array)) // Step2: rec case
   }
  }

  let min=(array)=> {
    if (array.length === 1) {  // Step1: set up your base case
        return array[0]
   } else {  
       return Math.min(array.shift(), min(array)) // Step2: rec case
   }
  }  

console.log(max([1,-1,0,2,-2,3,-3,4,-4]))
console.log(min([1,-1,0,2,-2,3,-3,4,-4]))