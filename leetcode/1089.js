//leetcode 1089   Duplicate zeros

const arr = [1, 0, 2, 3, 0, 4, 5, 0];
var duplicateZeros = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0);
            arr.pop()
            i++;
        }
    }
    return arr
};
console.log(duplicateZeros(arr));