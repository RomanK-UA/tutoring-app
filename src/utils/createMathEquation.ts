export const createMathEquation = (min: number, max: number, operation?: string) => {
  // Only allow "+" and "-" operations
  if (operation && !['+', '-'].includes(operation)) {
    throw new Error(`Invalid operation: ${operation}. Only "+" and "-" are supported.`);
  }

  // Helper: Generate a random number in range
  const getRandomNumber = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  // Helper: Select a random operation if none provided
  const getRandomOperation = (): string =>
    Math.random() < 0.5 ? '+' : '-';

  // Choose or randomize the operation
  const chosenOperation = operation || getRandomOperation();

  let operand1, operand2;

  if (chosenOperation === '+') {
    // For addition: operand1 + operand2 <= max
    operand1 = getRandomNumber(min, max - min);
    operand2 = getRandomNumber(min, max - operand1);
  } else if (chosenOperation === '-') {
    // For subtraction: operand1 - operand2 >= 0 and <= max
    operand1 = getRandomNumber(min, max);
    operand2 = getRandomNumber(min, Math.min(operand1, max));
  }

  // Compute the result
  const operations = {
    '+': (a: number, b: number) => a + b,
    '-': (a: number, b: number) => a - b,
  };
  const result = operations[chosenOperation](operand1, operand2);

  // Return the equation
  return {
    equation: `${operand1} ${chosenOperation} ${operand2}`,
    operand1,
    operand2,
    operator: chosenOperation,
    result,
  };
};
