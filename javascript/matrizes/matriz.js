/*
Em JavaScript, uma "matriz" é geralmente representada por um array
de arrays. Arrays são estruturas de dados que permitem armazenar
múltiplos valores em uma única variável, acessíveis por índices.

Quando esses arrays contêm outros arrays como seus elementos, eles
podem ser tratados como matrizes bidimensionais ou multidimensionais,
semelhantes a tabelas ou grades em matemática.

Conceitos Básicos de Matrizes em JavaScript
- Bidimensional: Uma matriz com duas dimensões pode ser vista
como uma tabela, onde o primeiro índice refere-se à linha e o
segundo índice à coluna. Por exemplo, matriz[0][1] acessa o elemento
na primeira linha e segunda coluna.

- Multidimensional: Matrizes com mais de duas dimensões são formadas por
aninhamento adicional de arrays. Por exemplo, uma matriz tridimensional
poderia representar coordenadas em um espaço 3D.


Definição de uma Matriz

Para definir uma matriz, você pode simplesmente iniciar um array de
arrays. Por exemplo, vamos criar uma matriz 3x3:
*/

let matriz = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
];

/*
Esta matriz é composta por três linhas e três colunas, onde cada elemento é
acessado através de dois índices: um para a linha e outro para a coluna.

Acessando Elementos
Para acessar um elemento da matriz, você especifica dois índices: 
um para a linha e outro para a coluna. 

Por exemplo, para acessar o número 5, que está na segunda linha e 
segunda coluna:
*/

// Acessa o elemento na linha 1, coluna 1 (lembrando que o índice começa em 0)
let elemento = matriz[1][1]; 

// Imprime 5
console.log(elemento); 

// ------------------------------

/*Modificando Elementos
Para modificar um elemento, você simplesmente atribui um novo
valor ao índice desejado:
*/

// Altera o valor da primeira linha, primeira coluna para 10
matriz[0][0] = 10; 

// Mostra a matriz modificada
console.log(matriz); 


/*Adicionando uma Nova Linha
Adicionar uma nova linha é tão simples quanto adicionar um novo
array ao array principal:
*/

// Adiciona uma nova linha no final da matriz
matriz.push([10, 11, 12]); 
console.log(matriz);


// --------------------------

/*Adicionando uma Nova Coluna
Adicionar uma nova coluna envolve adicionar um elemento a cada
um dos arrays internos (linhas):

*/

// A função 'forEach' é usada para iterar sobre cada elemento do array 'matriz'. 
// Cada elemento aqui é um sub-array representando uma linha da matriz.
matriz.forEach(linha => {

// Para cada 'linha' (que é um sub-array da matriz), o método 'push' é chamado.
// O método 'push' adiciona um novo elemento ao final do array.
// Aqui, estamos adicionando o número 13 ao final de cada linha da matriz.
linha.push(13);

});

// Após a execução do 'forEach', cada linha da matriz terá um novo elemento (13) adicionado ao seu final.
// Isso efetivamente adiciona uma nova coluna à matriz, onde cada elemento dessa nova coluna é 13.

// 'console.log' é usado para imprimir a matriz modificada no console.
// Isso permite visualizar a matriz após a adição da nova coluna.
console.log(matriz);

// --------------------------------------------


/*Imprimindo a Matriz
Para imprimir a matriz de forma que ela pareça uma matriz,
você pode iterar sobre cada linha e imprimir cada uma delas:
*/


// Imprime cada linha da matriz

// A função 'forEach' é utilizada para percorrer cada elemento do array 'matriz'.
// Aqui, cada elemento é um sub-array (referido como 'linha'), que
// representa uma linha da matriz.
matriz.forEach(linha => {

// Dentro do 'forEach', usamos o método 'join' no sub-array 'linha' para
// converter todos os seus elementos em uma única string.
// O método 'join' recebe um argumento que especifica o
// separador entre os elementos do array na string resultante.
// Neste caso, usamos um espaço ' ' como separador.
// Isso transforma o array de números (ou strings, dependendo dos
// dados na matriz) em uma string única, com cada elemento separado por espaço.
let linhaFormatada = linha.join(' ');

// O resultado da junção é então passado para 'console.log', que imprime a string formatada no console.
// Cada chamada de 'console.log' aqui corresponde a uma linha da
// matriz, então as linhas são impressas uma após a outra no console.
console.log(linhaFormatada);

});

