/*
Exercício 5: Calculadora simples

Crie uma calculadora que solicita dois números e uma
operação matemática (+, -, *, /) ao usuário. Execute a
operação e exiba o resultado

*/

const readline = require('readline');

calc = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

calc.question('Digite um número: ', (num1) => {

    calc.question('Digite outro número: ', (num2) => {

        calc.question('Digite a operação matemática (+, -, *, /): ', (opration) => {

            let resultado;

            const resp1 = parseFloat(num1);
            const resp2 = parseFloat(num2);
            
            if (opration === '+') {

                resultado = resp1 + resp2;

            } else if (opration === '-') {

                resultado = resp1 - resp2;

            } else if (opration === '*') {

                resultado = resp1 * resp2;

            } else if (opration === '/') {

                if (resp2 !== 0){

                    resultado = resp1 / resp2;

                } else {

                    resultado = 'Erro: Divisão por zero não é permitida.';

                }

            } else {

                resultado = 'Operação inválida.';
            }

            console.log(`Resultado: ${resultado}`);
            calc.close();

            
        });
    });
});