#!/usr/bin/env node
import { getRandomNumber, getRandomIndex } from '../utils.js';
import run from '../index.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const calculate = (number1, number2, operator) => {
  // if (operator === '+') return number1 + number2;
  // if (operator === '-') return number1 - number2;
  // if (operator === '*') return number1 * number2;
  // return 'Error';
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`There is no such operator '${operator}'!`);
  }
};
const generateRound = () => {
  const number1 = getRandomNumber(0, 10);
  const number2 = getRandomNumber(0, 10);
  const operator = operators[getRandomIndex(operators)];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculate(number1, number2, operator).toString();
  return [question, correctAnswer];
};
export default () => {
  run(description, generateRound);
};
