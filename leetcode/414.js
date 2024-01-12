//leetcode 414   find the third largest number

const nums = [3,1,4,5,7,1,5,2];

function thirdlargest(nums){

    nums=[...new Set(nums)];
    nums.sort((a,b)=>b-a)
    
    if(nums.length >=3){
        return nums[2];
    }else{
        return nums[0];
    }
}

console.log(thirdlargest(nums));