function generateBoard(num) {
  var max = num * num;
  var min = max - num;
  var hasil = [];
  for (var i = num; i > 0; i--) {
    var tmp =[];
    if(i%2===0){
      for(var j = max ; j > min ; j--){
        tmp.push(j);
      }
      hasil.push(tmp);
      tmp = [];
      max -= num;
      min -= num;
    }
    else if(i%2!==0){
      for(var k = min +1 ; k <= max ; k++){
        tmp.push(k);
      }
      hasil.push(tmp);
      tmp = [];
      max  -= num;
      min -= num;
    }
  }
  return hasil;
}

console.log(generateBoard(8))
console.log(generateBoard(15))