/*Este código define uma matriz básica, manipula seus elementos, e
realiza operações como adicionar linhas e colunas. Com estas ferramentas
básicas, você pode manipular matrizes para uma variedade de aplicações
em JavaScript.
*/

// --------------------------------------------


/*

Exemplos de usar matrizes em JavaScript. 


1. Soma dos Elementos de uma Matriz
Calcular a soma de todos os elementos de uma matriz 2x2:
*/

// Definindo a matriz 2x2
// Aqui, 'matriz1' é definida como um array de arrays, onde
// cada sub-array representa uma linha da matriz.
// Cada linha contém dois elementos, formando uma matriz 2x2.
let matriz1 = [
[1, 2],  // Primeira linha da matriz
[3, 4]   // Segunda linha da matriz
];

// Inicializando a variável 'soma' para acumular a soma dos elementos da matriz
// 'soma' é inicializada com o valor 0 para começar a
// contagem da soma dos elementos da matriz.
let soma = 0;

// Usando laços for para somar os elementos da matriz
// O primeiro laço 'for' itera sobre as linhas da matriz. 
// 'i' é o índice da linha, começando de 0 até o número de
// linhas em 'matriz1' (exclusivo).
for (let i = 0; i < matriz1.length; i++) {

// O segundo laço 'for' itera sobre os elementos de cada linha.
// 'j' é o índice do elemento dentro da linha, começando de 0 até o número de elementos na linha (exclusivo).
for (let j = 0; j < matriz1[i].length; j++) {

    // Soma os valores dos elementos.
    // 'matriz1[i][j]' acessa o elemento na i-ésima linha e j-ésima coluna da matriz.
    // Esse valor é então adicionado à variável 'soma'.
    soma += matriz1[i][j];
    
}
}

// Após os loops, a variável 'soma' contém a soma total de todos os elementos da matriz.
// Se desejar imprimir ou utilizar a soma, você pode adicionar um console.log aqui ou retornar a 'soma'.
console.log('A soma dos elementos da matriz é:', soma);



// let soma = 0;
// matriz1.forEach(linha => linha.forEach(valor => soma += valor));
// console.log(soma); // Saída: 10  


// -------------------------------

/*
2. Transposição de uma Matriz
Criar a matriz transposta de uma matriz 2x3 (converter linhas em colunas):
*/

// Definindo a matriz 2x3
// 'matriz2' é uma matriz com duas linhas e três colunas.
let matriz2 = [
[1, 2, 3], // Primeira linha
[4, 5, 6]  // Segunda linha
];

// Criando uma matriz para a transposta. Note que as dimensões são invertidas: 3x2
// 'transposta' será a nova matriz onde as linhas e colunas da 'matriz2' são invertidas.
let transposta = [];

// Inicializando a matriz transposta com arrays vazios para cada coluna da matriz original
// Este loop for inicializa a matriz 'transposta' para ter tantas
// linhas quantas são as colunas em 'matriz2'.
for (let i = 0; i < matriz2[0].length; i++) {

// Cria um array vazio para cada linha da matriz transposta.
transposta[i] = [];
}

// Usando laços for para transpor a matriz
// Este loop externo percorre cada linha da matriz original 'matriz2'.
for (let i = 0; i < matriz2.length; i++) {

// Este loop interno percorre cada coluna dentro da linha atual.
for (let j = 0; j < matriz2[i].length; j++) {

    // A posição dos índices é invertida para a transposição:
    // O elemento da linha 'i' e coluna 'j' em 'matriz2' é
    // colocado na linha 'j' e coluna 'i' da matriz 'transposta'.
    transposta[j][i] = matriz2[i][j];

}
}

// Imprimindo a matriz transposta
console.log('Matriz Transposta:');

// Usa 'forEach' para percorrer cada linha da matriz 'transposta' e imprimir.
// 'linha.join(' ')' converte cada linha da matriz transposta em
// uma string, separando os elementos por espaço.
transposta.forEach(linha => console.log(linha.join(' '))); // Saída esperada: [1, 4], [2, 5], [3, 6]  


// ----------------------------------------

/*
3. Encontrar o Elemento Máximo em uma Matriz
Encontrar o maior número em uma matriz:
*/

