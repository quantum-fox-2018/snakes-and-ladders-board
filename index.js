function generateBoard(size){
  var boardCount = size*size;
  var board = [];
  var flag = "plus";
  for (var i = 0; i < size; i++) {
    var tempArr = [];
      for (var j = 0; j < size; j++) {
          tempArr.push(boardCount);
          boardCount--;
      }
      board.push(tempArr)
  }
  var counter = 1;
  for (var k = board.length; k >= 0; k--) {
    if (counter%2 === 0) {
      var temp = board[k]
      temp = temp.reverse();
      board.splice(k, 1, temp)
    }
    counter++;
  }
  return board;
}

console.log(generateBoard(12))
