#!/usr/bin/env node
import { getRandomNumber } from '../utils.js';
import run from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = (number) => {
  const limit = Math.sqrt(number);
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= limit; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const number = getRandomNumber(0, 100);
  const question = number.toString();
  const correctAnswer = prime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};
