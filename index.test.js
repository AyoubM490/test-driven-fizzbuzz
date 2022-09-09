// index.test.js

const fizzbuzz = require('./index');

describe('fizzbuzz()', () => {
  it("returns 'FizzBuzz' for multiples of 3 and 5", () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
    expect(fizzbuzz(30)).toBe('FizzBuzz');
  });

  it('returns the given number for multiples of neither 3 nor 5', () => {
    expect(fizzbuzz(1)).toBe('1');
    expect(fizzbuzz(22)).toBe('22');
  });

  it("returns 'Fizz' for multiples of 3", () => {
    expect(fizzbuzz(3)).toBe('Fizz');
    expect(fizzbuzz(6)).toBe('Fizz');
  });

  it("returns 'Buzz' for multiples of 5", () => {
    expect(fizzbuzz(5)).toBe('Buzz');
    expect(fizzbuzz(10)).toBe('Buzz');
  });
});
