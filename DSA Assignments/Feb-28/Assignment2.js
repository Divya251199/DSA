/**
 * Intersection of two Array
 * @param {*} nums1 
 * @param {*} nums2 
 * @returns 
 */

 var intersection = function(nums1, nums2) {
    let result=[];
    let obj1={}
    let obj2={}

    nums1.forEach((num)=>{
        obj1[num]= obj1[num]+1||1
    })
    nums2.forEach((num)=>{
        obj2[num]= obj2[num]+1||1
    })

    for(let key in obj1){
        if(obj2.hasOwnProperty(key)){
            result.push(+key);
        }
    }
    return result
};

console.log(intersection([1,2,2,1],[2,2]))