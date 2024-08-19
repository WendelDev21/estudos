/*
Exercício 6:

Crie um programa que solicite ao usuário um sequência de
números separados por vírgula e calcule a soma desses
números usando um laço de repetição for

*/
const readline = require('readline');

calc = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

calc.question('Insira alguns números: ', function(input){

    let numbers = input.split(',');

    let soma = 0;

    for(let i = 0; i < numbers.length; i++){
        soma += Number(numbers[i]);
    }

    console.log(`A soma dos números é: ${soma}`);

    calc.close();

});