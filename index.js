function generateBoard(num) {
  let arrBoard = boardTemplate(num);
  let angka = 1;
  let arr = buatArray(num);
  for(let i = arrBoard.length-1; i >= 0; i--) {
    arr = [];
    for(let j = arrBoard.length-1; j >= 0; j--) {
      if(i%2 === 0) {
        arr[j] = angka;
      } else {
        arrBoard[i].push(angka);
      }
      angka++;
    }
    if(i%2 === 0) {
      arrBoard[i] =  arr;
    }
  }
  return arrBoard;
}

function buatArray(num) {
  let arr = [];
  for(let i = 0; i < num; i++) {
    arr.push([]);
  }

  return arr;
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

console.log(generateBoard(8));
