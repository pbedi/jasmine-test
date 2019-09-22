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
  it('Objects can only be compared with toEqual or not toBe', () => {
    const calculator1 = new Calculator();
    const calculator2 = new Calculator();
    // either not toBe
    expect(calculator1).not.toBe(calculator2);
    // or toEqual
    expect(calculator1).toEqual(calculator2);
  });
  it('can be instantiated', () => {
    const calculator1 = new Calculator();
    const calculator2 = new Calculator();

    expect(calculator1).toBeTruthy();
    expect(calculator2).toBeTruthy();
    expect(calculator1).toEqual(calculator2);
  });

  it('toBeDefined and not toBeDefined', () => {
    const calculator1 = new Calculator();

    expect(calculator1).toBeDefined();
    expect(calculator1.add).not.toBeUndefined();
    expect(calculator1.divide).not.toBeUndefined();
    expect(calculator1.subtract).toBeDefined();
    expect(calculator1.multiply).toBeDefined();
  });
  it('to test a null value with toBeNull', () => {
    calculator.total = null;

    expect(calculator.total).toBeNull();
  });

  it('test toContain', () => {
    let myString = 'I love Jasmine';
    let consName = 'Calculator';
    expect(myString).toContain('Jasm');
    expect(consName).toContain('Calc');
    expect(calculator.constructor.name).not.toContain('Canst');
  });

  it('does not handle NaN', () => {
    let result = this.calculator.multiply('a');

    expect(result).toBeNaN();
  });

  it('handles divide by zero', () => {
    expect(() => {
      this.calculator.divide(0);
    }).toThrow();
    // specific type
    expect(() => {
      this.calculator.divide(0);
    }).toThrowError(Error);
    // Type and message
    expect(() => {
      this.calculator.divide(0);
    }).toThrowError(Error, 'Cannot divide by zero!');
  });

  it('toMatch matcher RegEx etc', () => {
    const regex = /-?\d+/;
    this.calculator.total = 50;

    expect(this.calculator.total).toMatch(regex);
    expect(-50).toMatch(regex);
    expect(typeof this.calculator.total).toMatch('number');
  });
  it('jasmine anything matcher', () => {
    let result = this.calculator.add(70);
    expect(result).toBe(75);
    expect(result).toEqual(jasmine.anything());
    expect(() => {}).toEqual(jasmine.anything()); //function
  });

  it('can be instantiated custom matchers', () => {
    jasmine.addMatchers(customMatchers);
    expect(this.calculator).toBeCalculator();
    expect(2).not.toBeCalculator();
  });
  it('third party matchers', () => {
    expect(this.calculator.total).toBeNumber();
  });
});
