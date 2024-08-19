/*
Exercício 7:

Faça um programa que imprima os caracteres de uma string
de trás para frente usando um laço de repetição for

*/

const readline = require('readline');

string = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

string.question('Digite um texto para inversão: ', function(inputString){

    let inverterTexto = '';

    for(let i = inputString.length - 1; i >= 0; i--){

        inverterTexto += inputString[i];

    }

    console.log(`String invertida: ${inverterTexto}`);

    string.close();

});