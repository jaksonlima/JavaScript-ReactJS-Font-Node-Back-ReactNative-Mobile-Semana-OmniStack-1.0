module.exports = function parseStringAsArray(ArrayString) {
    return ArrayString.split(',').map(stringToArray => stringToArray.trim());
} 

