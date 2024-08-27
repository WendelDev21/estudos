/*
Faça um programa que calcule a soma dos 
números pares de 1 a 100 usando um loop while.

*/

let soma = 0;

let numero = 1;

while (numero <= 100) {

    if (numero % 2 === 0) {

        soma += numero;
    }

    numero++;
}

console.log("A soma é: ", soma);