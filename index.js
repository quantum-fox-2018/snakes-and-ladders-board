function snakesAndLaddersBoard(num) {

  let board = []
  let counterGanjil = 1

  for (let i = 0; i < num; i++) {

    let row = []
    board.push(row)

  }

  if (num % 2 == 0) {

    for (let i = board.length-1; i >= 0; i--) {

      if (i % 2 == 1) {

        while (board[i].length < num) {

          board[i].push(counterGanjil)
          counterGanjil+=1

        }

        var counterGenap = board[i][board[i].length-1] + board[i].length
        counterGanjil = (counterGanjil + board[i].length)

      } else {

        while (board[i].length < num) {

          board[i].push(counterGenap)
          counterGenap-=1

        }

      }

    }

  } else {

    for (let i = board.length-1; i >= 0; i--) {

      if (i % 2 == 0) {

        while (board[i].length < num) {

          board[i].push(counterGanjil)
          counterGanjil+=1

        }

        var counterGenap = board[i][board[i].length-1] + board[i].length
        counterGanjil = (counterGanjil + board[i].length)

      } else {

        while (board[i].length < num) {

          board[i].push(counterGenap)
          counterGenap-=1

        }

      }

    }

  }


return board

}

console.log(snakesAndLaddersBoard(10));
