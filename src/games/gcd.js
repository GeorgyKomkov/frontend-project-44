#!/usr/bin/env node
import { getRandomNumber } from '../utils.js';
import run from '../index.js';

const description = 'Find the greatest common divisor of given numbers';

const gcd = (number1, number2) => (number2 === 0 ? number1 : gcd(number2,number1 % number2));

const generateRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = gcd(number1, number2).toString();
  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};
