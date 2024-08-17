// Importando o módulo READLINE do node.js, para usar sua funcionalidades
const readline = require("readline");

// Criando uma interface com a função CREATEINTERFACE do módulo READLINE 
// Interagir com o terminal para fazer perguntas e receber respostas do usuário 
const r1 = readline.createInterface({

    // Onde recebe os dados do usuário (teclado usuário)
    input: process.stdin,

    // Onde vai exibir os dados (no terminal)
    output: process.stdout

});

// Usando o método QUESTION para fazer perguntas ao usuário
// O primeiro parámetro é a pergunta em si, e o segundo é a função CALLBACK que vai ser chamada com a rsposta
r1.question('Qual é o seu nome? ', (resposta)=> {

    // Dentro da função CALLBACK, RESPOSTA contém o texto que o usuário digitou no terminal

    // Aqui exibe-se uma mensagem de saldação ao usuário que inclue a resposta do usuário
    console.log(`Olá, ${resposta}!`);

});