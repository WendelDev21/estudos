/*
Exercício 2: Avaliação de desmpenho

Crie um programa que pede ao usuário para inserir uma nota
de 0 a 100. Utilize um switch para determinar a classificação
correspondente com base na nota (Ex:
A para notas acima de 90,
B para notas acima de 80, etc.) e exiba a classificação na tela.

*/

const { match } = require('assert');
const readline = require('readline');

AvaDesemp = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

AvaDesemp.question('Insira uma nota de 0 a 100: ', (resp) => {

    const notaNum = parseInt(resp);

    let Nota;

    const nota = Math.floor(notaNum / 10);

    switch(nota){

        case 0:
            Nota = "F";
        break;
        case 10:
        case 9:
            Nota = "A";
            break;
        case 8:
        case 7:
            Nota = "B";
            break;
        case 6:
        case 5:
            Nota = "C";
            break;
        case 4:
        case 3:
            Nota = "D";
            break;
        case 2:
        case 1:
            Nota = "E";
            break;
        default:
            console.log('Nota inválida')
    }

    console.log(`A classificação foi ${Nota}`);

    AvaDesemp.close();

});