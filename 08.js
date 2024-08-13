function solve(firstNumber, secondNumber, thirdNumber){
    'use strict';
    
    function sum(first, second){
        return first + second
    }
    
    function substract(first, second){
        return first - second
    }

    const result = substract(sum(firstNumber, secondNumber), thirdNumber)

    console.log(result)
}
solve(10, 20, 11)