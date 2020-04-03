const {generateOrders, getProductBy} = require("../pos_machine")

it('should generate orders', function () {
    expect(generateOrders(['0001', '0003', '0005', '0003'])).toEqual([{"id": "0001", number: 1}, {"id": "0003", number: 2}, {"id": "0005", number: 1}])
});

it('should get product by id', function () {
    expect(getProductBy("0001")).toEqual({"id": "0001", "name" : "Coca Cola", "price": 3})
})