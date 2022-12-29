import { game,gameResult,gameWord } from "./rockPaperScissors";

describe('RockPaperScissors game', () => {
  test('Draw if rock rock', () => {
    //ARRANGRE
    //
    const playerOne = gameWord.rock;
    const playerTwo = gameWord.rock;
    const exprectResult=gameResult.draw
    //ACT
    const result = game(playerOne,playerTwo);
    expect(result).toBe(exprectResult);
  });

  test('Draw if it is paper paper', () => {
    //ARRANGRE
    //
    const playerOne = gameWord.paper;
    const playerTwo = gameWord.paper;
    const exprectResult=gameResult.draw
    //ACT
    const result = game(playerOne,playerTwo);
    expect(result).toBe(exprectResult);
  });
  test('Draw if it is scissor scissor', () => {
    //ARRANGRE
    //
    const playerOne = gameWord.scissors;
    const playerTwo = gameWord.scissors;
    const exprectResult=gameResult.draw
    //ACT
    const result = game(playerOne,playerTwo);
    expect(result).toBe(exprectResult);
  });


  test('Player 1 wins if he chooses paper and player 2 stone', () => {
    //ARRANGRE
    //
    const playerOne = gameWord.paper;
    const playerTwo = gameWord.rock;
    const exprectResult=gameResult.playerOne
    //ACT
    const result = game(playerOne,playerTwo);
    expect(result).toBe(exprectResult);
  });

  test('Player 1 wins if he chooses scissors and player 2 paper', () => {
    //ARRANGRE
    //
    const playerOne = gameWord.scissors;
    const playerTwo = gameWord.paper;
    const exprectResult=gameResult.playerOne
    //ACT
    const result = game(playerOne,playerTwo);
    expect(result).toBe(exprectResult);
  });

  test('Player 1 wins if he chooses rock and player 2 scissors', () => {
    //ARRANGRE
    //
    const playerOne = gameWord.rock;
    const playerTwo = gameWord.scissors;
    const exprectResult=gameResult.playerOne
    //ACT
    const result = game(playerOne,playerTwo);
    expect(result).toBe(exprectResult);
  });
  



  test('Player 2 wins if he chooses paper and player 1 stone', () => {
    //ARRANGRE
    //
    const playerTwo = gameWord.paper;
    const playerOne = gameWord.rock;
    const exprectResult=gameResult.playerTwo
    //ACT
    const result = game(playerOne,playerTwo);
    expect(result).toBe(exprectResult);
  });

  test('Player 2 wins if he chooses scissors and player 1 paper', () => {
    //ARRANGRE
    //
    const playerTwo = gameWord.scissors;
    const playerOne = gameWord.paper;
    const exprectResult=gameResult.playerTwo
    //ACT
    const result = game(playerOne,playerTwo);
    expect(result).toBe(exprectResult);
  });

  test('Player 2 wins if he chooses rock and player 1 chooses scissors', () => {
    //ARRANGRE
    //
    const playerTwo = gameWord.rock;
    const playerOne = gameWord.scissors;
    const exprectResult=gameResult.playerTwo
    //ACT
    const result = game(playerOne,playerTwo);
    expect(result).toBe(exprectResult);
  });
  

});
