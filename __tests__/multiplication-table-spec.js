const isValid = require('../multiplication_table')

it('should check the input', function () {
    expect(isValid(2, 4)).toBe(true)
    expect(isValid(4, 4)).toBe(true)
    expect(isValid(4, 2)).toBe(false)

    expect(isValid(2, 1001)).toBe(false)
    expect(isValid(0, 4)).toBe(false)

}); 