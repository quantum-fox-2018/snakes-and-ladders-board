function generateBoard(num) {
  var hasil = [];
  var total = num * num;

  for (var i = num; i > 0; i--) {
    var arr = [];
    if (i % 2 === 0) {
      for (var j = num; j > 0; j--) {
        arr.push(total);
        total--;
      }
    } else {
      for (var k = total + 1 - num; k <= total; k++) {
        arr.push(k);
      }
      total = total - num;
    }
    hasil.push(arr);
  }
  return hasil;
}
console.log(generateBoard(10));
