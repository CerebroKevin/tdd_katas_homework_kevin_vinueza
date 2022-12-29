import { game, isPrime } from "./fizzBuzzWhizz";

describe('FizzBuzz Game', () => {
  test('should return the same number as string', () => {
    // ARRANGE
    const numbers=[1,4,8];
    const expectResult =['1','4','8']
    //ACT
    const result = numbers.map((num)=> game(num))
    //ASSERT
    expect(result).toEqual(expectResult);
  });


  test('should return FIZZ when is multiple of 3', () => {
    // ARRANGE
    const numbers=[6,9,12];
    const expectResult =['FIZZ','FIZZ', 'FIZZ']
    //ACT
    const result = numbers.map((num)=> game(num))
    //ASSERT
    expect(result).toEqual(expectResult);
  });

  test('should return BUZZ when is multiple of 5', () => {
    // ARRANGE
    const numbers=[10,20,25];
    const expectResult =['BUZZ','BUZZ', 'BUZZ']
    //ACT
    const result = numbers.map((num)=> game(num))
    //ASSERT
    expect(result).toEqual(expectResult);
  });

  test('should return BUZZ when is multiple of 3 and 5', () => {
    // ARRANGE
    const numbers=[15,30,45];
    const expectResult =['FIZZBUZZ','FIZZBUZZ', 'FIZZBUZZ']
    //ACT
    const result = numbers.map((num)=> game(num))
    //ASSERT
    expect(result).toEqual(expectResult);
  });

  test('should return WHIZZ when number is prime', () => {
    // ARRANGE
    const numbers=[3,5,7,11];
    const expectResult =['WHIZZ','WHIZZ', 'WHIZZ','WHIZZ']
    //ACT
    const result = numbers.map((num)=> game(num))
    //ASSERT
    expect(result).toEqual(expectResult);
  });
});





