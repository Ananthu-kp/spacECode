// leetcode 268 - missing number

var missingNumber = function(nums) {
    let set = new Set(nums);
    for(let i=0; i<set.size; i++){
        if(!set.has(i)){
            return i
        }
    }
    return set.size
}

console.log(missingNumber(nums = [9,6,4,2,3,5,7,0,1]));