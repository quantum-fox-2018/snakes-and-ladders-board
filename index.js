function generateBoard(num) {
  var arrBoard = [];
  var numTotal = num * num;

  for (let i = 0; i < num; i++) {
    let arrRow = [];
    if (i % 2 === 0) {
      for (let kanan = 0; kanan < num; kanan++) {
        arrRow.push(numTotal);
        numTotal--;
      }
    } else if (i % 2 === 1) {
      numTotal = numTotal - num;
      up = numTotal + 1;
      for (let kiri = 0; kiri < num; kiri++) {
        arrRow.push(up);
        up++;
      }
    }
    arrBoard.push(arrRow);
  }

  return arrBoard;
}

console.log(generateBoard(10));
console.log(generateBoard(8));
console.log(generateBoard(15));
