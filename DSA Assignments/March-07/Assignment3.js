/**
Write a recursive binary search.
*/


let binarySearch=(arr, low, high, target)=>{
    if (high >= low) {
        let mid = low + Math.floor((high - low) / 2);
 
       
        if (arr[mid] == target)
            return mid;
 
        
        if (arr[mid] > target)
            return binarySearch(arr, low, mid - 1, target);
 
        
        return binarySearch(arr, mid + 1, high, target);
    }
 
    return -1;
}