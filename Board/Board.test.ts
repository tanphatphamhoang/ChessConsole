import Board from "./Board";
import Color from "../Piece/Color";
import DummyPiece from "../Piece/DummyPiece";
import Position from "./Position";
import Square from "./Square";
import PieceType from "../Piece/PieceType";

describe("executeMove", () => {
  it("should move a piece from a square to another empty square", () => {
    // Arrange
    let piece = new DummyPiece(PieceType.KING,Color.WHITE,[[]]);
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

  it("should move a piece from a square to another square with a piece of the opposite color", () => {
    // Arrange
    let pieceAtFrom = new DummyPiece(PieceType.KING,Color.WHITE,[[]]);
    let pieceAtTo = new DummyPiece(PieceType.KING,Color.BLACK,[[]]);

    let from = new Square(new Position(0, 0), pieceAtFrom);
    let to = new Square(new Position(1, 1), pieceAtTo);
    
    let board = new Board();
    board.board[0][0] = from;
    board.board[1][1] = to;
    board.whitePieces.add(pieceAtFrom);
    board.blackPieces.add(pieceAtTo);
    
    // Act
    board.executeMove(from, to);

    // Assert
    expect(board.board[0][0].isEmpty()).toBe(true);
    expect(board.board[1][1].isEmpty()).toBe(false);
    expect(board.blackPieces.has(pieceAtTo)).toBe(false);
  });
});