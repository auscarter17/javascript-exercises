const sumAll = function(num1, num2) {
    let finalSum = 0
    if (num1 < 0 || num2 < 0) {
        return "ERROR"
    } else if (!Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR"
    } else if (num1 > num2) {
        const temp = num1;
        num1 = num2;
        num2 = temp;   
    }
    for (let step = num1; step <= num2; step++) {
        finalSum = (finalSum + step);
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
