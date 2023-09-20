import Piece from "./Piece";
import Color from "./Color";

export abstract class PieceCreator {
	public abstract createPiece(color: Color) : Piece;
}