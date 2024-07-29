// => find the missing number in an array

const nums = [3, 2, 1, 5, 0]

function findMissing(nums) {
    let n = nums.length
    const expectedSum = n * (n + 1) / 2;
    const actualSum = nums.reduce((sum, num) => sum + num, 0)
    return expectedSum - actualSum
} 

console.log(findMissing(nums));