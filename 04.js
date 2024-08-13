function solve(inputArray) {
    inputArray.sort((a, b) => a - b)

    const result = [];

    while(inputArray.length > 0){
        const firstElement = inputArray.shift()
        const lastElement = inputArray.pop()

        result.push(firstElement)
        if(lastElement != undefined){
            result.push(lastElement)
        }
    }
    return result
}
console.log(solve([1, 2, 3, 4, 5, 6, 7, 8, 9]));