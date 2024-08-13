function solve(inputArray, step) {
    const result = [];

    for (let index = 0; index < inputArray.length; index += step) {
        result.push(inputArray[index])
    }
    return result; 
}
console.log(solve(['5', '41', '14', '97','75'], 2)) //---------------samata funkciq ne printira za tova pishem taka