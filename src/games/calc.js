#!/usr/bin/env node
import { getRandomNumber, getRandomIndex } from "../randomValues.js";
import run from "../index.js";

const description = "What is the result of the expression?";
const operators = ["+", "-", "*"];
const minRange = 0;
const maxRange = 10;

const calculate = (num1, num2, operator) => {
    if (operator === '+'){
        return num1 + num2
    }else if ( operator === '-'){
        return num1 -num2
    }else if ( operator === '*'){
        return num1 * num2
    }
};

const generateRound = () => {
  const number1 = getRandomNumber(minRange, maxRange);
  const number2 = getRandomNumber(minRange, maxRange);
  const operator = operators[getRandomIndex(operators)];

  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculate(number1, number2, operator).toString();
  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};
