#!/usr/bin/env node
import { getRandomNumber } from "../randomValues.js";
import run from "../index.js";

const description = `Answer "yes" if the number is even, otherwise answer "no".`;
const minNumber = 0;
const maxNumber = 100;

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = getRandomNumber(minNumber, maxNumber);
  const question = number.toString();
  //  let correctAnswer = ''
  // if (isEven(number)){
  //   correctAnswer = `yes`
  // }else {
  //   correctAnswer = `no`
  // }

  const correctAnswer = isEven(number) ? "yes" : "no";

  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};
