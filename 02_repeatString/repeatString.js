const repeatString = function(string, num) {
    result = ''
    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            result = result + string;
        }
        return result;
    } else {
        return 'ERROR'
    }
    
};

// Do not edit below this line
module.exports = repeatString;
