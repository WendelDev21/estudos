/*
Exercício 4

Crie um programa que imprima a tabuada de 
multiplicação de um número fornecido pelo 
usuário usando um laço de repetição for.
*/



// Importa o módulo 'readline' do Node.js, que é utilizado para interagir com o usuário através do terminal.
// Este módulo permite criar uma interface simples de entrada e saída de dados.
const readline = require('readline');

// Cria uma nova interface de readline usando 'createInterface'.
// Configura 'process.stdin' como a entrada (input), permitindo que o usuário digite informações.
// Configura 'process.stdout' como a saída (output), onde as respostas serão mostradas ao usuário.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Utiliza o método 'question' da interface de readline para fazer uma pergunta ao usuário.
// Pede ao usuário que digite um número do qual gostaria de ver a tabuada.
rl.question('Digite o número para a tabuada: ', function(num) {

    // Converte a entrada do usuário para um número inteiro usando 'parseInt'.
    // Isso é necessário porque a entrada do usuário é tratada como uma string.
    num = parseInt(num);

    // Verifica se o valor convertido de 'num' é um número válido.
    // 'isNaN' é uma função que verifica se o valor não é um número (Not-a-Number).
    if (!isNaN(num)) {

        // Se 'num' for um número válido, inicia um loop 'for' que vai de 1 a 10.
        // Este loop é utilizado para gerar e imprimir a tabuada do número escolhido.
        for (let i = 1; i <= 10; i++) {

            // Calcula o produto do número escolhido ('num') pelo contador do loop ('i').
            let produto = num * i;
            
            // Imprime cada linha da tabuada no formato "num x i = produto".
            // Utiliza template strings para inserir as variáveis diretamente na string, tornando a
            // saída mais clara.
            console.log(`${num} x ${i} = ${produto}`);

        }

    } else {

        // Caso 'num' não seja um número válido (por exemplo, se o usuário digitar uma letra),
        // imprime uma mensagem solicitando a entrada de um número válido.
        console.log('Por favor, digite um número válido.');

    }

    // Após gerar a tabuada ou informar que o número é inválido, fecha a interface de readline.
    // Isso é necessário para encerrar o programa e liberar o terminal para outras operações.
    rl.close();
    
});
