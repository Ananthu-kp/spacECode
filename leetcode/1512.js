// 1512 - Number of Good Pairs

var numIdenticalPairs = function(nums) {
    let count=0;
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<i;j++){
            if(nums[i]===nums[j]){
                count++;
            }
        }
    }
    return count
};

console.log(numIdenticalPairs(nums=[1,2,3,1,1,3]));