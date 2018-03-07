function generateBoard(input){
  let board = [];
  for(let i=input; i>0; i--){
    let line = [];
    if(i%2==0){
      for(let j=i*input; j>i*input-input; j--){
        line.push(j);
      }
      board.push(line);
    } else {
      for(let k=i*input-input+1; k<i*input+1; k++){
        line.push(k);
      }
      board.push(line);
    }
  }
  return board;
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function playTheBoard(playerName, input){
  console.log(input);
  sleep(1000);
  let max = input.length*input.length;
  let countLangkah = 0;
  for(let i=0; i<=max-1; i++){
    sleep(1000);
    let rollDice = Math.floor(Math.random()*6+1);
    i += rollDice;
    countLangkah++;
    console.log(`${playerName} mendapatkan dadu dengan angka ${rollDice}`);
    console.log(`${playerName} berada di tangga nomor ${i}`);
    console.log('');
    i--
  }
  return `${playerName} finish dengan ${countLangkah-1} langkah!`
}

let eigthGrid = generateBoard(8);
console.log(playTheBoard('Rambo',eigthGrid))
