interface Piece{
    PieceType: PieceType; //string
    hasMoved: boolean;
    color:Color //string
    increaments: array<array<number>>;
    abtract private get_threatened_positions(piecetype: PieceType, position: number[]): array<array<number>{return [[]]};
    abtract private get_movable_positions(piecetype: PieceType, position: number[]): array<Array<number>>{return [[]]}
}

enum PieceType {
    Rook="rook",
    Knight = "knight",
    Bishop = "bishop",
    Queen = "queen",
    King = "king",
    Pawn = "pawn"
}

let hasMoved: boolean;

enum Color{
    White="white",
    Black="Black"
}

