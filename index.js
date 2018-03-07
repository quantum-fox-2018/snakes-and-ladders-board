
function generateBoard(input) {
    var result = []
    let size = input * input
    let count = size
    let dice = Math.floor((Math.random() * 6) + 1)
    let start = 0
    var countX = 0

    if (input % 2 == 0) {
        for (let i = 0; i < input; i++) {
            result.push([])

            if (i % 2 == 0) {
                for (let j = 0; j < input; j++) {
                    result[i].push(count)
                    count--
                }
            } else {
                count -= (input - 1)
                for (let k = 0; k < input; k++) {
                    result[i].push(count)
                    count++
                }
                count -= (input + 1)
            }
        }
    } else {
        for (let i = 0; i < input; i++) {
            result.push([])

            if (i % 2 != 0) {
                for (let j = 0; j < input; j++) {
                    result[i].push(count)
                    count--
                }
            } else {
                count -= (input - 1)
                for (let k = 0; k < input; k++) {
                    result[i].push(count)
                    count++
                }
                count -= (input + 1)
            }
        }
    }

    // console.log(result.length);

    while (start < size) {

        start += dice

        if (start > size) {
            start = size
        }
        for (let i = 0; i < result.length; i++) {
            for (j = 0; j < result.length; j++) {

                if (result[i][j] == start) {
                    result[i][j] = 'X'
                    var indexRow = i
                    var indexX = j
                }
            }
        }
        console.log('==================SEDANG BERJALAN================')
        console.log(result)
        result[indexRow][indexX] = start

        countX++
        sleep(200)
    }
    console.log(`Jumlah kocokan dadu sebanyak : ${countX} kali`)
    

}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

generateBoard(10)
// generateBoard(15)
// generateBoard(8)