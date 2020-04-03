const fs = require('fs')

const generateOrders = (barcodes) => {
    let orders = []
    barcodes.forEach(barcode => {
        let existedOrder = orders.find(order => order.id === barcode)
        
        if (existedOrder) {
            existedOrder.number ++
        } else {
            orders.push(getOrderItem(barcode))
        }
    })
    return orders
}

getOrderItem = (id) => {
    return {"id": id, "number": 1, product: getProductBy(id)};
}


const getProductBy = (id) => {
    let productsData = fs.readFileSync('products.json') 
    let products = JSON.parse(productsData)
    
    return products.find(product => product.id === id)
}

module.exports = {
    generateOrders,
    getProductBy
}
