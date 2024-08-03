// => function to find second largest and second smallest from an array

const array = [4, 5, 7, 3, 8, 10, 33, 1];

function secondLarSecondsmall(array) {
    let largest = -Infinity
    let secondLar = -Infinity
    let smallest = Infinity
    let secondSmall = Infinity

    for (let num of array) {
        if (num > largest) {
            secondLar = largest
            largest = num
        } else if (num > secondLar && num < largest) {
            secondLar = num
        }

        if (num < smallest) {
            secondSmall = smallest
            smallest = num
        } else if (num < secondSmall && num > smallest) {
            secondSmall = num
        }
    }
    return {secondLar, secondSmall}
}

console.log(secondLarSecondsmall(array));
