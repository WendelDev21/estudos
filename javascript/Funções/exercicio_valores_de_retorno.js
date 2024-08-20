/*
Exercício: Verificar Ano Bissexto

Objetivo: Escrever uma função em JavaScript que
determine se um ano é bissexto. A função deve receber um
ano como parâmetro e retornar true se for um ano
bissexto e false caso contrário.

Critérios para um Ano Bissexto:

O ano é bissexto se for divisível por 4.
Mas, se o ano for divisível por 100, ele não é bissexto
a menos que também seja divisível por 400.
*/

// Passo 1: Definir a função
function eBissexto(ano) {
    
    // Passo 2: Implementar a lógica do ano bissexto
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
      return true; // O ano é bissexto
    } else {
      return false; // O ano não é bissexto
    }
}

  // Passo 4: Testar a função
  console.log(eBissexto(2020)); // Saída esperada: true
  console.log(eBissexto(2100)); // Saída esperada: false
  console.log(eBissexto(2000)); // Saída esperada: true
  console.log(eBissexto(2024)); // Saída esperada: true
  console.log(eBissexto(2019)); // Saída esperada: false