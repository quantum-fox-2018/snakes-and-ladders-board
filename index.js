function generateBoard(num){
  var rowBoard = []
  for(let i=0; i<num; i++){
    rowBoard.push([])
  }

  let boardCount=1;
  let row=0;
  //Looping array dari index terakhir
  for(let i=rowBoard.length-1; i>=0; i--){
    if(row%2 === 0){
      //Looping angka untuk push ke rowBoard
      for(let j=0; j<num; j++){
        rowBoard[i].push(boardCount)
        boardCount++
      }
    }else{
      let temp=[];
      //Looping untuk menampung angka sementara
      for(let j=0; j<num; j++){
        temp.push(boardCount);
        boardCount++;
      }
      //Looping untuk balik angka di array temp dan push ke rowBoard
      for(let k=temp.length-1; k>=0; k--){
        rowBoard[i].push(temp[k]);
      }
    }
    row++
  }
  return rowBoard
}
console.log(generateBoard(5));
// console.log(generateBoard(10));
// console.log(generateBoard(15));
// console.log(generateBoard(3));
