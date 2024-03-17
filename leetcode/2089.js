// 2089 Find Target Indices After Sorting Array

var targetIndices = function(nums, target) {
    let array=[];
    let sortNum = nums.sort((a,b)=>a-b);
    for(let i=0;i<sortNum.length;i++){
        if(sortNum[i]===target){
            array.push(i)
        }
    }
    return array
};

console.log(targetIndices(nums = [1,2,5,2,3], target = 2));