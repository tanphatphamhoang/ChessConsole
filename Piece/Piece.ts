import PieceType from "./PieceType";
import Color from "./Color";
import Position from "../Board/Position";

export default interface Piece {
    PieceType: PieceType;
    hasMoved: Boolean;
    Color: Color;
    increaments: Array<Array<Number>>;
    abstract public getThreatenedPositions(piecetype: PieceType, position: Position): Array<Position>;
    abstract public getMovablePositions(piecetype: PieceType, position: Position): Array<Position>;
}