//leetcode 1748  sum of unique elements

let nums = [1,2,3,2];

var sumOfUnique=function(nums){
    let sum=0;
    for(let i=0;i<nums.length;i++){
        let flag=0;
        for(let j=0;j<nums.length;j++){
            if(nums[i]===nums[j] && i!=j){
                flag=1;
            }
        }
        if(!flag){
            sum=sum+nums[i];
        }
    }
    return sum
}

console.log(sumOfUnique(nums));