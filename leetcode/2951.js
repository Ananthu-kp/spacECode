//  Find the Peaks

var findPeaks = function(mountain) {
    let res = []
    for (let i = 0; i < mountain.length; i++) {
        if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1]) {
            res.push(i)
        }
    }
    return res
};

console.log(findPeaks(mountain = [1,4,3,8,5]));
