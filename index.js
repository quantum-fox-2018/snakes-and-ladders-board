//Snakes and ladders

function generateBoard(number){
    let num = Math.pow(number, 2);

    let arrResults = [];
    for(let i = 0; i < number; i++){
        let tempNums = [];

        if(i % 2 === 0){
            if(number % 2 === 0){
                for(let j = 0; j < number; j++){
                    tempNums.push(num);
                    num--;
                }
            }else{

                num -= number;
                for(let j = 0; j < number; j++){
                    num++;
                    tempNums.push(num);

                }
                num -= number;
            }
        }else{
            if(number % 2 === 0){
                num -= number;
                for(let j = 0; j < number; j++){
                    num++;
                    tempNums.push(num);

                }
                num -= number;
            }else{
                for(let j = 0; j < number; j++){
                    tempNums.push(num);
                    num--;
                }
            }
        }

        arrResults.push(tempNums);
    }

    return arrResults;
}

console.log(generateBoard(15));
console.log(generateBoard(8));
