import DummyPiece from "./DummyPiece";
import Color from "./Color";
import Board from "../Board/Board";
import Position from "../Board/Position";
import Square from "../Board/Square";

describe("Piece", () => {
  let pieceRookWhite = new DummyPiece(Color.WHITE);

  it("should return the correct intial hasMoved status", () => {
    expect(pieceRookWhite.hasMoved).toBe(false);
  });

  it("should return the correct hasMoved status after the first move", () => {
    let board = new Board();
    let from = new Square(new Position(0, 0), pieceRookWhite);
    let to = new Square(new Position(1, 1));
    board.board[0][0] = from;
    board.board[1][1] = to;
    board.executeMove(from, to);

    expect(pieceRookWhite.hasMoved).toBe(true);
  });

  it("should return the correct color", () => {
    expect(pieceRookWhite.color).toBe("white");
  });
});