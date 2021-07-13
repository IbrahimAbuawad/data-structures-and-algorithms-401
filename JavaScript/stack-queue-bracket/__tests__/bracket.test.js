let bracketValidation = require('../bracket');

describe('MULTI BRACKET TESTS', () => {
  it('should equal true', () => {
    expect(bracketValidation('()[[Extra Characters]]')).toBeTruthy();
    expect(bracketValidation('{}')).toBeTruthy();
    expect(bracketValidation('{([])}')).toBeTruthy();
    expect(bracketValidation('{}{Code}[Fellows](())')).toBeTruthy();
  });

  it('should be falsey', () => {
    expect(bracketValidation('[({}]')).toBeFalsy();
    expect(bracketValidation('(](')).toBeFalsy();
    expect(bracketValidation('{(})')).toBeFalsy();
  });

  it('should be falsey', () => {
    expect(bracketValidation(1234)).toBeFalsy();
    expect(bracketValidation(true)).toBeFalsy();
    expect(bracketValidation([])).toBeFalsy();
  });

});