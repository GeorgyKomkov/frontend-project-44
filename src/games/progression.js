#!/usr/bin/env node
import { getRandomNumber, getRandomIndex } from '../utils.js';
import run from '../index.js';

const description = 'What number is missing in the progression?',
  minLength = 5,
  maxLength = 15,
  minRange = 1,
  maxRange = 100,
  minStep = 1,
  maxStep = 10;

const getProgression = (length, start, step) => {
  const progression = [];
  for (let i = start; progression.length < length; i += step) {
    progression.push(i);
  }
  return progression;
};

const generateRound = () => {
  const length = getRandomNumber(minLength, maxLength);
  const start = getRandomNumber(minRange, maxRange);
  const step = getRandomNumber(minStep, maxStep);
  const progression = getProgression(length, start, step);
  const indexHiddenNumber = getRandomIndex(progression);
  const correctAnswer = progression[indexHiddenNumber].toString();
  progression[indexHiddenNumber] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};
