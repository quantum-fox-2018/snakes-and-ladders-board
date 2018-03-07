function generateBoard(dimensi){
    let bigBoard = []
    let no = dimensi * dimensi;
    for(let r=0; r<dimensi; r++){
        let rowBoard = []
        if(r % 2 != 0){
            // no -= 9;
            no -= (dimensi-1);
            for(let c=0; c<dimensi; c++){
                rowBoard.push(no);
                no++;
            }
            // no -= 11;
            no -= (dimensi+1);
        } else {
            for(let c=0; c<dimensi; c++){
                rowBoard.push(no);
                no--;
            }
        }
        bigBoard.push(rowBoard);
    }
    return bigBoard;
}

console.log(generateBoard(10))