const createMenu = require('../src/restaurant');
 
/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante através do qual será possível
  cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto que permite:

  - Ler o menu cadastrado;
  - Fazer pedidos;
  - Verificar o que foi pedido;
  - Somar o valor da conta.

  A estrutura deste código e deste objeto já está definida e você precisa implementá-la.
  Abaixo você verá uma série de testes e passos que irão guiar você e, que devem NECESSARIAMENTE ser realizados em ordem para o bom desenvolvimento do sistema.

  Desenvolvimento:
  - Uma função: 
    createMenu()
  - Recebe um parâmetro que é um objeto, o menu:
    Exemplo: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.

  A função createMenu() então, retornará um novo objeto. Este novo objeto contém algumas chaves e ao acessar cada uma delas temos os seguintes retornos:

  - Uma chave `fetchMenu` retornando o menu, que nada mais é que o objeto passado como parâmetro para createMenu()

    Exemplo:
    const meuRestaurante = createMenu({
      food: {'coxinha': 3.90, 'sanduiche', 9.90},
      drinks: {'agua': 3.90, 'cerveja': 6.90}
    });

    meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` armazenando um array de strings. Cada string é a chave de um pedido.
    Exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` armazenando uma função. Essa função recebe uma string como parâmetro e essa string deve ser adicionada à lista armazenada em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função. Essa função faz a soma do preço de todos os pedidos, retornando essa soma de preços com acréscimo de 10%.

  Comportamento:
    const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} })

    meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

    meuRestaurante.order('coxinha') // Retorno: undefined

    meuRestaurante.consumption // Retorno: ['coxinha']

    meuRestaurante.pay() // Retorno: 4.29

  IMPORTANTE: FAÇA OS TESTES E PASSOS DE ACORDO COM A SEQUÊNCIA INDICADA NO README DO PROJETO!

*/
describe('Restaurant Order System', () => {
  let meuRestaurante;

  beforeEach(() => {
    meuRestaurante = createMenu({
      food: { 'coxinha': 3.90, 'sanduiche': 9.90 },
      drinks: { 'agua': 3.90, 'cerveja': 6.90 }
    });
  });

  test('fetchMenu should return the menu', () => {
    expect(meuRestaurante.fetchMenu()).toEqual({
      food: { 'coxinha': 3.90, 'sanduiche': 9.90 },
      drinks: { 'agua': 3.90, 'cerveja': 6.90 }
    });
  });

  test('initial consumption should be an empty array', () => {
    expect(meuRestaurante.consumption).toEqual([]);
  });

  test('order should add item to consumption', () => {
    meuRestaurante.order('coxinha');
    expect(meuRestaurante.consumption).toContain('coxinha');
  });

  test('order should not add item if not on menu', () => {
    meuRestaurante.order('pizza');
    expect(meuRestaurante.consumption).not.toContain('pizza');
  });

  test('pay should return the total with 10% increase', () => {
    meuRestaurante.order('coxinha');
    meuRestaurante.order('cerveja');
    expect(meuRestaurante.pay()).toBeCloseTo(11.88, 2); // 4.29 is the total with 10% added
  });

  test('pay should handle no consumption', () => {
    expect(meuRestaurante.pay()).toBeCloseTo(0, 2); // Should be 0 if no orders
  });

  test('pay should handle multiple same items', () => {
    meuRestaurante.order('coxinha');
    meuRestaurante.order('coxinha');
    expect(meuRestaurante.pay()).toBeCloseTo(8.58, 2); // 2 x 3.90 + 10% = 8.58
  });
});

