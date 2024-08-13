function solve(wordToSearch, textForSearching) {
    'use strict';

    const hasWord = textForSearching.toLowerCase().split(' ').includes(wordToSearch)

    if(hasWord){
        console.log(`${wordToSearch}`)
    }
    else{
        console.log(`${wordToSearch} not found!`)
    }
}
solve('javascript', 'javascript e nai manqshkiq ezik za programirane')
solve('python', 'javascript e nai manqshkiq ezik za programirane')