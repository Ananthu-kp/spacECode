// => Find the longest string without using any build in methods.

const str = "return the longest word based on its length rather than its alphabetical order.";

function longestWord(str) {
    let longest = '';
    let current = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        if (char === ' ') {
            if (current.length > longest.length) {
                longest = current
            }
            current = ''
        } else {
            current += char
        }
    }
    if (current.length > longest.length) {
        longest = current
    }
    return longest
}

console.log(longestWord(str));