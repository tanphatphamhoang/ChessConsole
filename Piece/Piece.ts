import Color from "./Color";
import Position from "../Board/Position";

export default abstract class Piece {
  private _hasMoved: boolean = false;
  private _color: Color;
  public abstract getThreatenedPositions(position: Position, increments: Array<Array<number>>, color: Color): Array<Position> ;
	public abstract getMovablePositions(position: Position, increments: Array<Array<number>>, color: Color): Array<Position> ;
    
  constructor(
    _color: Color,){
      this._color = _color;
  }

	get hasMoved(): Boolean {
    return this._hasMoved;
  }

  get color(): Color {
    return this._color;
  }

  public set hasMoved(hasMove : boolean) {
    this._hasMoved = hasMove;
  }
}