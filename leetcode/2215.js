//leetcode 2215   find the difference of two array.
let nums1 = [1,2,3,3]
let nums2 = [1,1,2,4,2]

var findDifference = function(nums1, nums2) {
    let num1set=new Set(nums1);
    let num2set=new Set(nums2);

    let result=[[],[]]

    for(const num of num1set){
        if(!num2set.has(num)){
            result[0].push(num);
        }
    }

    for(const num of num2set){
        if(!num1set.has(num)){
            result[1].push(num)
        }
    }
    return result;
};

console.log(findDifference(nums1,nums2));