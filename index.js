function manageBoard(num){
    let boardResult = [];
    let innerBoard = [];
    let boxNum = num*num;

    for(let counter = 0; counter<num; counter++){
        innerBoard = [];
        for(let counter2 = 0; counter2<num; counter2++){
            innerBoard.push(boxNum);
            boxNum--;
        }
        if(counter%2 !== 0 && num%2 === 0) {
            innerBoard.reverse();
        }else if(counter%2 === 0 && num%2 !== 0){
            innerBoard.reverse();
        }
        boardResult.push(innerBoard);
    }

    return boardResult;
}

console.log(manageBoard(10));
console.log(manageBoard(15));
console.log(manageBoard(5));