import PieceType from "./PieceType";
import Color from "./Color";
import Position from "../Board/Position";

export default abstract class Piece {
  private _pieceType: PieceType;
  private _hasMoved: boolean = false;
  private _color: Color;
  private _increments: Array<Array<number>>;
  public abstract getThreatenedPositions(position: Position, increments: Array<Array<number>>, color: Color): Array<Position> ;
	public abstract getMovablePositions(position: Position, increments: Array<Array<number>>, color: Color): Array<Position> ;
    
  constructor(
    _pieceType: PieceType,
    _color: Color,
    _increments: Array<Array<number>>){
      this._pieceType = _pieceType;
      this._color = _color;
      this._increments = _increments
  }

  get pieceType(): PieceType {
    return this._pieceType;
  }

  get hasMoved(): Boolean {
    return this._hasMoved;
  }

  get color(): Color {
    return this._color;
  }

  get increments(): Array<Array<number>> {
    return this._increments;
  }

  public set hasMoved(hasMove : boolean) {
    this._hasMoved = hasMove;
  }
}
