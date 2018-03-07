function generateBoard(length) {
    let board = []
    let numBoard = length*length
    for(let i=0; i<length; i++) {
        board.push([])
        if(length % 2 == 0 && i % 2 == 0) {
            for(let j=numBoard; j>(numBoard-length); j--) {
                board[i].push(j)
            }
        } else {
            for(let j=numBoard-length+1; j<=numBoard; j++) {
                board[i].push(j)
            }
        }
        numBoard -= length
    }
    return board
}

function playsSnakesAndLadders(length) {

    let numBoard = length*length    
    let curentStage = 0
    let diceRoll = 0
    
    while(curentStage < numBoard) {
        let dice = [0,1,2,3,4,5,6]
        let diceValue = dice[Math.floor((Math.random()*6)+1)]

        curentStage += diceValue
        diceRoll += 1

        console.log(`player mendapat ${diceValue}`)
        console.log(`player sekarang ada di ${curentStage}`)
    }
    console.log(`Selamat, kamu menang dengan melakukan pengocokan dadu sebanyak: ${diceRoll}`)
}


console.log(generateBoard(5))
playsSnakesAndLadders(5)