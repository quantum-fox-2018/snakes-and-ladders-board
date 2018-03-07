function generateBoard(size){

  var board = [];

  for (let i = 0; i < size; i++) {
      board.push([])
  }


  var boardCount = 1;
  var flag = 0;
  for (var j = board.length-1; j >= 0; j--) {
    if (flag%2 === 1) {
      var temp = [];
      for (var k = 0; k < size; k++) {
        temp.push(boardCount)
        boardCount++
      }
      temp = reverseArray(temp)
      for (var m = 0; m < temp.length; m++) {
        board[j].push(temp[m])
      }
    }
    else{
      for (var k = 0; k < size; k++) {
        board[j].push(boardCount)
        boardCount++
      }
    }
    flag++
  }

  function reverseArray(arr){
    var resultArr = [];
    for (var l = arr.length-1; l >= 0; l--) {
      resultArr.push(arr[l])
    }
    return resultArr
  }

  // var counter = 1;
  // for (var k = board.length; k >= 0; k--) {
  //   if (counter%2 === 0) {
  //     var temp = board[k]
  //     temp = temp.reverse();
  //     board.splice(k, 1, temp)
  //   }
  //   counter++;
  // }
  return board;
}

console.log(generateBoard(10))
