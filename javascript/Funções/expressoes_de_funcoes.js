/*
Vamos a um exemplo simples de uma expressão
de função em JavaScript. As expressões de função
podem ser anônimas ou nomeadas, e são frequentemente
utilizadas para definir uma função em uma variável. 

Diferentemente das declarações de função, as expressões
de função não são içadas, o que significa que você não
pode chamá-las antes de definí-las no código.

Exemplo de Expressão de Função:
Vamos criar uma expressão de função que calcula o quadrado de um número.
*/

// Expressão de função anônima para calcular o quadrado de um número
const quadrado = function(numero) {
    return numero * numero;
};

  // Chamada da expressão de função 'quadrado' com o argumento 4
let resultado = quadrado(4);

  // Exibe o resultado no console
  console.log(resultado); // Saída esperada: 16

/*
Explicação:

Definição da Expressão de Função: A variável quadrado é
definida para armazenar uma função anônima que recebe um
parâmetro numero. A função calcula o quadrado desse número
multiplicando-o por si mesmo e retorna o resultado.

Chamada da Função: Após a função ser armazenada na variável quadrado,
ela pode ser chamada usando quadrado(4), onde 4 é o número que
desejamos elevar ao quadrado. O resultado dessa operação é
armazenado na variável resultado.


Expressões de função, especialmente as anônimas, são amplamente
utilizadas em JavaScript, especialmente como argumentos de outras
funções ou métodos (como callbacks). Elas permitem uma grande
flexibilidade e concisão no código, tornando-as uma ferramenta
valiosa para o desenvolvimento JavaScript.
*/

// --------------------------------------------------------

/*
Função que concatena duas strings. Este exemplo demonstrará como 
podemos usar uma expressão de função para criar uma função anônima
que recebe dois parâmetros e retorna a concatenação deles.

Exemplo de Expressão de Função: Concatenação de Strings
*/

// Expressão de função anônima para concatenar duas strings
const concatenarStrings = function(string1, string2) {
    return string1 + ' ' + string2;
};

  // Chamada da expressão de função 'concatenarStrings' com os argumentos 'Olá' e 'Mundo'
let mensagemCompleta = concatenarStrings('Olá', 'Mundo');

  // Exibe a mensagem completa no console
  console.log(mensagemCompleta); // Saída esperada: Olá Mundo


  // ---------------------------

/*
Vamos criar uma expressão de função que verifica se um
número é positivo, negativo ou zero. Este exemplo ilustra
como utilizar expressões de função para realizar uma tarefa
simples de decisão baseada no valor de entrada.

Exemplo de Expressão de Função: Verificar Sinal do Número
  */

// Expressão de função anônima para verificar se um número é positivo, negativo ou zero
const verificarSinal = function(numero) {
    if (numero > 0) {
        return 'Positivo';
    } else if (numero < 0) {
        return 'Negativo';
    } else {
        return 'Zero';
    }
};

  // Chamada da expressão de função 'verificarSinal' com diferentes argumentos
let resultado1 = verificarSinal(10);
let resultado2 = verificarSinal(-5);
let resultado3 = verificarSinal(0);

  // Exibe os resultados no console
  console.log(`10 é ${resultado1}.`); // Saída esperada: 10 é Positivo.
  console.log(`-5 é ${resultado2}.`); // Saída esperada: -5 é Negativo.
  console.log(`0 é ${resultado3}.`); // Saída esperada: 0 é Zero.
