// Importando o módulo READLINE do node.js, para usar sua funcionalidade
const readline = require('readline');

// Criando uma interface com a função CREATEINTERFACE do módulo READLINE 
// Interagir com o terminal para fazer perguntas e receber respostas do usuário 
const r1 = readline.createInterface({

    // Onde recebe os dados do usuário (teclado usuário)
    input: process.stdin,

    // Onde vai exibir os dados (no terminal)
    output: process.stdout

});

// Definindo uma função para fazer perguntas ao usuário 
function fazerPergunta(pergunta){

    return new Promise ((resolve) => {

        // Usando o método QUESTION para fazer perguntas ao usuário
        // O primeiro parámetro é a pergunta em si, e o segundo é a função CALLBACK que vai ser chamada com a rsposta
        r1.question(pergunta, (resposta) => {
        
            // Dentro da função CALLBACK, chamamos RESOLVE com a resposta do usuário
            resolve(resposta);
        });
    });

}

// Declarando uma função para coletar as respostas
async function coletarRespostas(){

    // Fazendo perguntas ao usuário e esperando por respostas
    // AWAIT faz o código esperar até que o usuário responda
    const nome = await fazerPergunta('Qual é o seu nome? ');
    const corFavorita = await fazerPergunta('Qual é sua cor favorita? ');
    const animalFavorito = await fazerPergunta('Qual é o seu animal favorito? ');
    const hobby = await fazerPergunta('Qual é o seu hobby favorito? ');
    const pratoFavorito = await fazerPergunta('Qual é o seu prato favorito? ');

    // Após coletar as respostas armazena e exibe no terminal
    console.log(`\nAqui estão as sua respostas:
    Nome: ${nome}
    Cor Favorita: ${corFavorita}
    Animal Favorito: ${animalFavorito}
    Hobby: ${hobby}
    Prato Favorito: ${pratoFavorito}
    `);

    // Fechando a interface READLINE
    r1.close();

}

// 
coletarRespostas();