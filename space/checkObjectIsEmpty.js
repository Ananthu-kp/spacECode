// => check any object is Empty then throw an error

let obj1 = {}
let obj2 = { d: 4, e: 5, f: 6 }

function checkIsEmpty(obj1, obj2) {
    if (Object.keys(obj1).length === 0) {
        throw new Error('Obj1 is Empty')
    } else if (Object.keys(obj2).length === 0) {
        throw new Error('Obj2 is Empty')
    }
}

try {
    console.log(checkIsEmpty(obj1, obj2));
} catch(error) {
    console.error(error.message);
}