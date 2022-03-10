/**
4. Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
Input: nums = [1,3,5,6], target = 2 Output: 1 
Input: nums = [1,3,5,6], target = 7 Output: 4
*/

/**
[1,3,5,6]
 0 1 2 3
 l m   h
 [1,3,5,6]
  0 1 2 3
  l+1
  h
  m
  [1,3,5,6]
   0 1 2 3
   l m   h
       l h
       m
         l
         h
         m      
*/  

let foundInsert=(arr,target)=>{

    let low=0;
    let high=arr.length-1;
    while(low<=high){
        let mid =Math.floor(low+(high-low)/2)
        if(arr[mid]===target){
            return mid
        }else if(target>arr[mid]){
            low=mid+1
        }else{
            high=mid-1
        }
    }
    return low
}

console.log(foundInsert([1,3,5,6],2));