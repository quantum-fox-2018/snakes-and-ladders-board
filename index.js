function generateBoard(dimensions) {
  var arrBoard = [];
  var num = dimensions * dimensions;

  for (let i = dimensions; i > 0; i--) {
    let arrRow = [];
    if (i % 2 === 0) {
      for (let kanan = 0; kanan < dimensions; kanan++) {
        arrRow.push(num);
        num--;
      }
    } else if (i % 2 !== 0) {
      num = num - dimensions;
      up = num + 1;
      for (let kiri = 0; kiri < dimensions; kiri++) {
        arrRow.push(up);
        up++;
      }
    }
    arrBoard.push(arrRow);
  }

  return arrBoard;
}

console.log(generateBoard(10));
console.log('');
console.log(generateBoard(8));
console.log('');
console.log(generateBoard(15));
