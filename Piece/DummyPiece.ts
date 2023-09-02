import Color from "./Color";
import Piece from "./Piece";

export default class DummyPiece implements Piece {
  Color: Color;

  constructor(color: Color){
    this.Color = color;
  }

  public getColor(): Color {
    return this.Color;
  }
}