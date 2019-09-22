describe('Simple Calculator', () => {
  const calculator = {};
  beforeEach(() => {
    this.calculator = new Calculator();
    this.calculator.total = 5;
  });
  xit('Greet', () => {
    expect(true).toBe(true);
  });
  it('should add numbers to total', () => {
    let result = this.calculator.add(2);
    expect(result).toBe(7);
  });
  it('should subtract numbers from total', () => {
    let result = this.calculator.subtract(2);
    expect(result).toBe(3);
  });
  it('should multilply total by number', () => {
    let result = this.calculator.multiply(2);
    expect(result).toBe(10);
  });
  it('should divide total by number', () => {
    let result = this.calculator.divide(2);
    expect(result).toBe(2.5);
  });
});
