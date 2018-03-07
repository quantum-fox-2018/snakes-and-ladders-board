function generateBoard(num) {
    
    let arrBoard = [];
    var startNum = num * num;
    if(num % 2 == 0) {
        for (let i = 0; i < num; i++) {
            arrBoard.push([]);
            if (i % 2 == 0) {
                for (let j = 0; j < num; j++) {
                    arrBoard[i].push(startNum);
                    startNum--;
                }
            } else {
                let evenNum = startNum - (num-1);
                for (let j = 0; j < num; j++) {
                    arrBoard[i].push(evenNum);
                    evenNum++;
                    startNum--;
                }
            }     
        }
    } else {
        for (let i = 0; i < num; i++) {
            arrBoard.push([]);
            if (i % 2 == 0) {
                let evenNum = startNum - (num-1);
                for (let j = 0; j < num; j++) {
                    arrBoard[i].push(evenNum);
                    evenNum++;
                    startNum--;
                }
            } else {
                for (let j = 0; j < num; j++) {
                    arrBoard[i].push(startNum);
                    startNum--;
                }
            }     
        }   
    }

    console.log(arrBoard);

    let arrStep = [];
    let maxStep = num * num;
    let segiDice = 6;

    while(maxStep > 0) {
        let dice = Math.round(Math.random()*segiDice);
        maxStep -= dice;
        arrStep.push(dice);
    }
        
    console.log(`==========================DICE${segiDice}===========================`);
    console.log(arrStep);
    console.log(`Langkah menuju bintang adalah sebanyak ${arrStep.length}`);

}

generateBoard(5);