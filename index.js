function generateBoard(dimensi, cordinat){
    let bigBoard = []
    let no = dimensi * dimensi;
    for(let r=0; r<dimensi; r++){
        let rowBoard = []
        if(dimensi % 2 == 0){
            if(r % 2 != 0){
                no -= (dimensi-1);
                for(let c=0; c<dimensi; c++){
                    if(no == cordinat){
                        rowBoard.push('(X)');
                        no++;
                    } else {
                        rowBoard.push(no);
                        no++;
                    }
                }
                no -= (dimensi+1);
            } else {
                for(let c=0; c<dimensi; c++){
                    if(no == cordinat){
                        rowBoard.push('(X)');
                        no--;
                    } else {
                        rowBoard.push(no);
                        no--;
                    }
                }
            }
        } else {
            if(r % 2 != 0){
                for(let c=0; c<dimensi; c++){
                    if(no == cordinat){
                        rowBoard.push('(X)');
                        no--;
                    } else {
                        rowBoard.push(no);
                        no--;
                    }
                }
            } else {
                no -= (dimensi-1);
                for(let c=0; c<dimensi; c++){
                    if(no == cordinat){
                        rowBoard.push('(X)');
                        no++;
                    } else {
                        rowBoard.push(no);
                        no++;
                    }
                }
                no -= (dimensi+1);
            }
        }

        bigBoard.push(rowBoard);
    }
    return bigBoard;
}

function sleep(milliseconds){
    var start = new Date().getTime();
    for(var i=0; i<1e7; i++){
        if((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}

let dimensionBoard = 10


let countStep = 0;
let longBoard = dimensionBoard * dimensionBoard;
for(let i=0; i<longBoard; i++){
    if(countStep >= longBoard){
        console.log(generateBoard(dimensionBoard, longBoard))
        break;
    }
    console.log(generateBoard(dimensionBoard, countStep))
    sleep(2000)
    countStep += Math.floor(Math.random()*6 + 1);
    console.log('\n')
}

