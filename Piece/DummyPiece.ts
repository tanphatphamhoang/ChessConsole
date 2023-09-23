import Color from "./Color";
import Piece from "./Piece";
import Position from "../Board/Position";

export default class DummyPiece extends Piece {
    getMovablePositions(position: Position, increments: Array<Array<number>>, color: Color): Array<Position>{
        return [];
    }
    
    getThreatenedPositions(position: Position, increments: Array<Array<number>>, color: Color): Array<Position>{
        return [];
    }
}