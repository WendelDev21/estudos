// Define uma lista inicial chamada 'lista' com três elementos do tipo string.
let lista = ['maça', 'banana', 'cereja'];

// Utiliza o método `push` para adicionar o elemento 'laranja' ao final da lista 'lista'.
// O método `push` modifica o array original, adicionando o novo elemento no final.
lista.push('laranja');

// Exibe no console a lista atualizada após a adição de 'laranja'.
console.log('Lista após adicionar laranja:', lista);

// Acessa o elemento no índice 1 do array 'lista' (que é 'banana') e substitui por 'uva'.
// Os índices de array em JavaScript começam em 0, então o índice 1 refere-se ao segundo elemento.
lista[1] = 'uva';

// Exibe no console a lista após a substituição de 'banana' por 'uva'.
console.log('Lista após mudar banana para uva:', lista);


// Utiliza o método `splice` para remover 1 elemento a partir do índice 2 do array 'lista'.
// O índice 2 refere-se ao terceiro elemento, que era 'cereja'.
lista.splice(2, 1);

// Exibe no console a lista após a remoção do elemento 'cereja'.
console.log('Lista após remover cereja:', lista);

// Utiliza a propriedade `length` do array para obter o número de elementos no array 'lista'.
// A propriedade `length` retorna o tamanho total do array.
console.log('Tamanho da lista:', lista.length);


// Utiliza o método `includes` para verificar se o elemento 'maça' está presente no array 'lista'.
// O método `includes` retorna `true` se o elemento estiver presente, caso contrário retorna `false`.
const temMaca = lista.includes('maça');

// Exibe no console se o elemento 'maça' está presente na lista.
console.log('A lista contém maça:', temMaca);



// Utiliza o método `includes` para verificar se o elemento 'banana' está presente no array 'lista'.
// Como o elemento 'banana' foi substituído por 'uva' anteriormente, o retorno esperado é `false`.
const temBanana = lista.includes('banana');

// Exibe no console se o elemento 'banana' ainda está presente na lista.
console.log('A lista contém banana:', temBanana);


/*
Adicionar/Remover Itens em Qualquer Posição
Combinando splice() para inserção e remoção de itens em qualquer posição de um array.
*/

// Inicializa um array chamado 'numeros' com os valores 1, 2, 4, e 5.
let numeros = [1, 2, 4, 5];

// Adiciona o número 3 entre os números 2 e 4 usando o método splice.
// O primeiro argumento '2' indica o índice onde o novo elemento deve ser inserido.
// O segundo argumento '0' indica que nenhum elemento deve ser removido durante a adição.
// O terceiro argumento '3' é o valor que será inserido no array.
numeros.splice(2, 0, 3);

// Exibe no console a lista atualizada com o número 3 adicionado, resultando em [1, 2, 3, 4, 5].
console.log('Números com 3 adicionado:', numeros);


// Remove o número 2 do array utilizando novamente o método splice.
// O primeiro argumento '1' indica o índice do elemento a ser removido (número 2).
// O segundo argumento '1' indica que apenas um elemento será removido.
numeros.splice(1, 1);

// Exibe no console a lista após a remoção do número 2, resultando em [1, 3, 4, 5].
console.log('Números com 2 removido:', numeros);


/*
1. Iterar sobre itens
Você pode usar loops como for, for...of ou métodos de array 
como forEach para iterar sobre todos os itens de um array.
*/

// Declara um array 'frutas' contendo três elementos: 'maça', 'banana', e 'cereja'.
let frutas = ['maça', 'banana', 'cereja'];

// Utiliza o método forEach para percorrer cada elemento do array 'frutas'.
// A função dentro de forEach recebe dois parâmetros: 'item', que é o elemento atual do array,
// e 'index', que é o índice do elemento atual.
// A cada iteração, essa função é chamada, e ela imprime o índice e o item correspondente.
frutas.forEach(function(item, index) {
    console.log(index, item);  // Imprime o índice seguido pelo elemento correspondente.
});


