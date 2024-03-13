// leetcode 2341   Maximum Number of Pairs in Array

var numberOfPairs = function(nums) {
    let count=0;
    let sortNum = nums.sort((a,b)=>a-b);
    for(let i=0;i<sortNum.length-1;i++){
        sortNum.shift()
        sortNum.shift()
        i--;
        count++
    }
    return [count,sortNum.length]
};
console.log(numberOfPairs(nums = [1,3,2,1,3,2,2]));
