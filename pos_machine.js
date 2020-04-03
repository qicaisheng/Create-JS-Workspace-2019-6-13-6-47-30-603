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

const generateReceipts = (orders) => {
    let price = orders.map(order => order.number * order.product.price).reduce((sum, itemPrice) => sum + itemPrice);
    return {orders: orders, price: price}
}

const renderReceipts = (receipts) => {
    return "Receipts\n" +
        "------------------------------------------------------------\n" +
        renderOrders(receipts.orders) + "\n" +
        "------------------------------------------------------------\n" +
        "Price: " + receipts.price
}

const renderOrderItem = orderItem => {
    const priceIndex = 32;
    const numberIndex = 10;
    return orderItem.product.name + " ".repeat(priceIndex - orderItem.product.name.length) + orderItem.product.price + " ".repeat(numberIndex) + orderItem.number
};

const renderOrders= (orders) => {
    return orders.map(orderItem => renderOrderItem(orderItem)).join("\n")
}


module.exports = {
    generateOrders,
    getProductBy,
    generateReceipts,
    renderReceipts
}
