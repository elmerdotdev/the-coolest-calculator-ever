function add(...nums) {
  const sum = nums.reduce((total, curr) => total + curr, 0)
  return sum
}

function subtract(num1, num2) {
  return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function divide(num1, num2) {
  return num1 / num2
}

module.exports = {
  add,
  subtract,
  multiply,
  divide
}