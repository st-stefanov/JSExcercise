function solve(arrayRawData) {
    const townData = []

    for (const rawData of arrayRawData) {
        const splitData = rawData.split(" | ")
        townData.push({
            town: splitData[0],
            latitude: parseFloat(splitData[1]).toFixed(2),
            longitude: parseFloat(splitData[2]).toFixed(2)
        })
    }
    townData.forEach((town) => console.log(town))
}
console.log(solve([]))