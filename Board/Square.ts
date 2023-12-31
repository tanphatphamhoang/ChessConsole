import Piece from "../Piece/Piece";
import Position from "./Position";

export default class Square {
  readonly position: Position;
  piece: Piece | null = null;

  public constructor(position: Position, piece: Piece | null = null) {
    this.position = position;
    this.piece = piece;
  }

  public isEmpty(): boolean {
    return this.piece == null;
  }

  public getPosition(): Position {
    return this.position;
  }

  public getPiece(): Piece | null {
    return this.piece;
  }

  public setPiece(piece: Piece | null): void {
    this.piece = piece;
  }

  // tbd: toString();
}

