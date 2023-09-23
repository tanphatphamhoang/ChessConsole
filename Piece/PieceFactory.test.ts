import { PieceFactory } from "./PieceFactory";
import PieceType from "./PieceType";
import Color from "./Color";
import { Bishop, King, Queen, Pawn, Rook, Knight } from "./Piece";

describe("PieceFactory", () => {
  it("should return the correct piece", () => {
    expect(PieceFactory.createPiece(PieceType.KING, Color.WHITE)).toBeInstanceOf(King);
    expect(PieceFactory.createPiece(PieceType.KING, Color.WHITE).color).toBe(Color.WHITE);
    expect(PieceFactory.createPiece(PieceType.QUEEN, Color.WHITE)).toBeInstanceOf(Queen);
    expect(PieceFactory.createPiece(PieceType.QUEEN, Color.WHITE).color).toBe(Color.WHITE);
    expect(PieceFactory.createPiece(PieceType.BISHOP, Color.WHITE)).toBeInstanceOf(Bishop);
    expect(PieceFactory.createPiece(PieceType.BISHOP, Color.WHITE).color).toBe(Color.WHITE);
    expect(PieceFactory.createPiece(PieceType.KNIGHT, Color.WHITE)).toBeInstanceOf(Knight);
    expect(PieceFactory.createPiece(PieceType.KNIGHT, Color.WHITE).color).toBe(Color.WHITE);
    expect(PieceFactory.createPiece(PieceType.ROOK, Color.WHITE)).toBeInstanceOf(Rook);
    expect(PieceFactory.createPiece(PieceType.ROOK, Color.WHITE).color).toBe(Color.WHITE);
    expect(PieceFactory.createPiece(PieceType.PAWN, Color.WHITE)).toBeInstanceOf(Pawn);
    expect(PieceFactory.createPiece(PieceType.PAWN, Color.WHITE).color).toBe(Color.WHITE);
  });
});