const palindromes = function (string) {

    const cleanedString = string
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .split("")
    .join("");


    const reversedString = cleanedString
    .split("")
    .reverse()
    .join("");

    return reversedString === cleanedString;

};

// Do not edit below this line
module.exports = palindromes;
