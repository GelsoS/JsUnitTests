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

  Escreva pelo menos cinco testes para essa função no arquivo tests/productDetails.js para garantir que a implementação de productDetails está correta.
*/

const productDetails = (firstProduct, secondProduct) => [
  {
    name: firstProduct,
    details: {
      productId: `${firstProduct}123`,
    },
  },
  {
    name: secondProduct,
    details: {
      productId: `${secondProduct}123`,
    },
  },
];
// productDetails('Alcool gel', 'Máscara');

// let a = (productDetails('Alcool gel', 'Máscara')[0].productId);
// let b = (productDetails('Alcool gel', 'Máscara')[1]);
// console.log(JSON.stringify(a) === JSON.stringify(b));
let resultado = [];
for (let index = 10; index < 13; index += 1) {
  resultado.push(productDetails('Alcool gel', 'Máscara')[0].details.productId[index]);
}
let resultado1 = [];
for (let index = 7; index < 10; index += 1) {
  resultado1.push(productDetails('Alcool gel', 'Máscara')[1].details.productId[index]);
}
console.log(resultado, resultado1);
// console.log(productDetails('Alcool gel', 'Máscara')[0].details.productId.length -10);

// console.log(a);
module.exports = productDetails;
