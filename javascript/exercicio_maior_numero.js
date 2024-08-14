/*
Exercício 3: Verificação de maior número

Peça ao usuário dois números e determine qual é o maior. Exiba o resultado
indicando qual número é o maior ou se são iguais.

*/
const readline = require("readline");

MaiorNumero = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});

MaiorNumero.question("Digite um número: ", (resposta1) => {

MaiorNumero.question("Digite outro número: ", (resposta2) => {

    if (resposta1 > resposta2) {

        console.log('O número ' + resposta1 + ' é maior que ' + resposta2);

    } else {

        console.log('O número ' + resposta1 + ' é igual a ' + resposta2);

    }

    MaiorNumero.close();



    });
});