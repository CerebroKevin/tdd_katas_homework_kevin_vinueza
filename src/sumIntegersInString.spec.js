import { sumOfIntegersInString } from "./sumIntegersInString";

describe('Sum Integers in String code kata', () => {
  
  test('should add the integers inside a string', () => {
    // ARRANGE
    const strings=['Hola123Mucho12Gusto100','Mi128Nombre64Es25Kevin589','Estudio458En45La89UTN12'];
    const expectResult =[235,806,604]
    //ACT
    const result = strings.map((strin)=> sumOfIntegersInString(strin))
    //ASSERT
    expect(result).toEqual(expectResult);
  });
});
