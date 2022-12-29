import { game } from "./oddEvenPrime";

describe('Odd Even Prime code kata', () => {
  test('should return the word Odd if the number is odd', () => {
    // ARRANGE
    const numbers=[9,15,21];
    const expectResult =['Odd','Odd','Odd']
    //ACT
    const result = numbers.map((num)=> game(num))
    //ASSERT
    expect(result).toEqual(expectResult);
  });

  test('should return the word Even if the number is even', () => {
    // ARRANGE
    const numbers=[2,4,6];
    const expectResult =['Even','Even','Even']
    //ACT
    const result = numbers.map((num)=> game(num))
    //ASSERT
    expect(result).toEqual(expectResult);
  });

  test('should return the word Prime if the number is prime', () => {
    // ARRANGE
    const numbers=[3,5,7];
    const expectResult =['Prime','Prime','Prime']
    //ACT
    const result = numbers.map((num)=> game(num))
    //ASSERT
    expect(result).toEqual(expectResult);
  });
});