/*
2. Filtrar itens
O método filter() cria um novo array com todos os elementos que 
passam no teste implementado pela função fornecida.
*/

// Inicializa um array 'numeros_2' contendo inteiros de 1 a 6.
let numeros_2 = [1, 2, 3, 4, 5, 6];

// Aplica o método 'filter' para extrair números pares do array 'numeros_2'.
// A função dentro de 'filter' utiliza uma expressão que retorna verdadeiro (true) para números pares.
// 'n % 2 === 0' verifica se o número n é divisível por 2 sem resto, característica de números pares.
let numerosPares = numeros_2.filter(n => n % 2 === 0);

// Exibe no console os números pares extraídos.
console.log('Números pares:', numerosPares);



/*
3. Mapear itens
O método map() cria um novo array com os resultados da chamada de
uma função fornecida em cada elemento do array.
*/

// Declara um array 'numeros_3' contendo os números de 1 a 4.
let numeros_3 = [1, 2, 3, 4];

// Utiliza o método 'map' para calcular o quadrado de cada número no array 'numeros_3'.
// A função passada a 'map' pega cada elemento 'n' e retorna seu quadrado 'n * n'.
let quadrados = numeros_3.map(n => n * n);

// Exibe no console os quadrados dos números.
console.log('Quadrados:', quadrados);


/*
4. Reduzir itens
O método reduce() aplica uma função contra um acumulador e
cada valor do array (da esquerda para a direita) para
reduzi-lo a um único valor.
*/

// Inicializa um array 'numeros_4' contendo os números de 1 a 4.
let numeros_4 = [1, 2, 3, 4];

// Utiliza o método 'reduce' para somar todos os elementos do array 'numeros_4'.
// A função de redução recebe um acumulador 'acc' e o valor atual 'cur',
// somando-os e passando o resultado para a próxima iteração.
// O segundo argumento de 'reduce' (0) inicializa o acumulador com 0.
let soma = numeros_4.reduce((acc, cur) => acc + cur, 0);

// Exibe no console a soma dos valores do array.
console.log('Soma:', soma);


/*
5. Procurar itens
Os métodos find() e findIndex() são usados para procurar no array o primeiro
item que atende a uma condição especificada, retornando o item ou seu índice, respectivamente.
*/

// Declara um array 'numeros_5' com vários números inteiros.
let numeros_5 = [5, 12, 8, 130, 44];

// Utiliza o método 'find' para procurar o primeiro número maior que 10 no array 'numeros_5'.
// A função passada a 'find' retorna verdadeiro para o primeiro número que é maior que 10.
let primeiroMaiorDez = numeros_5.find(n => n > 10);

// Exibe no console o primeiro número encontrado que é maior que 10.
console.log('Primeiro número maior que 10:', primeiroMaiorDez);


/*
6. Ordenar itens
O método sort() organiza os itens de um array de acordo com a condição definida.
*/

// Declara um array 'frutas_2' contendo três tipos de frutas.
let frutas_2 = ['banana', 'maça', 'cereja'];

// Aplica o método 'sort' para ordenar o array 'frutas_2'.
// Sem argumentos, 'sort' ordena os elementos assumindo que são strings em ordem alfabética.
frutas_2.sort();

// Exibe no console as frutas ordenadas alfabeticamente.
console.log('Frutas ordenadas:', frutas_2);


/*
7. Reverter a ordem dos itens
O método reverse() inverte a ordem dos elementos de um array.
*/

// Declara um array 'frutas_3' idêntico ao 'frutas_2' para demonstrar a reversão.
let frutas_3 = ['banana', 'maça', 'cereja'];

// Aplica o método 'reverse' para inverter a ordem dos elementos do array 'frutas_3'.
frutas_3.reverse();

// Exibe no console as frutas em ordem reversa.
console.log('Frutas em ordem reversa:', frutas_3);



/*
8. Concatenar Arrays
Você pode usar o método concat() para unir dois ou mais arrays, criando um novo array.
*/

// Inicializa 'array1' com letras de 'a' a 'c'.
let array1 = ['a', 'b', 'c'];

