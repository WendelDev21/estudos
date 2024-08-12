/*
Objetivo: Escreva um script que pergunte o nome, idade e cidade do usuário.
Depois imprima uma mensagem personalizada no console com as informações.

Passos:

    Use prompt() para solicitar o nome do usuário.
    Use prompt() novamente para solicitar a idade.
    Use prompt() outra vez para solicitar a cidade.
    Use console.log() para imprimir uma mensagem com as informações coletadas.
*/ 

// Importa o módulo 'readline' do Node.js, que é usado para ler dados de entrada do terminal.
const readline = require('readline').createInterface({

    // Configura a fonte de entrada de dados como o stdin (standard input),
    // permitindo que o programa leia dados inseridos pelo usuário no terminal.
    input: process.stdin,

    // Configura o destino da saída de dados como o stdout (standard output),
    // permitindo que o programa escreva dados para o terminal.
    output: process.stdout
    
    });

  // Solicita ao usuário que insira seu nome, usando o método 'question' do objeto 'readline'.
  // O primeiro argumento é uma string com a pergunta feita ao usuário.
  // O segundo argumento é uma função callback que é chamada quando o usuário insere uma resposta.
    readline.question('Por favor, insira seu nome: ', (nome) => {

    // Dentro do callback do nome, solicita ao usuário que insira sua idade.
    // Novamente, utiliza-se 'readline.question' para fazer a pergunta.
    // A resposta do usuário é capturada pela função callback, que recebe a idade como argumento.
    readline.question('Por favor, insira sua idade: ', (idade) => {

      // Dentro do callback da idade, solicita ao usuário que insira a cidade onde mora.
      // Utiliza-se mais uma vez 'readline.question' para fazer a pergunta.
      // A resposta do usuário é capturada pela função callback, que recebe a cidade como argumento.
    readline.question('Por favor, insira a cidade onde você mora: ', (cidade) => {

        // Dentro do callback da cidade, imprime uma mensagem personalizada no terminal
        // usando 'console.log'. A mensagem inclui o nome, idade e cidade inseridos pelo usuário.
        // Utiliza-se template strings (delimitadas por crases) para incluir as variáveis
        // dentro da string de forma mais legível.
        console.log(`Olá, ${nome}! Você tem ${idade} anos e mora em ${cidade}.`);
        
        // Após imprimir a mensagem personalizada, fecha a interface de linha de comando.
        // Isso é necessário para terminar o programa, pois caso contrário, o processo do Node.js
        // continuaria aberto aguardando mais entrada do usuário.
        readline.close();
        
        });
    });
});
    