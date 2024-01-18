//leetcode 448  find all numbers disappeared in an array

let nums = [4,3,2,7,8,2,3,1];

var findDisappearedNumbers = function(nums){
    let result=[];
    let numset=new Set(nums);

    for(let i=1;i<=nums.length;i++){
        if(!numset.has(i)){
            result.push(i)
        }
    }
    return result
}
console.log(findDisappearedNumbers(nums));