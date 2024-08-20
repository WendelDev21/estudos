/*
Arrow functions são uma forma mais concisa de
escrever funções em JavaScript, introduzidas no
ECMAScript 6. Elas são especialmente úteis para funções
anônimas e apresentam uma sintaxe mais curta. 

Um ponto importante sobre as arrow functions é que
elas não possuem seu próprio this, arguments, super
ou new.target, o que as torna uma ótima escolha para funções
que não dependem do contexto de execução.

Exemplo de Arrow Function: Multiplicação de Dois Números

Vamos criar uma arrow function que recebe dois números
como argumentos e retorna o produto deles.
*/

// Arrow function para multiplicar dois números
const multiplicar = (num1, num2) => num1 * num2;

// Chamada da arrow function com os argumentos 5 e 3
let resultado = multiplicar(5, 3);

// Exibe o resultado no console
console.log(resultado); // Saída esperada: 15

// -------------------------------------------------

/*
Vamos criar outro exemplo utilizando arrow functions,
desta vez para filtrar números ímpares de um array. 

Este exemplo demonstrará como arrow functions podem ser
usadas de forma concisa com métodos de array, especificamente
o método .filter(), que seleciona elementos de um array que
satisfazem uma condição especificada na função de callback.

Exemplo de Arrow Function: Filtrar Números Ímpares de um Array
*/

// Array de números para filtragem
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Arrow function usada com .filter() para filtrar números ímpares
const impares = numeros.filter(numero => numero % 2 !== 0);

// Exibe o array de números ímpares no console
console.log(impares); // Saída esperada: [1, 3, 5, 7, 9]

// --------------------------------------------------------

/*
Vamos criar mais um exemplo utilizando arrow functions,\
desta vez para transformar um array de strings, convertendo
todas as strings para maiúsculas. Este exemplo ilustra o uso
de arrow functions com o método .map(), que aplica uma função a
cada elemento de um array e retorna um novo array contendo os resultados.

Exemplo de Arrow Function: Converter Strings para Maiúsculas
*/

// Array de strings
const frutas = ["maçã", "banana", "cereja", "damasco"];

// Arrow function usada com .map() para converter cada string para maiúscula
const frutasMaiusculas = frutas.map(fruta => fruta.toUpperCase());

// Exibe o novo array de strings em maiúsculas
console.log(frutasMaiusculas); // Saída esperada: ["MAÇÃ", "BANANA", "CEREJA", "DAMASCO"]