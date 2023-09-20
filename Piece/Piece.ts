import PieceType from "./PieceType";
import Color from "./Color";
import Position from "../Board/Position";

export default abstract class Piece {
  private pieceType: PieceType;
  private hasMoved: boolean;
  private color: Color;
  private increments: Array<Array<Number>>;
  public abstract getThreatenedPositions(position: Position, increments: Array<Array<Number>>, color: Color): Array<Position> ;
	public abstract getMovablePositions(position: Position, increments: Array<Array<Number>>, color: Color): Array<Position> ;
    
  constructor(
    pieceType: PieceType,
    color: Color,
    increments: Array<Array<Number>>){
      this.pieceType = pieceType;
      this.hasMoved = false;
      this.color = color;
      this.increments = increments
  }

  get getPieceType(): PieceType {
    return this.pieceType;
  }

	get getHasMoved(): Boolean {
    return this.hasMoved;
  }

  get getColor(): Color {
    return this.color;
  }

  get getIncrements(): Array<Array<Number>> {
    return this.increments;
  }

  setHasMoved() {
    this.hasMoved = true;
  }

}