// Exemplo de Declaração de Função:

/*
Este exemplo demonstrará como definir uma função que
calcula a soma de dois números e, em seguida, como chamar
essa função para obter o resultado.
*/

// Declaração da função 'somar'
function somar(a, b) {
    return a + b;
}

  // Chamada da função 'somar' com os argumentos 5 e 3
let resultado = somar(5, 3);

  // Exibe o resultado no console
  console.log(resultado); // Saída esperada: 8


  // -------------------------------------------------





/*
Vamos criar um exemplo de uma função que verifica se um número é par ou ímpar.
Esta função receberá um número como parâmetro e retornará uma string dizendo
se o número é "Par" ou "Ímpar".
  */

// Declaração da função 'verificarParOuImpar'
function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return 'Par';
    } else {
        return 'Ímpar';
    }
}

  // Chamada da função 'verificarParOuImpar' com o argumento 4
let resultado1 = verificarParOuImpar(4);

  // Chamada da função 'verificarParOuImpar' com o argumento 7
let resultado2 = verificarParOuImpar(7);

  // Exibe os resultados no console
  console.log(`O número 4 é ${resultado1}.`); // Saída esperada: O número 4 é Par.
  console.log(`O número 7 é ${resultado2}.`); // Saída esperada: O número 7 é Ímpar.


  // -----------------------------------------------------------


/* 
    Função que recebe um nome e retorna uma saudação.
  */

 // Declaração da função 'saudar'
function saudar(nome) {
    return 'Olá, ' + nome + '! Seja bem-vinda!';
}

  // Chamada da função 'saudar' com o argumento 'Alice'
let mensagem = saudar('Alice');

  // Exibe a mensagem no console
  console.log(mensagem); // Saída esperada: Olá, Alice! Seja bem-vindo(a)!