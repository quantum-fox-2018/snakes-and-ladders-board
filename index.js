function generateBoard(input){
  let board = [];
    for(let i=input; i>0; i--){
      let line = [];
      if(i%2==0){
        for(let j=i*input; j>i*input-input; j--){
          line.push(j);
        }
        board.push(line);
      } else {
        for(let k=i*input-input+1; k<i*input+1; k++){
          line.push(k);
        }
        board.push(line);
      }
    }
  return board;
}

let eigthGrid = generateBoard(8);
let fifteenGrid = generateBoard(15);
console.log(eigthGrid);
console.log(fifteenGrid);
