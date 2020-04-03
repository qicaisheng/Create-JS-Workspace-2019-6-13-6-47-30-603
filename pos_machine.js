const generateOrders = (barcodes) => {
    let orders = []
    barcodes.forEach(barcode => {
        let existedOrder = orders.find(order => order.id === barcode)
        if (existedOrder) {
            existedOrder.number ++
        } else {
            orders.push({"id": barcode, "number": 1})
        }
    })
    return orders
}

module.exports = generateOrders
