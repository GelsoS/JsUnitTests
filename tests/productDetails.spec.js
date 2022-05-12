const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => { 
  let resultado = [];
for (let index = 10; index < 13; index += 1) {
  resultado.push(productDetails('Alcool gel', 'Máscara')[0].details.productId[index]);
}
let resultado1 = [];
for (let index = 7; index < 10; index += 1) {
  resultado1.push(productDetails('Alcool gel', 'Máscara')[1].details.productId[index]);
}
const resul = JSON.stringify (resultado) === JSON.stringify (resultado1);
// console.log(resultado, resultado1);
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toEqual('function');

    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBe(true);

    // Teste se o array retornado pela função contém dois itens dentro. 
    expect((productDetails('Alcool gel', 'Máscara').length)).toBe(2) 
    
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails('Alcool gel', 'Máscara')).toEqual('object');

    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(JSON.stringify(productDetails('Alcool gel', 'Máscara')[0])===JSON.stringify(productDetails('Alcool gel', 'Máscara')[1])).toEqual(false);

    // Teste se os dois productIds terminam com 123.
    expect(resul).toBe(true);

  });
});
