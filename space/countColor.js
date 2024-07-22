// => find the count of green color

const colors = ['blue', 'yellow', 'green', 'red', 'black',
    'blue', 'yellow', 'green', 'red', 'black', 'blue', 'yellow',
    'green', 'red', 'black', 'blue', 'yellow', 'green', 'red',
    'black', 'blue', 'yellow', 'green', 'red', 'black', 'blue',
    'yellow', 'green', 'red', 'black'];

let colorCount = colors.reduce((count, color) => {
    return color === 'green' ? count + 1 : count;
}, 0)

console.log(colorCount);