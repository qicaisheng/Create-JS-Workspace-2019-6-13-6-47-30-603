const generateOrders = require("../pos_machine")

it('should generate orders', function () {
    expect(generateOrders(['0001', '0003', '0005', '0003'])).toEqual([{"id": "0001", number: 1}, {"id": "0003", number: 2}, {"id": "0005", number: 1}])
}); 