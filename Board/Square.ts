import Piece from "../Piece/Piece";
import Position from "./Position";

export default class Square {
  private readonly _position: Position;
  private _piece: Piece | null = null;

  public constructor(position: Position, piece: Piece | null = null) {
    this._position = position;
    this._piece = piece;
  }

  public isEmpty(): boolean {
    return this._piece == null;
  }

  get position(): Position {
    return this._position;
  }

  get piece(): Piece | null {
    return this._piece;
  }

  set piece(piece: Piece | null) {
    this._piece = piece;
  }

  // tbd: toString();
}

