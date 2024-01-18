//leetcode 442  find all duplicates in an array
//medium

let nums = [4,3,2,7,8,2,3,1];

var findDuplicates = function(nums) {
    let result=[];
    nums.sort();
    for(let i=0;i<nums.length;i++){
        if(nums[i]===nums[i+1]){
            result.push(nums[i])
        }
    }
    return result.sort();
}

console.log(findDuplicates(nums));