const reverseFunction = (string) => {
    return string.split('').reverse().join('');
}

const isPalindrome = (string) => {
    return reverseFunction(string.toLowerCase()) === string.toLowerCase();
}

module.exports = {
    reverseFunction,
    isPalindrome
}