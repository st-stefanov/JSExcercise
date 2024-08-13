function solve(inputArray, inputRotations){
    'use strict';

    for (let index = 0; index < inputRotations; index++) {
        const firstElement = inputArray.shift()
        inputArray.push(firstElement)
    }
    console.log(inputArray.join(" "))
}
solve([54, 32, 98, 14], 2)