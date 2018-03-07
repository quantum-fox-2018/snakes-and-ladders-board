function snakeBoards(ukuran) {
    
    var boards = []
    var num = ukuran*ukuran

    //ROW / BARIS

    if (ukuran % 2 === 0) {
        for (var i = 0; i < ukuran; i++) {
            
            var numberTemp = []

            //COLUMN / KOL
            if (i % 2 === 0) {
                for (var j = 0; j < ukuran; j++) {
                    
                        numberTemp.push(num)
                        num -= 1
                }
            } else {

                num -= ukuran

                for (var k = 0; k < ukuran; k++) {
                    
                    num += 1
                    numberTemp.push(num)
                }

                num -= ukuran
            }
            boards.push(numberTemp)
        }

    } else {

        for (var i = 0; i < ukuran; i++) {
            
            var numberTemp = []

            //COLUMN / KOL
            if (i % 2 !== 0) {
                for (var j = 0; j < ukuran; j++) {
                    
                        numberTemp.push(num)
                        num -= 1
                }

            } else {

                num -= ukuran

                for (var k = 0; k < ukuran; k++) {
                    
                    num += 1
                    numberTemp.push(num)
                }

                num -= ukuran
            }
            boards.push(numberTemp)
        }
    }

    console.log(boards)
}

snakeBoards(10)