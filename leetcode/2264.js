//leetcode 2264 - Largest 3-Same-Digit Number in String

var largestGoodInteger = function(num) {
    let number = '';
    for(let i=0; i<num.length; i++){
        if(num[i]===num[i+1] && num[i]===num[i+2]){
            const string = num[i].repeat(3);
            if(string > number){
                number = string
            }
        }
    }
    return number
};

console.log(largestGoodInteger(num = "6777133339"));
