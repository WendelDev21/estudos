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

    const Numero1 = parseFloat(resposta1);
    const Numero2 = parseFloat(resposta2);

    if (Numero1 > Numero2) {

        console.log(`O maior número é: ${Numero1}`);

    } else if (Numero2 > Numero1) {

        console.log(`O maior número é: ${Numero2}`);

    } else {

        console.log('Os números são iguais');

    }

    MaiorNumero.close();

    });
});