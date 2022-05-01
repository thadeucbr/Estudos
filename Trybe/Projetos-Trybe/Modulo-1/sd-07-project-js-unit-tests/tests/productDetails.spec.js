const { strictEqual } = require('assert');
/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
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

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // Teste que o retorno da função é um array.
    firstInput = productDetails('Alcool gel', 'Máscara');
    input = typeof firstInput;
    assert.strictEqual(input, 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    input = Object.keys(firstInput).length;
    assert.strictEqual(input,2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    input = typeof Object.keys(firstInput);
    assert.strictEqual(input,'object');
    // Teste que os dois objetos são diferentes entre si.
    input = Object.is(firstInput,firstInput);
    assert.strictEqual(input, true);
    // (Difícil) Teste que os dois productIds terminam com 123.
    let string = JSON.stringify(firstInput);
    string = string.replace(/\D/g,'');
    input = string.endsWith('123123');
    console.log(string);
    assert.strictEqual(input, true);
  });
});
