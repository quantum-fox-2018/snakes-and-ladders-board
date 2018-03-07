function manageBoard(num){
    let boardResult = [];
    let innerBoard = [];
    let boxNum = num*num;

    for(let counter = num; counter>0; counter--){
        innerBoard = [];
        if(counter%2 === 0){
            for(let counter2 = 0; counter2<num; counter2++){
                innerBoard.push(boxNum);
                boxNum--
            }
        }else if(counter%2 !== 0){
            boxNum-=num;
            let angkaNaik = boxNum +1;
            
            for(let counter2=0; counter2<num; counter2++){
                innerBoard.push(angkaNaik);
                angkaNaik++;
            }
        }
        boardResult.push(innerBoard);
    }

    return boardResult;
}

console.log(manageBoard(10));
console.log(manageBoard(15));
console.log(manageBoard(5));
console.log(manageBoard(3));