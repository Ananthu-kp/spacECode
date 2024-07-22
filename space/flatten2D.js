// => flatten 2D array without using flat()

const arr = [1, 2, 3, [4, 5], 6, 7];

function flatten(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            for (let j = 0; j < arr[i].length; j++) {
                result.push(arr[i][j])
            }
        } else {
            result.push(arr[i])
        }
    }
    return result
}

console.log(flatten(arr));