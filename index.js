function forReverse(input){
  for(let i=1; i<input.length; i++){
    for(let j=0; j<=i-1; j++){
      let front = input[j];
      let back = input[i];
      if(input[i]<input[j]){
        input[i] = front;
        input[j] = back;
      }
    }
  }
  return input;
}

function generateBoard(input){
  let board = [];
  let line = [];
  for(let i=input*input; i>0; i--){
    if(i%input==0){
      board.push(line);
      line = [];
      line.push(i);
    } else {
      line.push(i);
    }
  }
  board.push(line);
  board.shift();
  if(input%2==0){
    for(let i=0; i<board.length; i++){
      if(i%2!==0){
        forReverse(board[i]);
      }
    }
  } else {
    for(let i=0; i<board.length; i++){
      if(i%2==0){
        forReverse(board[i]);
      }
    }
  }
  return board;
}

console.log(generateBoard(8));
