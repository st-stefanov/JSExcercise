function solve(currentStock, orderedStock) {
    const storeStock = {}

    for (let index = 0; index < currentStock.length; index += 2) {
        const stockName = currentStock[index]
        const stockAmount = parseInt(currentStock[index + 1])

        storeStock[stockName] = stockAmount
    }
    for (let index = 0; index < orderedStock.length; index += 2) {
        const stockName = orderedStock[index]
        const stockAmount = parseInt(orderedStock[index + 1])

        if (storeStock[stockName]){
            storeStock[stockName] += stockAmount
        }
        else{
            storeStock[stockName] = stockAmount
        }
    }
    Object.keys(storeStock).forEach((currentItemName)=> console.log(`${currentItemName} -> ${storeStock[currentItemName]}`))
}