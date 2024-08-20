/*
Exercício: Cálculo da Média de Idades com Arrow Functions

Objetivo: Escrever uma arrow function em JavaScript que
calcule a média das idades das pessoas contidas em um array
de objetos. Cada objeto representará uma pessoa e conterá pelo
menos duas propriedades: nome e idade.
*/


// Exemplo de Dados Iniciais:
// Declaração de um array 'pessoas' contendo objetos. Cada objeto representa uma
// pessoa e possui duas propriedades: 'nome' e 'idade'.
// 'nome' é uma string que armazena o nome da pessoa, e 'idade' é um número que armazena a idade da pessoa.
const pessoas = [
    { nome: "Alice", idade: 25 },
    { nome: "Bob", idade: 30 },
    { nome: "Carlos", idade: 22 }
];

// Declaração da função 'calcularMediaIdades' utilizando sintaxe de arrow function.
// Esta função recebe um parâmetro chamado 'pessoas', que é esperado ser um array
// de objetos, onde cada objeto representa uma pessoa.
const calcularMediaIdades = (pessoas) => {

    // Utilização do método 'reduce' para acumular a soma das idades de todas as pessoas no array 'pessoas'.
    // O método 'reduce' itera sobre cada elemento do array (cada objeto pessoa) e executa a
    // função callback fornecida.
    // A função callback recebe dois parâmetros: 'soma', que é o acumulador, e 'pessoa', que é
    // o elemento atual sendo iterado.
    // Inicializa o acumulador 'soma' com 0.
    // A cada iteração, a idade da pessoa atual ('pessoa.idade') é adicionada ao acumulador 'soma'.
    const somaIdades = pessoas.reduce((soma, pessoa) => soma + pessoa.idade, 0);

    // Calcula a média de idades dividindo a 'somaIdades' pelo número de pessoas no array ('pessoas.length').
    // Retorna o valor calculado da média de idades.
    return somaIdades / pessoas.length;

};

// Chamada da função 'calcularMediaIdades', passando o array 'pessoas' como argumento.
// O resultado (a média das idades) é armazenado na constante 'mediaIdades'.
const mediaIdades = calcularMediaIdades(pessoas);

// Utilização de 'console.log' para exibir a média das idades no console.
// A função 'toFixed(2)' é chamada no resultado para formatar a saída como uma string representando
// o número com duas casas decimais.
// Isto é útil para garantir que a média seja apresentada de forma legível, como "25.67" ao invés
// de um número com muitas casas decimais.
console.log(`A média das idades é: ${mediaIdades.toFixed(2)}.`); // Exemplo de saída: A média das idades é: 25.67.
