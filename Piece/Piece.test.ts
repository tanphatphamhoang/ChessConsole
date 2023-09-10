import DummyPiece from "./DummyPiece";
import PieceType from "./PieceType";
import Color from "./Color";
import Board from "../Board/Board";
import Position from "../Board/Position";
import Square from "../Board/Square";

describe("Piece", () => {
  let pieceRookWhite = new DummyPiece(PieceType.ROOK, Color.WHITE, [[]]);

  it("should return the correct piece type", () => {
    expect(pieceRookWhite.getPieceType).toBe("rook");
  });

  it("should return the correct intial hasMoved status", () => {
    expect(pieceRookWhite.getHasMoved).toBe(false);
  });

  it("should return the correct hasMoved status after the first move", () => {
    let board = new Board();
    let from = new Square(new Position(0, 0), pieceRookWhite);
    let to = new Square(new Position(1, 1));
    board.board[0][0] = from;
    board.board[1][1] = to;
    board.executeMove(from, to);

    expect(pieceRookWhite.getHasMoved).toBe(true);
  });

  it("should return the correct color", () => {
    expect(pieceRookWhite.getColor).toBe("white");
  });

  it("should return the correct increments set", () => {
    expect(JSON.stringify(pieceRookWhite.getIncrements)).toBe(
      JSON.stringify([[]])
    );
  });
});
