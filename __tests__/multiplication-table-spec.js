const {
    isValid, 
    generateSequencesBetween, 
    generateMultiplyConditions,
    generateMultiplicationRow,
    generateMultiplicationTable
} = require('../multiplication_table')

it('should check the input', () => {
    expect(isValid(2, 4)).toBe(true)
    expect(isValid(4, 4)).toBe(true)
    expect(isValid(4, 2)).toBe(false)

    expect(isValid(2, 1001)).toBe(false)
    expect(isValid(0, 4)).toBe(false)

});

it('should generate sequences between two numbers', () => {
    expect(generateSequencesBetween(2, 4)).toEqual([2, 3 ,4])
});

it('shuld generate multiply math conditions', () => {
    expect(generateMultiplyConditions(2, 2)).toBe("2*2=4")
});

it('should generate multiplication row', () => {
    expect(generateMultiplicationRow(2, 2)).toBe("2*2=4")
    expect(generateMultiplicationRow(2, 3)).toBe("2*3=6 3*3=9")
    expect(generateMultiplicationRow(2, 4)).toBe("2*4=8 3*4=12 4*4=16")
});

it('should generate multiplication table', () => {
    expect(generateMultiplicationTable(2, 2)).toBe("2*2=4")
    expect(generateMultiplicationTable(2, 3)).toBe("2*2=4\n2*3=6 3*3=9")
    expect(generateMultiplicationTable(2, 4)).toBe("2*2=4\n2*3=6 3*3=9\n2*4=8 3*4=12 4*4=16")
})