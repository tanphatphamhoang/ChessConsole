import Color from "./Color";
import Position from "../Board/Position";

export default abstract class Piece {
  private _hasMoved: boolean = false;
  private _color: Color;
  public abstract getThreatenedPositions(position: Position, increments: Array<Array<number>>, color: Color): Array<Position> ;
	public abstract getMovablePositions(position: Position, increments: Array<Array<number>>, color: Color): Array<Position> ;
    
  constructor(_color: Color,){
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

export class King extends Piece {
  getMovablePositions(position: Position, increments: Array<Array<number>>, color: Color): Array<Position>{
      return [];
  }
  
  getThreatenedPositions(position: Position, increments: Array<Array<number>>, color: Color): Array<Position>{
      return [];
  }
}

export class Queen extends Piece {
  getMovablePositions(position: Position, increments: Array<Array<number>>, color: Color): Array<Position>{
      return [];
  }
  
  getThreatenedPositions(position: Position, increments: Array<Array<number>>, color: Color): Array<Position>{
      return [];
  }
}

export class Bishop extends Piece {
  getMovablePositions(position: Position, increments: Array<Array<number>>, color: Color): Array<Position>{
      return [];
  }
  
  getThreatenedPositions(position: Position, increments: Array<Array<number>>, color: Color): Array<Position>{
      return [];
  }
}

export class Knight extends Piece {
  getMovablePositions(position: Position, increments: Array<Array<number>>, color: Color): Array<Position>{
      return [];
  }
  
  getThreatenedPositions(position: Position, increments: Array<Array<number>>, color: Color): Array<Position>{
      return [];
  }
}

export class Rook extends Piece {
  getMovablePositions(position: Position, increments: Array<Array<number>>, color: Color): Array<Position>{
      return [];
  }
  
  getThreatenedPositions(position: Position, increments: Array<Array<number>>, color: Color): Array<Position>{
      return [];
  }
}

export class Pawn extends Piece {
  getMovablePositions(position: Position, increments: Array<Array<number>>, color: Color): Array<Position>{
      return [];
  }
  
  getThreatenedPositions(position: Position, increments: Array<Array<number>>, color: Color): Array<Position>{
      return [];
  }
}