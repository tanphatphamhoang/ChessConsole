import Color from "../Piece/Color";
import Piece from "../Piece/Piece";
import Position from "./Position";
import Square from "./Square";

export default class Board {
    board: Array<Array<Square>>;
    readonly N = 8;
    blackPieces: Set<Piece>;
    whitePieces: Set<Piece>;

    constructor() {
      this.board = this.initializeBoard();
      this.blackPieces = new Set<Piece>();
      this.whitePieces = new Set<Piece>();
    }

    private initializeBoard(): Array<Array<Square>> {
      var board: Array<Array<Square>> = [];
      
      for(let r = 0; r < this.N; r++) {
        board.push(new Array<Square>());
        for(let c = 0; c < this.N; c++) {
          board[r].push(new Square(new Position(r, c)));
        }
      }

      return board;
    }
    
    executeMove(from: Square, to: Square) {
      const pieceAtFrom = from.getPiece()!;
      const pieceAtTo = to.getPiece();

      to.setPiece(pieceAtFrom);
      from.setPiece(null);

      if(pieceAtTo != null) {
        if(pieceAtTo.getColor() === Color.WHITE) {
          this.whitePieces.delete(pieceAtTo);
        } else {
          this.blackPieces.delete(pieceAtTo);
        }
      }
    }

    // get_beam_threatened(from: Square, x_increment, y_increment)
    // get_beam_threatened(from: Square, x_increment, y_increment) 
}