// => reverse an nested array

const arr = [1, [2, 3], 4, [5], 6];

function reverse(arr) {
    return arr.map(item => 
        Array.isArray(item) ? reverse(item) : item
    ).reverse()
}

console.log(reverse(arr));

// out -> [6, [5], 4, [3, 2], 1]