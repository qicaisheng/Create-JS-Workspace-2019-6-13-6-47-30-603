function isValid(firstNumber, secondNumber) {
    if (firstNumber < 1 || secondNumber > 1000) {
        return false
    } 
    return secondNumber >= firstNumber
}

module.exports = isValid