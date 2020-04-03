const {generateOrders, getProductBy} = require("../pos_machine")

it('should generate orders', function () {
    expect(generateOrders(['0001', '0003', '0005', '0003'])).toEqual(
        [
            {"id": "0001", number: 1, product: {"id": "0001", "name" : "Coca Cola", "price": 3}}, 
            {"id": "0003", number: 2, product: {"id": "0003", "name" : "Pepsi-Cola", "price": 5}}, 
            {"id": "0005", number: 1, product: {"id": "0005", "name" : "Dr Pepper", "price": 7}}
        ]
    )
});

it('should get product by id', function () {
    expect(getProductBy("0001")).toEqual({"id": "0001", "name" : "Coca Cola", "price": 3})
})