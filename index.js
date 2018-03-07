function generateBoard(dimensi){
    let bigBoard = []
    let no = dimensi * dimensi;
    for(let r=0; r<dimensi; r++){
        let rowBoard = []
        if(dimensi % 2 == 0){
            if(r % 2 != 0){
                no -= (dimensi-1);
                for(let c=0; c<dimensi; c++){
                    rowBoard.push(no);
                    no++;
                }
                no -= (dimensi+1);
            } else {
                for(let c=0; c<dimensi; c++){
                    rowBoard.push(no);
                    no--;
                }
            }
        } else {
            if(r % 2 != 0){
                for(let c=0; c<dimensi; c++){
                    rowBoard.push(no);
                    no--;
                }
            } else {
                no -= (dimensi-1);
                for(let c=0; c<dimensi; c++){
                    rowBoard.push(no);
                    no++;
                }
                no -= (dimensi+1);
            }
        }

        bigBoard.push(rowBoard);
    }
    return bigBoard;
}

console.log(generateBoard(8))