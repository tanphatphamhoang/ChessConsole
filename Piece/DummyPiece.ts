import Color from "./Color";
import Piece from "./Piece";

export default class DummyPiece implements Piece {
  color: Color;

  constructor(color: Color){
    this.color = color;
  }

  public getColor(): Color {
    return this.color;
  }
}