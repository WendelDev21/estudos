/*
Exercício 3: Verificação de maior número

Peça ao usuário dois números e determine qual é o maior. Exiba o resultado
indicando qual número é o maior ou se são iguais.

*/
const readline = require("readline");

MaiorNumero = readline.createInterface({

    input: Process.stdin,
    output: process.stdout

});

MaiorNumero.question("Digite um número: ", (resposta1) => {

MaiorNumero.question("Digite um número: ", (resposta2) => {

    if (resposta1 > resposta2) {

        console.log('O número ' + resposta1 + ' é maior que ' + resposta2);

    } elif (resposta1 < resposta2) {

        console.log('O número ' + resposta2 + ' é maior que ' + resposta1);

    } else (resposta1 === resposta2) {

        console.log('O número ' + resposta1 + ' é igual a ' + resposta2);

    }

    MaiorNumero.close();



    });
});