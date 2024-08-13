function solve(commands){
    const movies = []
    for(const command of commands){

    
        if(command.includes('addMovive')){
            const movieName = command.replace('addMovie', '')

            movies.push({
                name: movieName,
                director: '',
                date: '',
            })
        }
        else if(command.includes('directedBy')){
            const movieName = command.substring(0, command.indexOf('directedBy')).trim()
            const directedBy = command.substring(command.indexOf('directedBy') + 'directedBy'.length).trim()

            const result = movies.find(movie => movie.name === movieName)
            
            if(!result ){
                movies.push({
                    name: movieName,
                    director: directedBy,
                    date: '',
                })
            }
            else{
                result.director = directedBy
            }
        }
        else if(command.includes('onDate')){
            const movieName = command.substring(0, command.indexOf('onDate')).trim()
            const onDate = command.substring(command.indexOf('onDate') + 'onDate'.length).trim()

            const result = movies.find(movie => movie.name === movieName)
           
            if(!result){
                // // movies.push({
                // //     name: movieName,
                // //     director: '',
                // //     date: onDate,
                // })
            }
            else{
                result.date = onDate
            }

        }
    }

    movies
        .filter(movie => movie.date && movie.director && movieName)
        .forEach(movie => console.log(JSON.stringify(movie)))         
        
}   