// Definindo a matriz 3x3
// 'matriz3' é uma matriz quadrada com três linhas e três
// colunas. Cada linha é representada por um sub-array.
let matriz3 = [
[1, 2, 3], // Primeira linha da matriz
[4, 5, 6], // Segunda linha da matriz
[7, 8, 9]  // Terceira linha da matriz
];

// Inicializando a variável 'max' com o menor valor possível para um número em JavaScript
// '-Infinity' é usado aqui porque qualquer número comparado a
// '-Infinity' será maior, garantindo que qualquer elemento
// da matriz será considerado no início da comparação.
let max = -Infinity;

// Usando laços for para iterar sobre todos os elementos da matriz
// O loop externo itera sobre as linhas da matriz. 'i' é o índice de cada linha.
for (let i = 0; i < matriz3.length; i++) {

// O loop interno itera sobre os elementos de cada linha. 'j' é
// o índice de cada elemento na linha 'i'.
for (let j = 0; j < matriz3[i].length; j++) {

    // Atualizando 'max' se o elemento atual é maior que o valor atual de 'max'
    // Compara o elemento atual da matriz, 'matriz3[i][j]', com o valor atual armazenado em 'max'.
    if (matriz3[i][j] > max) {

        // Se o elemento atual é maior que o valor armazenado em
        // 'max', atualiza 'max' com este novo valor.
        max = matriz3[i][j];
    }
}
}

// Imprimindo o maior elemento encontrado
// Após os loops completarem, a variável 'max' contém o maior valor encontrado na matriz.
// 'console.log' é usado para imprimir este valor, mostrando o maior elemento da matriz.
console.log('Maior elemento da matriz:', max); // Saída: 9



// let max = Math.max(...matriz3.flat());
// console.log(max); // Saída: 9  


// ------------------------------------

/*
4. Rotação de uma Matriz
Rotacionar uma matriz de 3x3 em 90 graus no sentido horário:
*/

// Definindo a matriz 3x3
// 'matriz5' é definida como uma matriz quadrada com três linhas e três colunas.
// Cada sub-array representa uma linha da matriz.
let matriz5 = [
[1, 2, 3], // Primeira linha da matriz
[4, 5, 6], // Segunda linha da matriz
[7, 8, 9]  // Terceira linha da matriz
];

// Criando uma nova matriz para armazenar a versão rotacionada
// 'rotacionada' é uma matriz 3x3 inicializada com zeros.
// Ela será usada para armazenar os elementos de 'matriz5' após a rotação.
let rotacionada = [
[0, 0, 0],
[0, 0, 0],
[0, 0, 0]
];

// Usando laços for para rotacionar a matriz
// O loop externo percorre as linhas da matriz 'matriz5'.
for (let i = 0; i < matriz5.length; i++) {

// O loop interno percorre as colunas de cada linha.
for (let j = 0; j < matriz5[i].length; j++) {

    // Rotacionando 90 graus no sentido horário
    // A operação de rotação é feita trocando as posições dos elementos.
    // Para uma rotação de 90 graus no sentido horário:
    // Elemento na posição (i, j) vai para (j, matriz5.length - 1 - i).
    rotacionada[j][matriz5.length - 1 - i] = matriz5[i][j];
}
}

// Imprimindo a matriz rotacionada
// Após completar a rotação, cada linha da matriz 'rotacionada' é impressa.
console.log('Matriz Rotacionada 90 graus no sentido horário:');

// O método 'forEach' é usado para iterar sobre cada linha da matriz 'rotacionada'.
rotacionada.forEach(linha => {

// Cada linha é convertida em uma string com 'join', separando os
// elementos por espaço para uma visualização clara.
console.log(linha.join(' '));

});


// ---------------------------

/*
5. Preenchendo uma Matriz
Criar uma matriz 3x3 e preenchê-la com o valor 0:
*/

// Criando uma matriz 3x3
// 'matriz6' é declarada como um novo array com três elementos. Cada elemento
// deste array representará uma linha da matriz.
let matriz6 = new Array(3); // Cria um array com três elementos (linhas)

