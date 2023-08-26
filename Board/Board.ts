class Board{
    board: Array<Array<Square>>;
    readonly N = 8;

    constructor(){
      this.board = this.initializeBoard();
    }

    private initializeBoard(): Array<Array<Square>>{
      var board!: Array<Array<Square>>;
      for(var r = 0; r < this.N; r++){
        board.push(new Array<Square>());
        for(var c = 0; c < this.N; c++){
          board[r].push(new Square(new Position(r, c)));
        }
      }
      return board;
    }
    
    // excute_move(from: Square, to: Square){}
    // get_beam_threatened(from: Square, x_increment, y_increment)
    // get_beam_threatened(from: Square, x_increment, y_increment) 
}