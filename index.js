function generateBoard(input) {
  let arrBoard = []
  let num = input * input
  // let counter=0
  let dice = [1, 2, 3, 4, 5, 6]
  let playerObj = [{
      name: 'X',
      counter: 0
    },
    {
      name: 'Y',
      counter: 0
    }
  ]

  for (var i = 0; i < input; i++) {
    var temp = []
    for (var j = 0; j < input; j++) {
      temp.push(num)
      num--
    }
    if (input % 2 === 0) {
      if (i % 2 !== 0) {
        temp.reverse()
      }
    } else {
      if (i % 2 === 0) {
        temp.reverse()
      }
    }
    arrBoard.push(temp)
  }
  num = input * input
  while (playerObj[0].counter < num && playerObj[1].counter < num) {
    for (var k = 0; k < playerObj.length; k++) {
      var rand = dice[Math.floor(Math.random() * 6)]
      playerObj[k].counter = playerObj[k].counter + rand
      if (playerObj[k].counter > num) {
        playerObj[k].counter = num
      }
      for (var i = 0; i < input; i++) {
        for (var j = 0; j < input; j++) {
          if (playerObj[k].counter === arrBoard[i][j]) {
            arrBoard[i][j] = playerObj[k].name
            var getRow = i
            var getCol = j
          }
        }
      }
      console.log(arrBoard);
      console.log('current position ' + playerObj[k].name + ' : ' + playerObj[k].counter);
      arrBoard[getRow][getCol] = playerObj[k].counter
      if (playerObj[k].counter === num) {
        console.log('\n');
        console.log('the winner is: ' + playerObj[k].name);
        break
      }

    }
  }



}

generateBoard(10);
