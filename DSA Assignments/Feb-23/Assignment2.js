/**
2. For the given array = ['a','b','d','e','f','g','h','i','x','z'] use binary search to find the target element = 'z'.
*/


let binarySearch=(arr,target)=>{

    let low=0;
    let high=arr.length-1

    while(low<=high){
        let mid=Math.floor(low+(high-low)/2)
        if(target.charCodeAt(0)===arr[mid].charCodeAt(0)){
            return mid
        }else if(target.charCodeAt(0)>arr[mid].charCodeAt(0)){
            low=mid+1
        }else{
            high=mid-1
        }
    }
    return -1
}

console.log(binarySearch(['a','b','d','e','f','g','h','i','x','z'],"g"))
