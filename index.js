function generateBoard(num) {
    var arrResult = [];
    var total = num * num;

    for (var i = 0; i < num; i++) {
        var temp = [];
        total -= num;
        if (num % 2 === 0) {
            if (i % 2 !== 0) {
                for (var j = 1; j <= num; j++) {
                    temp.push(j + total);
                }
            } else {
                for (var k = num; k > 0; k--) {
                    temp.push(k + total);
                }
            }
        } else {
            if (i % 2 === 0) {
                for (var j = 1; j <= num; j++) {
                    temp.push(j + total);
                }
            } else {
                for (var k = num; k > 0; k--) {
                    temp.push(k + total);
                }
            }
        }


        arrResult.push(temp);
    }

    return arrResult;
}


console.log(generateBoard(10));
console.log('');
console.log(generateBoard(15));
console.log('');
console.log(generateBoard(8));