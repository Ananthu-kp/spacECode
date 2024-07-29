// => rotate an array in kth position

const  nums = [1, 2, 3, 4, 5, 6, 7];
const k = 5;

function rotate(nums, k) {
    let n = nums.length
    k = k % n

    let rotatedPart = nums.slice(n - k)
    for (let i = n - 1; i >= k; i--) {
        nums[i] = nums[i - k]
    }
    for (let i = 0; i < k; i++) {
        nums[i] = rotatedPart[i]
    }
}

rotate(nums, k)
console.log(nums);