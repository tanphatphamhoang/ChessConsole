export default class Position {
  private readonly _x: Number;
  private readonly _y: Number;

  constructor(x: Number, y: Number) {
    this._x = x;
    this._y = y;
  }

  get x(): Number {
    return this._x;
  }

  get y(): Number {
    return this._y;
  }
}