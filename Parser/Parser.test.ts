import Parser from './Parser';

describe('Parser checkIfInputIsStandardized', () => {
  test('should pass standardized moves', () => {
    const parser = Parser.getInstance();
    expect(parser.checkIfInputIsStandardized("a1a2")).toBe(true);
    expect(parser.checkIfInputIsStandardized("b2c3")).toBe(true);
    expect(parser.checkIfInputIsStandardized("a1h8")).toBe(true);

  });

  test('should not pass non-standardized moves', () => {
    const parser = Parser.getInstance();
    expect(parser.checkIfInputIsStandardized("")).toBe(false);
    expect(parser.checkIfInputIsStandardized("a1aa")).toBe(false);
    expect(parser.checkIfInputIsStandardized("a1a1")).toBe(false);
  });
});