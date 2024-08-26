/*
Exercício: Encontrar o Máximo em um Array usando Recursão

Descrição do Exercício

Seu objetivo é implementar uma função recursiva em
JavaScript que encontre o valor máximo em um array
de números. Este exercício ajudará a compreender como
dividir um problema em subproblemas mais simples
usando a abordagem recursiva.

Requisitos

- A função deve aceitar um array de números como argumento.
- A função deve retornar o valor máximo encontrado no array.
- Não utilize métodos de array embutidos no
JavaScript (como Math.max ou .reduce) para encontrar o máximo.

- Implemente a função de forma recursiva.


*/

function encontrarMaxima(array, indice = 0, maxAtual = -Infinity) {
    if(indice === array.length) return maxAtual;
    maxAtual = array[indice] > maxAtual ? array[indice] : maxAtual;
    return encontrarMaxima(array, indice + 1, maxAtual);
}

console.log(encontrarMaxima([1, 5, 3, 9, 2]))
console.log(encontrarMaxima([-1, -5, -3, -2]))
