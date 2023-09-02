import GameStatus from "./GameStatus";

describe("GameStatus", () => {
  it("should contains the required GameStatus", () => {
    expect(GameStatus.CHECKED).toEqual(0);
    expect(GameStatus.UNCHECKED).toEqual(1);
    expect(GameStatus.CHECKMATE).toEqual(2);
    expect(GameStatus.STALEMATE).toEqual(3);
  });
});
