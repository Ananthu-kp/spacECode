// 217 - Contains Duplicate

var containsDuplicate = function(nums) {
    let set=[...new Set(nums)];
    for(let i=0;i<set.length;i++){
        if(nums.length===set.length){
            return false
        }else{
            return true
        }
    }
}

console.log(containsDuplicate(nums = [1,2,3,4]));