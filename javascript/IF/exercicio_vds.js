/*
Exercício 4: Verificação de dia da semana

Solicite ao usuário um número representando um dia da
semana (1 para domingo, 2 para segunda, etc...).

Em seguida, exiba o nome do dia correspondente.

*/

const readline = require('readline');

DiaSemana = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});

DiaSemana.question('Digite um número de 0 à 6: ', (numero) => {

    const dia = parseInt(numero);

    let nomeDia;

    if (dia === 0) {
        nomeDia = 'Domingo';
    } else if (dia === 1) {
        nomeDia = 'Segunda-Feira';
    } else if (dia === 2) {
        nomeDia = 'Terça-Feira';
    } else if (dia === 3) {
        nomeDia = 'Quarta-Feira';
    } else if (dia === 4) {
        nomeDia = 'Quinta-Feira';
    } else if (dia === 5) {
        nomeDia = 'Sexta-Feira';
    } else if (dia === 6) {
        nomeDia = 'Sábado';
    } else {
        nomeDia = 'Número inválido. Insira um número entre 0 e 6.';
    }

    console.log(`O dia é ${nomeDia}.`);

    DiaSemana.close();
});