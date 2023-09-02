export default interface Piece {
    PieceType: PieceType;
    hasMoved: Boolean;
    Color: Color;
    increaments: Array<Array<Number>>;
    abtract private getThreatenedPositions(piecetype: PieceType, position: Number[]): Array<Array<Number>>{return [[]]};
    abtract private getMovablePositions(piecetype: PieceType, position: Number[]): Array<Array<Number>>{return [[]]}
}