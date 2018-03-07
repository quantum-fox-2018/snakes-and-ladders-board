function generateBoard(num) {
  let arrBoard = boardTemplate(num);
  let angka = 1;

  for(let i = arrBoard.length-1; i >= 0; i--) {
    for(let j = arrBoard.length-1; j >= 0; j--) {
      if(i%2 === 0) {
        arrBoard[i].unshift(angka);
      } else {
        arrBoard[i].push(angka);
      }
      angka++;
    }
  }
  return arrBoard;
}

function boardTemplate(num) {
  let arrHasil = [];
  let row;
  for(let i = 0; i < num; i++) {
    row = [];
    arrHasil.push(row);
  }
  return arrHasil;
}

console.log(generateBoard(10));
