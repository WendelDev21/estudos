/*Crie um programa que implemente um jogo de "forca".

Escolha uma palavra aleatória de uma lista de palavras e
permita que o usuário adivinhe letras até que ele acerte a
palavra ou exceda o número máximo de tentativas usando um loop while.

*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.s
});

const palavras = ['javascript', 'node.js', 'programação', 'computador', 'internet'];

const palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];

let palavraDisplay = '_'.repeat(palavraSecreta.length);

const maxTentativas = 6;

let tentativasErradas = 0;

function solicitarLetra() {
    
    console.log(`Palavra: ${palavraDisplay}`);

    if (tentativasErradas < maxTentativas) {

        readline.question('Advinhe uma letra: ', letra => {

            processarJogada(letra.toLowerCase());
        });

    }else {

        console.log('Você excedeu o número de tentativas. Game over!');

        console.log(`A palavra era: ${palavraSecreta}`);

        readline.close();
    }
}

function processarJogada(letra) {
    
    if (palavraSecreta.includes(letra)) {

        atualizarPalavraDisplay(letra);

    }else {

        tentativasErradas++;

        console.log(`Letra incorreta. Você tem ${maxTentativas - tentativasErradas} tentativas restantes`);

    }

    if (palavraDisplay === palavraSecreta) {

        console.log(`Parabéns! Você advinhou a palavra. "***${palavraSecreta}***"`);

        readline.close();

    }else {

        solicitarLetra();
    }
}

function atualizarPalavraDisplay(letra) {
    
    let resultado = '';

    let i = 0;

    while (i < palavraSecreta.length) {

        if (palavraSecreta[i] === letra) {

            resultado += letra;

        }else {

            resultado += palavraDisplay[i];
        }

        i++;
    }

    palavraDisplay = resultado;
    
    
} solicitarLetra();