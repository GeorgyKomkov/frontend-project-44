#!/usr/bin/env node
import { getRandomNumber, getRandomIndex } from '../randomValues.js';

import run from '../index.js';

const description = 'What number is missing in the progression?';
const getProgtession = (length, startProg, stepProg) => {
  const progression = [];
  for (let i = startProg; progression.length < length; i += stepProg) {
    progression.push(i);
  }
  return progression;
};

const generateRound = () => {
  const length = getRandomNumber(5, 15);
  const startProg = getRandomNumber(1, 100);
  const stepProg = getRandomNumber(1, 10);
  const progression = getProgtession(length, startProg, stepProg);
  const indexHiddenNumber = getRandomIndex(progression);
  const correctAnswer = progression[indexHiddenNumber].toString();
  progression[indexHiddenNumber] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};
