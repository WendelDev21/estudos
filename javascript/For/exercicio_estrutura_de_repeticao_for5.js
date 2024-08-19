/*
Exercício 5

Faça um programa que peça ao usuário um número e
imprima todos os seus divisores usando um laço de repetição for.
*/



// Inicia importando o módulo 'readline' do Node.js.
// Este módulo permite criar uma interface de linha de comando para
// ler dados do usuário e exibir saídas no terminal.
const readline = require('readline');

// Cria uma nova interface de readline especificando o standard input (stdin) como
// entrada e o standard output (stdout) como saída.
// Isso configura onde a interface lerá a entrada do usuário e onde exibirá as mensagens.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Usa o método 'question' da interface criada para solicitar ao usuário que digite um número.
// A função de callback é chamada com a entrada do usuário assim que ele digitar um valor e pressionar 'Enter'.
rl.question('Digite um número para encontrar seus divisores: ', function(num) {

    // Converte a entrada do usuário, que é recebida como uma string, para um
    // número inteiro usando 'parseInt'.
    // Isso permite realizar operações matemáticas com o valor.
    num = parseInt(num);

    // Antes de iniciar a busca por divisores, imprime uma mensagem indicando o início da operação.
    console.log(`Divisores de ${num}:`);

    // Inicia um loop 'for' com a variável 'i' começando em 1 e indo até o valor de 'num', inclusivo.
    // Este loop serve para verificar cada número entre 1 e 'num' para determinar se é um divisor.
    for (let i = 1; i <= num; i++) {

        // Usa o operador módulo (%) para verificar se 'num' dividido por 'i' não deixa resto.
        // Um resto igual a 0 indica que 'i' é um divisor de 'num'.
        if (num % i === 0) {

            // Se 'i' é um divisor de 'num', imprime 'i' no console.
            console.log(i);

        }

    }

    // Após identificar e imprimir todos os divisores de 'num', a interface de readline é fechada.
    // Isso é necessário para encerrar o programa e devolver o controle ao terminal.
    rl.close();
    
});

