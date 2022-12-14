#!/usr/bin/env node
import { getRandomNumber, getRandomIndex } from '../randomValues.js';
import run from '../index.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const calculate = (num1, num2, operator) => {
  if (operator === '+') return num1 + num2;
  if (operator === '-') return num1 - num2;
  if (operator === '*') return num1 * num2;
  return 'Error';
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
