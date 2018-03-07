function generateBoard(input){
    let result = []
    let count = input * input

    for(let i=0; i<input; i++){
        result.push([])
        
        if(i % 2 == 0){
            for(let j=0; j<input; j++){
                result[i].push(count)
                count --
            }
        }
        else{
            count -= (input - 1)
            for(let k=0; k<input; k++){
                result[i].push(count)
                count++
            }
            count -= (input + 1)
        }
    }
    return result
}

console.log(generateBoard(10))