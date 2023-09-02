import Board from "./Board";
import Color from "../Piece/Color";
import DummyPiece from "../Piece/DummyPiece";
import Position from "./Position";
import Square from "./Square";

describe("executeMove", () => {
  it("should move a piece from a square to another empty square", () => {
    // Arrange
    let piece = new DummyPiece(Color.WHITE);
    let from = new Square(new Position(0, 0), piece);
    let to = new Square(new Position(1, 1));
    let board = new Board();
    board.board[0][0] = from;
    board.board[1][1] = to;

    // Act
    board.executeMove(from, to);

    // Assert
    expect(board.board[0][0].isEmpty()).toBe(true);
    expect(board.board[1][1].isEmpty()).toBe(false);
  });
});