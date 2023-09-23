import Piece, { King, Queen, Bishop, Knight, Rook, Pawn } from "./Piece";
import Color from "./Color";
import PieceType from "./PieceType";

export class PieceFactory {
	public static createPiece(pieceType: PieceType, color: Color) : Piece {
		switch(pieceType){
			case PieceType.KING:
				return new King(color);
				break;
			case PieceType.QUEEN:
				return new Queen(color);
				break;
			case PieceType.BISHOP:
				return new Bishop(color);
				break;
			case PieceType.KNIGHT:
				return new Knight(color);
				break;
			case PieceType.ROOK:
				return new Rook(color);
				break;
			case PieceType.PAWN:
				return new Pawn(color);
				break;
			default:
				throw new Error("Invalid piece type");
		}
	}
}