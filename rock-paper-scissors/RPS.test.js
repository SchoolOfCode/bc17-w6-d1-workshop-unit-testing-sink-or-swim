import {test, expect} from 'vitest';
import {calculateRoundResult,DRAW, PAPER, ROCK, WIN, SCISSORS, LOSE} from './app.js';


test('calculateRoundResult', () => {
    expect(calculateRoundResult(ROCK, SCISSORS)).toEqual({
      outcome: WIN,
      message: "Player chose rock and computer chose scissors. Player wins."
    });
    // Add more test cases for different combinations
  });

  test('calculateRoundResult', () => {
    expect(calculateRoundResult(ROCK, PAPER)).toEqual({
      outcome: LOSE,
      message: "Player chose rock and computer chose paper. Computer wins."
    });
  });

  test('calculateRoundResult', () => {
    expect(calculateRoundResult(ROCK, ROCK)).toEqual({
      outcome: DRAW,
      message: "Player chose rock and computer chose rock. It's a draw."
    });
  });

  test('calculateRoundResult', () => {
    expect(calculateRoundResult(PAPER, SCISSORS)).toEqual({
      outcome: LOSE,
      message: "Player chose paper and computer chose scissors. Computer wins."
    });
  });

    test('calculateRoundResult', () => {
    expect(calculateRoundResult(PAPER, PAPER)).toEqual({
      outcome: DRAW,
      message: "Player chose paper and computer chose paper. It's a draw."
    });
  });

  test('calculateRoundResult', () => {
    expect(calculateRoundResult(SCISSORS, PAPER)).toEqual({
      outcome: WIN,
      message: "Player chose scissors and computer chose paper. Player wins."
    });
  });

  test('calculateRoundResult', () => {
    expect(calculateRoundResult(PAPER,ROCK)).toEqual({
      outcome: WIN,
      message: "Player chose paper and computer chose rock . Player wins."
    });
  });

  test('calculateRoundResult', () => {
    expect(calculateRoundResult(SCISSORS, ROCK)).toEqual({
      outcome: LOSE,
      message: "Player chose scissors and computer chose rock. Computer wins."
    });
  });

  test('calculateRoundResult', () => {
    expect(calculateRoundResult(SCISSORS, SCISSORS)).toEqual({
      outcome: DRAW,
      message: "Player chose scissors and computer chose scissors. It's a draw."
    });
  });
  

test('calculateRoundResult throws error for invalid player move', () => {
  expect(() => calculateRoundResult(null, ROCK)).toThrow('Invalid player move (null) or computer move rock')
})

test('calculateRoundResult throws error for invalid computer move', () => {
  expect(() => calculateRoundResult(PAPER, undefined)).toThrow('Invalid player move (paper) or computer move undefined')
})

test('calculateRoundResult throws error for both invalid moves', () => {
  expect(() => calculateRoundResult(null, undefined)).toThrow('Invalid player move (null) or computer move undefined')
})

test('calculateRoundResult throws error for empty string moves', () => {
  expect(() => calculateRoundResult('', '')).toThrow('Invalid player move () or computer move ')
})

test('calculateRoundResult throws error for non-existent moves', () => {
  expect(() => calculateRoundResult('INVALID', 'MOVE')).toThrow('Invalid player move (INVALID) or computer move MOVE')
})
