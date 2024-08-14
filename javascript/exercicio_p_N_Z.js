/*
Exercício 6: Verificação de número positivo, negativo ou zero

Peça ao usuário para inserir um número e detrmine se é positivo, negativo ou zero.
Exiba o resultado correspondente

*/

const readline = require('readline');

numero = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

numero.question('Digite um número: ', (resp) => {

    if (resp > 0) {

        console.log(`O número ${resp} é positivo.`);

    } else if (resp < 0) {

        console.log(`O número ${resp} é negativo.`);

    } else {

        console.log(`O número ${resp} é igual a zero.`);
        
    }

    numero.close();
});