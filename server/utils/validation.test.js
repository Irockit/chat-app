const expect = require("expect");

const { isRealString } = require('./validation');

describe('isRealString', () => {
  it('should reject non string values', () => {
    expect(isRealString(33)).toBeFalsy();
  })
  it('should reject strings with only spaces', () => {
    expect(isRealString('   ')).toBeFalsy();
  })
  it('should should alow string with non-space characters', () => {
    expect(isRealString('  jaime le poulet ')).toBeTruthy();
  })
});