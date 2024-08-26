/*
A recursão é uma técnica de programação onde uma função se
chama a si mesma para resolver um problema. Uma função
recursiva deve ter uma condição de parada para evitar
que se chame infinitamente. Um dos exemplos clássicos de
recursão é o cálculo do fatorial de um número.


Exemplo de Função Recursiva: Cálculo do Fatorial
Vamos implementar uma função recursiva em JavaScript para calcular o fatorial de um número.

*/

// Define a função `fatorial` que calcula o fatorial de um número `n`.
// O fatorial de um número n é o produto de todos os números inteiros positivos menores ou iguais a n.
function fatorial(n) {

    // A função inicia verificando se o valor de `n` é igual a 0. Essa é a condição de parada da recursão.
    // O fatorial de 0 é definido matematicamente como 1.
    // Sem esta condição de parada, a função chamaria a si mesma infinitamente,
    // levando a um "stack overflow" (estouro de pilha).
    if (n === 0) {
      return 1; // Retorna 1 diretamente quando `n` é 0.
    }

    // Se `n` não é 0, a função prossegue para uma chamada recursiva.
    // Aqui, `fatorial(n - 1)` chama a função `fatorial` novamente, passando `n - 1` como argumento.
    // Essa chamada recursiva continua até que o argumento da função seja 0, ponto em que a recursão
    // começa a retornar.
    // O produto dessas chamadas recursivas acumula o resultado do fatorial.
    return n * fatorial(n - 1);
    
}

  // Testando a função com diferentes valores para verificar a corretude do algoritmo.
  console.log(fatorial(5)); // Deve imprimir 120, pois 5! = 5 x 4 x 3 x 2 x 1 = 120.
  console.log(fatorial(0)); // Deve imprimir 1, conforme a definição matemática de 0! = 1.
  console.log(fatorial(3)); // Deve imprimir 6, pois 3! = 3 x 2 x 1 = 6.


/*
Explicação do Código
Condição de Parada: A função fatorial verifica se n é
igual a 0. Se for, retorna 1, pois o fatorial de 0 é definido
como 1. Esta é a condição de parada que evita chamadas recursivas infinitas.

Chamada Recursiva: Se n não for 0, a função se chama
recursivamente com o argumento n - 1. Isso significa que
a função continua a se chamar com números cada vez menores
até atingir a condição de parada.

Cálculo do Fatorial: A expressão n * fatorial(n - 1) realiza
o cálculo do fatorial multiplicando n pelo fatorial de n - 1,
que é determinado pela chamada recursiva da função.


*/