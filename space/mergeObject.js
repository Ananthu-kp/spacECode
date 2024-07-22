// => function to merge 2 objects

let obj1 = { a: 1, b: 2, c: 3 }
let obj2 = { d: 4, e: 5, f: 6 }

function merge(obj1, obj2) {
    return { ...obj1, ...obj2 }
}

console.log(merge(obj1, obj2));