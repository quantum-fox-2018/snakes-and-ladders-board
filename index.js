function generateBoard(num) {
  var arrayHasil = [];
  var terbesar = num * num;
  var terkecil = terbesar - num;

  for (var i = num; i > 0; i--) {
    var array = [];
    if (i % 2 == 0) {
      for (var j = terbesar; j > terkecil; j--) {
        array.push(j);
      }
      arrayHasil.push(array);
      array = [];
      terbesar -= num;
      terkecil -= num;
    } else if (i % 2 !== 0) {
      for (var k = terkecil + 1; k <= terbesar; k++) {
        array.push(k);
      }
      arrayHasil.push(array);
      array = [];
      terbesar -= num;
      terkecil -= num;
    }
  }
  return arrayHasil
}

console.log(generateBoard(8))
