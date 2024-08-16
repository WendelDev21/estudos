/*
Exercício 1: Estações do ano

Crie um programa que pede ao usuário para inserir um 
número de 1 a 12, representando os meses do ano. Utilize um
switch para determinar e exibir a estação do ano correspondente
ao mês inserido.

*/

const readline = require('readline');

EstacaoDoAno = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

EstacaoDoAno.question('Digite um número de 1 a 12 para saber a estaçao do ano: ', (numero) => {

    const resp = parseInt(numero);

    let estacao;

    switch(resp){
        case 1:
            estacao = "Em janeiro é verão";
        break;
        case 2:
            estacao = "Em fevereiro é verão";
        break;
        case 3:
            estacao = "Em março é verão";
        break;
        case 4:
            estacao = "Em abril é outono";
        break;
        case 5:
            estacao = "Em maio é outono";
        break;
        case 6:
            estacao = "Em junho é outono";
        break;
        case 7:
            estacao = "Em julho é inverno";
        break;
        case 8:
            estacao = "Em agosto é inverno";
        break;
        case 9:
            estacao = "Em setembro é inverno";
        break;
        case 10:
            estacao = "Em outubro é primavera";
        break;
        case 11:
            estacao = "Em novembro é primavera";
        break;
        case 12:
            estacao = "Em dezembro é primavera";
        break;

        default:
            console.log("Número inválido");
    }

    console.log(`${estacao}`);


    EstacaoDoAno.close();
});



