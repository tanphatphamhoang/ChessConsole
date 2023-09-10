import Piece from "./Piece"
import DummyPiece from "./DummyPiece";
import PieceType from "./PieceType";
import Color from "./Color";
import Board from "../Board/Board";
import Position from "../Board/Position";
import Square from "../Board/Square";

describe("Piece", () => {
    let pieceRookWhite = new DummyPiece(PieceType.ROOK,Color.WHITE,[[]]);
    let pieceKnightWhite = new DummyPiece(PieceType.KNIGHT,Color.WHITE,[[]]);
    let pieceBishopWhite = new DummyPiece(PieceType.BISHOP,Color.WHITE,[[]]);
    let pieceQueenWhite = new DummyPiece(PieceType.QUEEN,Color.WHITE,[[]]);
    let pieceKingWhite = new DummyPiece(PieceType.KING,Color.WHITE,[[]]);
    let piecePawnWhite = new DummyPiece(PieceType.PAWN,Color.WHITE,[[]]);

    it("should return the correct piece type", () => {
        expect(pieceRookWhite.getPieceType).toBe("rook");
        expect(pieceKnightWhite.getPieceType).toBe("knight");
        expect(pieceBishopWhite.getPieceType).toBe("bishop");
        expect(pieceQueenWhite.getPieceType).toBe("queen");
        expect(pieceKingWhite.getPieceType).toBe("king");
        expect(piecePawnWhite.getPieceType).toBe("pawn");
    })

    it("should return the correct intial hasMoved status", () => {
        expect(pieceRookWhite.getHasMoved).toBe(false);
        expect(pieceKnightWhite.getHasMoved).toBe(false);
        expect(pieceBishopWhite.getHasMoved).toBe(false);
        expect(pieceQueenWhite.getHasMoved).toBe(false);
        expect(pieceKingWhite.getHasMoved).toBe(false);
        expect(piecePawnWhite.getHasMoved).toBe(false);
    })

    it("should return the correct hasMoved status after the first move", () => {
        let board = new Board();
        let from = new Square(new Position(0, 0), pieceRookWhite);
        let to = new Square(new Position(1, 1));
        board.board[0][0] = from;
        board.board[1][1] = to;

        board.executeMove(from,to);

        expect(pieceRookWhite.getHasMoved).toBe(true);
    })

    it("should return the correct color", () => {
        expect(pieceRookWhite.getColor).toBe("white");
        expect(pieceKnightWhite.getColor).toBe("white");
        expect(pieceBishopWhite.getColor).toBe("white");
        expect(pieceQueenWhite.getColor).toBe("white");
        expect(pieceKingWhite.getColor).toBe("white");
        expect(piecePawnWhite.getColor).toBe("white");
    })

    it("should return the correct increments set", () => {
        expect(JSON.stringify(pieceRookWhite.getIncrements)).toBe(JSON.stringify([[]]));
    })
    
}
)