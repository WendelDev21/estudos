/*
Exercício 1:

Escrever uma expressão de função em JavaScript que
receba três números como argumentos e retorne a média desses números


*/

const calcularMedia = function(num1, num2, num3){

    let media = (num1 + num2 + num3) / 3;
    
    return media;
}

let media1 = calcularMedia(10, 20, 30);
let media2 = calcularMedia(15, 26, 320);
let media3 = calcularMedia(107, 204, 302);

console.log(` A média dos números 10, 20, 30 é: ${media1}.`);
console.log(` A média dos números 15, 26, 320 é: ${media2}.`);
console.log(` A média dos números 107, 204, 302 é: ${media3}.`);