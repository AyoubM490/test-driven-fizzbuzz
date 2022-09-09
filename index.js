module.exports = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  }
  return `${num}`;
};
