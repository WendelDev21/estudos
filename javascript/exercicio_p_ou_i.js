/*
Verificação de número par ou ímpar

Crie um programa que solicita um número ao usuário e
verifica se é par ou ímpar. Se for par exiba, "O número é par",
caso contrário, exiba "O número é impar".

*/

const readline = require("readline");

ParOuImpar = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

ParOuImpar.question('Digite um número: ', (Number) => {

    const ip = parseInt(Number);

    // %2 - Significa resto de divisão, se for 0 é par se for 1 é ímpar.
    if (ip %2 === 0 ) {

        console.log('O número ' + ip + ' é par');

    } else {

        console.log('O número ' + ip + ' é ímpar');
    }

    ParOuImpar.close();

});