// Inicializando a matriz com zeros usando laços for
// O loop externo itera sobre cada linha da matriz.
for (let i = 0; i < matriz6.length; i++) {

// Inicializa cada linha como um novo array de três elementos.
// Isso configura cada 'linha' de 'matriz6' como um array separado.
matriz6[i] = new Array(3); // Cada linha é um novo array de três elementos (colunas)

// O loop interno itera sobre cada coluna da linha atual.
for (let j = 0; j < matriz6[i].length; j++) {

    // Preenche cada elemento (coluna) da linha atual com o valor 0.
    matriz6[i][j] = 0; // Preenche cada coluna da linha atual com 0

}
}

// Imprimindo a matriz preenchida
// Exibe a matriz completa, linha por linha, após o preenchimento.
console.log('Matriz 3x3 preenchida com zeros:');

// O método 'forEach' é usado para percorrer cada linha da matriz 'matriz6'.
matriz6.forEach(linha => {

// Cada 'linha' do array 'matriz6' é convertida em uma string e impressa no console.
// O método 'join' é utilizado para transformar os elementos do array linha em uma string única,
// separada por espaços.
console.log(linha.join(' ')); // Exibe cada linha da matriz, onde cada elemento é separado por um espaço.

});

// Saída esperada:
// 0 0 0
// 0 0 0
// 0 0 0


// ----------------------------------

/*
6. Diagonal Principal de uma Matriz
Extrair a diagonal principal de uma matriz quadrada:
*/

// Definindo a matriz quadrada
// 'matriz7' é uma matriz quadrada 3x3, onde cada sub-array representa uma linha da matriz.
let matriz7 = [
[1, 2, 3], // Primeira linha da matriz
[4, 5, 6], // Segunda linha da matriz
[7, 8, 9]  // Terceira linha da matriz
];

// Criando um array para armazenar os elementos da diagonal principal
// 'diagonalPrincipal' será usado para coletar os elementos que estão na diagonal principal da matriz.
let diagonalPrincipal = [];

// Usando um laço for para extrair a diagonal principal
// O loop itera sobre as linhas da matriz. A variável 'i' serve como índice tanto para a
// linha quanto para a coluna correspondente na mesma iteração.
for (let i = 0; i < matriz7.length; i++) {

// A diagonal principal de uma matriz quadrada contém os elementos onde o índice da
// linha é igual ao índice da coluna.
// Portanto, 'matriz7[i][i]' acessa o elemento na diagonal principal na linha 'i' e coluna 'i'.
diagonalPrincipal.push(matriz7[i][i]);

}

// Imprimindo a diagonal principal
// Após coletar todos os elementos, eles são impressos no console.
console.log('Diagonal Principal:', diagonalPrincipal); // Saída esperada: [1, 5, 9]


// -----------------------------------------


/*
7. Soma de Duas Matrizes
Somar duas matrizes de mesmo tamanho:
*/

// Definindo as matrizes C e D
// 'C' e 'D' são matrizes de dimensão 2x2, onde cada sub-array representa uma linha da matriz.
let C = [
[1, 2],  // Primeira linha da matriz C
[3, 4]   // Segunda linha da matriz C
];
let D = [
[5, 6],  // Primeira linha da matriz D
[7, 8]   // Segunda linha da matriz D
];

// Criando uma matriz para armazenar a soma
// 'somaMatrizes' é inicializada com valores zero em cada posição correspondente para preparar para a soma.
let somaMatrizes = [

[0, 0],  // Inicialização da primeira linha da matriz de soma com zeros
[0, 0]   // Inicialização da segunda linha da matriz de soma com zeros

];

// Usando laços for para somar os elementos correspondentes de C e D
// O loop externo itera sobre as linhas das matrizes.
for (let i = 0; i < C.length; i++) {  // i é o índice da linha

// O loop interno itera sobre as colunas dentro da linha atual.
for (let j = 0; j < C[i].length; j++) {  // j é o índice da coluna

    // Soma os elementos correspondentes das matrizes C e D e armazena o resultado na matriz 'somaMatrizes'.
    somaMatrizes[i][j] = C[i][j] + D[i][j];

}
}

// Imprimindo a matriz resultante
// Após completar a soma, imprime a matriz 'somaMatrizes' linha por linha.
console.log('Soma das Matrizes:');

