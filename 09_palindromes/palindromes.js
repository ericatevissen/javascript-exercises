const palindromes = function (string) {
    const cleanString = string.toLowerCase().replace(/[^a-z]/g, "");
    const reversedString = cleanString.split("").reverse().join("");
    return cleanString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
