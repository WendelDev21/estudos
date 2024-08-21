/*
O escopo de uma função determina o acesso das
variáveis: variáveis definidas dentro de uma função
não podem ser acessadas de fora dela, enquanto
variáveis definidas fora podem ser acessadas dentro
de funções (a menos que sejam sobrescritas por
variáveis locais com o mesmo nome).

Exemplo: Escopo de Variáveis em Funções
*/

// Declara e inicializa a variável 'nome' no escopo global com o valor "Maria".
// Isso significa que 'nome' pode ser acessada e modificada por qualquer parte do código.
let nome = "Maria";

// Define a função 'saudar' sem parâmetros.
// Funções são blocos de código que podem ser chamados em outras partes do programa.
function saudar() {

  // Declara e inicializa a variável 'mensagem' dentro do escopo da função 'saudar' com o valor "Olá, ".
  // Essa variável só pode ser acessada e modificada dentro da função 'saudar'.
let mensagem = "Olá, ";

  // Retorna a concatenação da variável 'mensagem' com a variável global 'nome'.
  // A operação '+' aqui é usada para juntar as duas strings, resultando em "Olá, Maria".
return mensagem + nome;

}

// Executa a função 'console.log', imprimindo o resultado da função 'saudar()' no console.
// 'saudar()' é chamada, executa seu código interno e retorna "Olá, Maria", que é então impresso no console.
console.log(saudar());

// Esta linha está comentada e se fosse descomentada, resultaria em um erro.
// Isso porque tenta acessar a variável 'mensagem' que só existe no escopo da função 'saudar', sendo inacessível aqui.
// console.log(mensagem); // Isso geraria um erro: 'mensagem' não está definido


// -----------------------------------------------------------

/*
Exemplo que ilustra o uso de variáveis locais dentro de
funções aninhadas e como o escopo léxico funciona em JavaScript.

Exemplo: Escopo Léxico e Funções Aninhadas
*/

/*
Define a função 'criarContador'. Esta função é um exemplo de uma closure em JavaScript.
Uma closure é uma função que lembra as variáveis de seu escopo lexical, mesmo quando é
// executada fora desse escopo.
*/

function criarContador() {

    // Declara a variável 'contador' no escopo da função 'criarContador' e inicializa com 0.
    // Essa variável mantém o estado do contador entre chamadas sucessivas da função 'incrementar'.
    let contador = 0;

    // Define a função 'incrementar', aninhada dentro de 'criarContador'.
    // Esta função tem acesso às variáveis do escopo de 'criarContador' devido ao escopo léxico.
    function incrementar() {

      // Incrementa o valor de 'contador' por 1.
      // A variável 'contador' é acessível aqui devido ao escopo léxico da closure.
      // contador = contador + 1
    contador++;
    
      // Imprime o valor atual de 'contador' no console.
    console.log(contador);
    }

    // Retorna a função 'incrementar'.
    // Isso permite que a função 'incrementar' seja chamada de fora de 'criarContador',
    // mas ainda assim acesse e modifique a variável 'contador'.
    return incrementar;
}

  // Chama a função 'criarContador' e armazena a função retornada ('incrementar') na variável 'meuContador'.
  // A partir de agora, 'meuContador' pode ser chamada para incrementar o 'contador' e imprimir seu valor.
const meuContador = criarContador();

  // Chama a função 'meuContador' (que é a função 'incrementar' com acesso à variável 'contador'
  // de 'criarContador').
  // A primeira chamada incrementa 'contador' de 0 para 1 e imprime 1.
meuContador();

  // Chama a função 'meuContador' novamente.
  // Desta vez, 'contador' é incrementado de 1 para 2 e imprime 2.
meuContador();

meuContador();

meuContador();

meuContador();
