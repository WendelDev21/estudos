/*
Exercício 3:

Escreva um programa que calcule e imprima o fatoreal de um 
número fornecido pelo usuário usando um laço de repetição for.

Ex: 5 = 1 x 2 x 3 x 4 x 5 = 120

*/

const readline = require('readline');

fator = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

fator.question('insira um número: ', (resp) => {

    let num = parseInt(resp);

    let fatorial = 1;

    for (let i = 1; i <= num; i++){
        fatorial *= i;

        console.log(`O fatorial de ${num} é ${fatorial}.`);
    }
    console.log(`O fatorial de ${num} é ${fatorial}.`);

    fator.close();
});