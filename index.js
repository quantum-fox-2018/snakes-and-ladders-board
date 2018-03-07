class PlayBoard {
  constructor(totalPlayer, gridBoard) {
    this.totalPlayer = totalPlayer;
    this.gridBoard = gridBoard;
    this.players = this.generatePlayers();
    this.board = this.generateBoard();
    this.finish = false;
    this.count = 0;
  }

  generatePlayers(){
    let abjad = 'abcdefghijklmnopqrstuvwxyz'
    let posisi = [1,2,3]
    let players = [];
    for(let i=0; i<this.totalPlayer; i++){
      let obj = {
        name: abjad[i],
        position: 1
      }
      players.push(obj)
    }
    return players;
  }

  generateBoard(){
    let board = [];
    for(let i=this.gridBoard; i>0; i--){
      let line = [];
      if(i%2==0){
        for(let j=i*this.gridBoard; j>i*this.gridBoard-this.gridBoard; j--){
          line.push(j);
        }
        board.push(line);
      } else {
        for(let k=i*this.gridBoard-this.gridBoard+1; k<i*this.gridBoard+1; k++){
          line.push(k);
        }
        board.push(line);
      }
    }
    return board;
  }

  boardWithPlayer(players){
    for(let k=0; k<players.length; k++){
      for(let i=0; i<this.board.length; i++){
        for(let j=0; j<this.board[i].length; j++){
            if(this.board[i][j]==players[k].position){
              this.board[i][j] += players[k].name
            }
        }
      }
    }
    console.log(this.board);
  }

  printBoard(){
    this.boardWithPlayer(this.players);
    let random = Math.floor(Math.random()*6+1);
    this.players[0].position += random;
    this.count++;
  }

  finished(){
    let max = this.gridBoard*this.gridBoard;
    if(this.players[0].position>=max){
      this.players[0].position = max;
      this.finish = true;
      this.printBoard();
      console.log(`You Win with ${this.count} steps!`);
    }
  }

}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

let letsPlay = new PlayBoard(1,10);
letsPlay.generatePlayers();

while(!letsPlay.finish){
  sleep(1000)
  letsPlay.printBoard();
  letsPlay.finished();
}
