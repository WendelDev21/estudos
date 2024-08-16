/*
O switch é uma estrutura de controle em JavaScript que
permite executar diferentes partes do código com base no
valor de uma expressão. É uma alternativa ao uso de
múltiplos if...else if statements, tornando o código
mais organizado e legível, especialmente quando você tem
várias condições a verificar. A estrutura do switch
compara o valor de uma expressão com valores de case
especificados e executa o bloco de código associado ao
case correspondente.

Estrutura Básica do switch


switch (expressao) {
    case valor1:
    // Bloco de código a executar quando expressao === valor1
    break;
    case valor2:
    // Bloco de código a executar quando expressao === valor2
    break;
  // Você pode adicionar quantos cases forem necessários
    default:
    // Bloco de código a executar quando nenhum dos cases anteriores corresponder
}

    expressao: O valor a ser comparado nos diferentes case.
    case valor: Uma opção que será comparada com a expressão. Se a expressão
    // corresponder a um case, o bloco de código associado será executado.
    
    break: Usado para sair do switch statement após a execução de um bloco de código
    // correspondente. Se omitido, o código continuará a executar os próximos case até encontrar
    // um break ou até o final do switch.
    default: Um bloco de código que é executado se nenhum dos case corresponder à expressão.
    // O default é opcional.

Exemplo Prático

Vamos criar um exemplo simples que usa o switch para determinar 
o nome do dia da semana com base em um número
fornecido (1 para Domingo, 2 para Segunda-feira, etc.):
*/

// Declara uma variável 'diaDaSemana' e inicializa com o valor 4.
// Neste contexto, os números de 1 a 7 representam os dias da semana, começando por
// Domingo como 1 e Sábado como 7.
// O valor 4, portanto, representa Quarta-feira.
let diaDaSemana = 4; // Exemplo: 4 representa Quarta-feira

// A estrutura 'switch' é utilizada para selecionar uma operação com base no valor da variável 'diaDaSemana'.
// Ela permite comparar 'diaDaSemana' com cada 'case' (caso) listado dentro do bloco 'switch'.
switch (diaDaSemana) {

  // Se 'diaDaSemana' for igual a 1, executa o código associado a este 'case'.
    case 1:

    // Imprime "Domingo" no console se o caso for verdadeiro.
        console.log("Domingo");

    // O 'break' encerra a execução dentro do bloco 'switch', prevenindo que o código dos casos seguintes seja executado.
    break;

    case 2:

    // Caso o valor de 'diaDaSemana' seja 2, este bloco de código é executado.
    // Isso significa que o dia da semana representado pelo número 2 é "Segunda-feira".
    // A função 'console.log' é usada para imprimir "Segunda-feira" no console do terminal.
        console.log("Segunda-feira");

    // O comando 'break' impede que a execução do código continue para os casos subsequentes.
    break;

    case 3:

      // Se 'diaDaSemana' for igual a 3, indica que o dia correspondente é "Terça-feira".
      // Portanto, "Terça-feira" é impresso no console.
        console.log("Terça-feira");

      // 'break' finaliza a execução dentro da estrutura 'switch' após imprimir o dia da semana.
    break;

    case 4:

      // Este caso é selecionado se 'diaDaSemana' for igual a 4, correspondendo a "Quarta-feira".
      // "Quarta-feira" é então impresso, indicando o dia da semana ao usuário.
        console.log("Quarta-feira");

      // Utiliza-se 'break' para sair do 'switch' após a execução deste caso.
    break;

    case 5:

      // Quando o valor de 'diaDaSemana' é 5, o dia correspondente é "Quinta-feira".
      // Aqui, "Quinta-feira" é impresso para informar o usuário sobre o dia da semana.
        console.log("Quinta-feira");

      // 'break' é usado para encerrar a execução no 'switch' depois de lidar com este caso.
    break;

    case 6:

      // Para o valor de 'diaDaSemana' igual a 6, o dia da semana é "Sexta-feira".
      // A função 'console.log' exibe "Sexta-feira" no console, comunicando o dia ao usuário.
        console.log("Sexta-feira");

      // O 'break' aqui garante que a execução não avance para outros casos depois de imprimir "Sexta-feira".
    break;

    case 7:

      // O último caso específico do dia da semana é quando 'diaDaSemana' é 7, representando "Sábado".
      // "Sábado" é impresso no console, completando a enumeração dos dias da semana.
        console.log("Sábado");

      // Após imprimir "Sábado", 'break' finaliza a execução dentro do 'switch', evitando entrar no 'default'.
    break;

  // O 'default' é executado se nenhum dos 'case' anteriores corresponder ao valor de 'diaDaSemana'.
  // Isso serve como uma cláusula de captura para todos os valores que não se encaixam nos casos definidos.
    default:

    // Se o valor de 'diaDaSemana' não estiver entre 1 e 7, imprime uma mensagem de erro.
        console.log("Número inválido: escolha um número de 1 a 7.");
    
}

// Este bloco de código demonstra uma maneira eficiente de mapear números para dias da semana,
// facilitando a leitura e manutenção do código ao usar a estrutura 'switch' em vez de múltiplos 'if-else'.


// Saída: Quarta-feira
