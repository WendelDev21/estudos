/*
Crie um programa que solicite ao usuário um número
e, em seguida, conte de 1 até esse número usando
um loop while.

*/

const readline = require('readline');

rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});

rl.question("Insira um número para contagem: ", (res) => {
    
    let contador = 1;

    let num = res;

    while (contador <= num) {

        console.log("Contagem: " + contador);

        contador++;
    }

    console.log("Contagem finalizada.");

    rl.close();
});