// => function to remove duplicates 

const nums = [1, 1, 2, 3, 3, 4];

function removeDuplicate(nums) {
    if (nums.length === 0) return 0

    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != nums[index]) {
            index++
            nums[index] = nums[i]
        }
    }
    return index + 1
}

console.log(removeDuplicate(nums));