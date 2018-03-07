function generateBoard(numPapan) {

  let laddersBoard = [];
  let counter = numPapan*numPapan;
  const jumlahColumn = numPapan;

  for(let i=0; i<numPapan;i++){

    laddersBoard.push([]);
    if(i % 2 == 0){
      for(let j=0 ; j<numPapan;j++){
        laddersBoard[i].push(counter);
        counter--;;
      }
    }
    else if(i % 2 != 0){
      counter = counter - (jumlahColumn-1);
      for(let j=0 ; j<numPapan;j++){
        laddersBoard[i].push(counter);
        counter++;
      }
      counter = counter - (jumlahColumn + 1);
    }
  }
  return laddersBoard;
} 

console.log(generateBoard(8));
