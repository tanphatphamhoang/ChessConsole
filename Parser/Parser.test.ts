import Parser from './Parser';

describe('Parser', () => {
  test('should be a standardized move for pawn', () => {
    const parser = Parser.getInstance();
    expect(parser.checkIfInputIsStandardized("a1")).toBe(true);
  });

  test('should be a standardized move for KQBNR', () => {
    const parser = Parser.getInstance();
    expect(parser.checkIfInputIsStandardized("Kbb1")).toBe(true);
    expect(parser.checkIfInputIsStandardized("Qbb1")).toBe(true);
    expect(parser.checkIfInputIsStandardized("Bbb1")).toBe(true);
    expect(parser.checkIfInputIsStandardized("Nbb1")).toBe(true);
    expect(parser.checkIfInputIsStandardized("Rbb1")).toBe(true);
  });

  test('should not be a standardized move', () => {
    const parser = Parser.getInstance();
    expect(parser.checkIfInputIsStandardized("")).toBe(false);
    expect(parser.checkIfInputIsStandardized("a")).toBe(false);
    expect(parser.checkIfInputIsStandardized("ab1")).toBe(false);
    expect(parser.checkIfInputIsStandardized("Kb1")).toBe(false);
    expect(parser.checkIfInputIsStandardized("kbb1")).toBe(false);
  });
});