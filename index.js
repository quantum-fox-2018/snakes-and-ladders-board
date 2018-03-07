function snakeBoard(num) {
  var result = [];
  var goLeft = num * num
  var goRight = num*num
  for (var i = 0; i < num; i++) {
    var tmp = []
    if(i%2==0){
      goRight -= num*2
      //dsBconsole.log('>>'+goRight);
    }
    if (i % 2!== 0) {
      for (var k = 1; k <= num; k++) {
        tmp.push(goRight+1)
        goRight++
      }
    } else {
      for (var j = num; j > 0; j--) {
        tmp.push(goLeft)
        goLeft--
      }
    }
    result.push(tmp)
    if(i%2!==0){
      goLeft -= num
      goRight-=num
    }

  }

  return result;

}
console.log(snakeBoard(10));
console.log(snakeBoard(7));
