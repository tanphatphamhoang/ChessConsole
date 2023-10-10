import Color from "../Piece/Color";
import Piece from "../Piece/Piece";
import Position from "./Position";
import Square from "./Square";

export default class Board {
    private _board: Array<Array<Square>>;
    private readonly N = 8;
    private _blackPieces: Set<Piece>;
    private _whitePieces: Set<Piece>;

    constructor() {
      this._board = this.initializeBoard();
      this._blackPieces = new Set<Piece>();
      this._whitePieces = new Set<Piece>();
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
      const pieceAtFrom = from.piece!;
      const pieceAtTo = to.piece!;

      to.piece = pieceAtFrom;
      from.piece = null;
      pieceAtFrom.hasMoved = true;

      if(pieceAtTo != null) {
        if(pieceAtTo.color === Color.WHITE) {
          this._whitePieces.delete(pieceAtTo);
        } else {
          this._blackPieces.delete(pieceAtTo);
        }
      }
    }

    // get_beam_threatened(from: Square, x_increment, y_increment)
    // get_beam_threatened(from: Square, x_increment, y_increment) 

    get board(): Array<Array<Square>> {
      return this._board;
    }

    get blackPieces(): Set<Piece> {
      return this._blackPieces;
    }

    get whitePieces(): Set<Piece> {
      return this._whitePieces;
    }
}