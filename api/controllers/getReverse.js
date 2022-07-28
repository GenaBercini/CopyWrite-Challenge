const { reverseFunction, isPalindrome } = require('../utils/utilsFunctions')

const getReverse = (req, res, next) => {
    const { text } = req.query;
    try {
        if(text.length > 0) {
            let reversedText = reverseFunction(text);
            let palindromeText = isPalindrome(text);
            res.status(200).json({
                text: reversedText,
                palindrome: palindromeText
            })
        }
        else {
            res.status(400).json({
                "error": "no text"
            })
        }
    } catch (error) {
        res.status(400).json({
            "error": "no text"
        })
    }
}

module.exports = getReverse