// Inicializa 'array2' com letras de 'd' a 'f'.
let array2 = ['d', 'e', 'f'];

// Utiliza o método 'concat' para combinar 'array1' e 'array2' em um novo array 'arrayConcatenado'.
// O método 'concat' não altera os arrays originais, mas retorna um novo array que é a união dos dois.
let arrayConcatenado = array1.concat(array2);

// Exibe no console o resultado da concatenação dos arrays.
console.log('Array concatenado:', arrayConcatenado);


/*
9. Verificar se Todos os Elementos Atendem a uma Condição
O método every() testa se todos os elementos do array passam pelo
teste implementado pela função fornecida.
*/

// Define um array 'idades' contendo valores inteiros representando idades.
let idades = [32, 33, 18, 40];

// Aplica o método 'every' para verificar se todas as idades no array 'idades' são de 18 anos ou mais.
// A função passada para 'every' retorna verdadeiro se a condição (idade >= 18) for
// verdadeira para todos os elementos.
let todosAdultos = idades.every(idade => idade >= 18);

// Exibe no console se todos no grupo são adultos, baseado na condição de serem maiores de 18 anos.
console.log('Todos são adultos:', todosAdultos);




/*
10. Verificar se Algum Elemento Atende a uma Condição
O método some() testa se pelo menos um dos elementos no array passa pelo
teste implementado pela função fornecida.
*/

// Define um array 'idade_2' com várias idades, algumas abaixo de 18 anos.
let idade_2 = [16, 21, 14, 18];

// Utiliza o método 'some' para verificar se pelo menos uma idade no array 'idade_2' é de 18 anos ou mais.
// A função passada para 'some' retorna verdadeiro se a condição (idade_2 >= 18) for
// verdadeira para pelo menos um elemento.
let algumAdulto = idade_2.some(idade_2 => idade_2 >= 18);

// Exibe no console se há pelo menos um adulto no grupo, baseado na condição de ser maior de 18 anos.
console.log('Algum é adulto:', algumAdulto);


/*
11. Extrair uma Parte de um Array
O método slice() retorna uma cópia de uma parte do array dentro de um 
novo array a partir de início até fim (fim não incluído). O array original não será modificado.
*/

// Inicializa um array 'frutas_4' contendo cinco tipos de frutas.
let frutas_4 = ['banana', 'maça', 'laranja', 'uva', 'cereja'];

// Utiliza o método 'slice' para extrair uma subseção do array 'frutas_4'.
// O primeiro argumento (1) é o índice inicial, incluindo a 'maça'.
// O segundo argumento (4) é o índice final, não incluindo a 'cereja'.
// O resultado é um novo array contendo os elementos de 'maça' a 'uva'.
let algumasFrutas = frutas_4.slice(1, 4);

// Exibe no console o novo array criado a partir da extração.
console.log('Algumas frutas:', algumasFrutas);


/*
12. Converter uma String em Array
Você pode converter strings em arrays usando o método split(), muito útil para processamento de texto.
*/

// Define uma string 'frase' contendo a saudação "Olá mundo!".
let frase = "Olá mundo!";

// Utiliza o método 'split' para dividir a string 'frase' em palavras, usando um espaço como delimitador.
// O resultado é um array 'palavras' onde cada elemento é uma palavra da frase original.
let palavras = frase.split(' ');

// Exibe no console o array de palavras obtido da divisão da string.
console.log('Palavras:', palavras);


/*
13. Converter um Array em String
Conversamente, você pode juntar elementos de um array em uma única string usando o método join().
*/

// Define um array 'palavras_2' contendo as palavras "Olá" e "mundo!".
let palavras_2 = ['Olá', 'mundo!'];

// Utiliza o método 'join' para concatenar os elementos do array 'palavras_2' em uma única string.
// O espaço ' ' é usado como separador entre os elementos no resultado final.
let frase_2 = palavras_2.join(' ');

// Exibe no console a frase formada pela união das palavras do array.
console.log('Frase:', frase_2);