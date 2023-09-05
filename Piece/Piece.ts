import Color from "./Color";
// import PieceType from "./PieceType";
// import Position from "../Board/Position";

export default interface Piece {
	Color: Color;
	getColor(): Color;
	// hasMoved: Boolean;
	// PieceType: PieceType;
	// increaments: Array<Array<Number>>;
	// getThreatenedPositions(piecetype: PieceType, position: Position): Array<Position>;
	// getMovablePositions(piecetype: PieceType, position: Position): Array<Position>;
}