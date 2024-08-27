/*
Escreva um programa que peça ao usuário para advinhar
um número entre 1 e 100. Continue pedindo até que o 
usuário acerte o número usando um loop while.

*/

const readline = require('readline');

rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

const numeroSecreto = Math.floor(Math.random() * 100) + 1;

console.log("Jogo da advinhação.");

function advinharNumero() {

    rl.question("Advinhe o número de 1 a 100: ", (numeroUsuario) => {

        numeroUsuario = parseInt(numeroUsuario);

        if (numeroUsuario === numeroSecreto) {

            console.log('Parabéns! Você acertou o número!');

            rl.close();
        }else {

            if (numeroUsuario < numeroSecreto) {

                console.log(`Mais alto! O número é: ${numeroSecreto}. Tente novamente`);

            }else {

                console.log(`Mais baixo! O número é: ${numeroSecreto}. Tente novamente`);

            }

            advinharNumero();
        }
    });
};

advinharNumero();

