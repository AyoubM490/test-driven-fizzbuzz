// greeting.test.js

const greeting = (guest) => `Hello, ${guest}!`;

describe('greeting', () => {
  it('says hello', () => {
    expect(greeting('John')).toBe('Hello, John!');
  });
});
