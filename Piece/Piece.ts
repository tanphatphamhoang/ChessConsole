import PieceType from "./PieceType";
import Color from "./Color";

export default abstract class Piece {
  private pieceType: PieceType;
  private hasMoved: boolean;
  private color: Color;
  private increments: Array<Array<Number>>;
  // abstract public getThreatenedPositions(piecetype: PieceType, position: Position): Array<Position>;
	// abstract public getMovablePositions(piecetype: PieceType, position: Position): Array<Position>;
    
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