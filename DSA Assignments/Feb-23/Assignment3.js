/**
3. Given a sorted array of non-negative distinct integers, find the smallest missing non-negative element in it.
 Input: nums[] = [0, 1, 2, 6, 9, 11, 15]  Output: The smallest missing element is 3
 Input: nums[] = [1, 2, 3, 4, 6, 9, 11, 15] Output: The smallest missing element is 0 .
Input: nums[] = [0, 1, 2, 3, 4, 5, 6] Output: The smallest missing element is 7
*/


/**
Approach
loop the array and if index does not matches the array[index] return index 
Approach 
using Binary Search 
[0, 1, 2, 3, 4, 5, 6]
 0  1  2  3  4  5  6
[2,3,4,5,6]
 0 1 2 3 4 
l,m/h
mid=3==index
[1, 2, 3, 4, 6, 9, 11, 15]
 0  1  2  3  4  5  6   7   
*/

let smallestMissing=(arr)=>{
    let low=0;
    let high=arr.length-1;

    while(low<=high){
    let mid=Math.floor(low + (high-low)/2)
        
        if(arr[mid]===mid){

            low=mid+1

        }else{
            high=mid-1
        }

    }
    return low
}

console.log(smallestMissing([0, 1, 2, 3, 4, 5, 6]))