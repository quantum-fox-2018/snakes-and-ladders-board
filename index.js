function generateBoard() {
  var outsideArr = [];
  var max = 1;
  var mark = 0;
  for(var i = 0; i < 10; i++) {
    var insideArr = [];
    outsideArr.push(insideArr);
  }

  for(var j = outsideArr.length-1; j >=0; j--) {
    var temp = [];
    if(mark % 2 === 0) {
      for(var k = 0; k < outsideArr.length;k++) {
        outsideArr[j].push(max++);
      }
    } else if(mark % 2 !== 0) {
      for(var m = 0; m < outsideArr.length;m++) {
        temp.push(max++);
      }
      for(var l = temp.length-1; l >= 0; l--) {
        outsideArr[j].push(temp[l]);
      }
    }
    mark++;
  }
  console.log(outsideArr);
}



generateBoard();
