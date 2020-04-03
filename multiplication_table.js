const isValid = (firstNumber, secondNumber) => {
    if (firstNumber < 1 || secondNumber > 1000) {
        return false
    } 
    return secondNumber >= firstNumber
};

const generateSequencesBetween = (firstNumber, secondNumber) => {
    sequences = []
    for (let item = firstNumber; item <= secondNumber; item++) {
        sequences.push(item)
    } 
    return sequences
}

const generateMultiplyConditions = (firstNumber, secondNumber)=> {
    return firstNumber + "*" + secondNumber + "=" + firstNumber * secondNumber
}

const generateMultiplicationRow = (firstNumber, secondNumber) => {
    return generateSequencesBetween(firstNumber, secondNumber)
        .map(rowNumber => generateMultiplyConditions(rowNumber, secondNumber))
        .join(" ")
}

module.exports = {
    isValid,
    generateSequencesBetween,
    generateMultiplyConditions,
    generateMultiplicationRow
}