// O método 'forEach' é usado para percorrer cada linha da matriz 'somaMatrizes'.
somaMatrizes.forEach(linha => {

// Cada 'linha' do array 'somaMatrizes' é convertida em uma string com 'join', separando
// os elementos por espaço para facilitar a visualização.
console.log(linha.join(' ')); // Imprime cada linha da matriz de soma.

});


// -------------------------------------------


/*
8. Matriz Bidimensional
Uma matriz bidimensional é semelhante a uma tabela ou uma grade, com linhas e colunas. 

Vamos criar uma matriz 3x3 e demonstrar como acessar e modificar seus elementos.
*/

// Criando uma matriz bidimensional 3x3
// 'matrizBidimensional' é definida como um array de arrays, onde cada sub-array representa
// uma linha da matriz.
let matrizBidimensional = [

[1, 2, 3], // Primeira linha da matriz
[4, 5, 6], // Segunda linha da matriz
[7, 8, 9]  // Terceira linha da matriz

];

// Acessando um elemento específico (segunda linha, terceira coluna)
// Aqui, acessamos o elemento da segunda linha (índice 1, pois os índices começam em 0) e
// terceira coluna (índice 2).
// O acesso é feito diretamente usando os índices [1][2].
console.log(matrizBidimensional[1][2]); // Saída: 6

// Modificando um elemento (alterando o valor na terceira linha, primeira coluna para 10)
// Aqui, modificamos o valor na terceira linha (índice 2) e primeira coluna (índice 0).
// A modificação é feita atribuindo um novo valor ao elemento na posição especificada.
matrizBidimensional[2][0] = 10;

// Imprimindo a matriz modificada
// Após a modificação, imprimimos toda a matriz para visualizar as alterações.
console.log('Matriz Bidimensional Modificada:');

// Usamos o método 'forEach' para iterar sobre cada linha da matriz.
matrizBidimensional.forEach(linha => {

    // Cada linha é convertida em uma string utilizando o método 'join', que concatena os
    // elementos separados por um espaço.
    // Isso facilita a visualização da matriz inteira no console, mostrando claramente a
    // estrutura de linhas e colunas.
    console.log(linha.join(' ')); // Imprime cada linha da matriz, agora modificada.

});


// -----------------------------


/*
9. Matriz Multidimensional
Uma matriz multidimensional (neste caso, uma matriz tridimensional) pode ser
visualizada como uma sequência de matrizes bidimensionais.
Isso é útil para representar dados em três dimensões. Vamos criar uma matriz 2x3x3 (dois "blocos",
cada um com três linhas e três colunas).
*/

// Criando uma matriz tridimensional 2x3x3
// 'matrizTridimensional' é uma matriz com duas "camadas" ou "blocos", cada uma contendo uma matriz 3x3.
let matrizTridimensional = [
[
    [1, 2, 3],   // Primeira linha do primeiro bloco
    [4, 5, 6],   // Segunda linha do primeiro bloco
    [7, 8, 9]    // Terceira linha do primeiro bloco
],
[
    [10, 11, 12],  // Primeira linha do segundo bloco
    [13, 14, 15],  // Segunda linha do segundo bloco
    [16, 17, 18]   // Terceira linha do segundo bloco
]
];

// Acessando um elemento específico (no segundo bloco, terceira linha, segunda coluna)
// O elemento é acessado especificando o índice de cada dimensão: [bloco][linha][coluna].
console.log(matrizTridimensional[1][2][1]); // Saída: 17 - Isso acessa o segundo bloco, terceira linha, segunda coluna.

// Modificando um elemento (alterando o valor no primeiro bloco, primeira linha, terceira coluna para 20)
// Modificação direta do elemento na posição especificada.
matrizTridimensional[0][0][2] = 20;  // Altera o elemento na primeira linha e terceira coluna do primeiro bloco para 20.

// Imprimindo a matriz tridimensional modificada
console.log('Matriz Tridimensional Modificada:');

// 'forEach' externo itera sobre cada bloco da matriz.
matrizTridimensional.forEach(bloco => {

console.log('Bloco:');

// 'forEach' interno itera sobre cada linha dentro do bloco.
bloco.forEach(linha => {

    // Cada linha é convertida em uma string com 'join', onde elementos são separados por espaço.
    console.log(linha.join(' '));  // Imprime cada linha de forma formatada.
    
});
});
