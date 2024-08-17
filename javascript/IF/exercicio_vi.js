/* 
Exercício 1: verificação de idade

Ecreva um programa que pede ao usuário sua idade e
verifica sele ele é maior ou igual a 18 anos. Se for,
exiba "Você é maior de idade", caso contrário, exiba
"Você é menor de idade".

*/

const { stdin, stdout } = require("process");
const readline = require("readline");

idade = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

idade.question("Qual é a sua idade? ", (resposta) => {

    const idadeNumerica = parseInt(resposta);

    if (idadeNumerica >= 18) {

        console.log('Você é maior de idade');

    } else {

        console.log('Você é menor de idade');
    }

    idade.close();
});