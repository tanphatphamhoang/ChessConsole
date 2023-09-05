import Color from "./Color";

describe("Color", () => {
  it("should have a WHITE and BLACK value", () => {
    expect(Color.WHITE).toBe("white");
    expect(Color.BLACK).toBe("black");
  });
});