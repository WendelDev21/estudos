function filtrarArray(array, funcaoFiltro) {
    let arrayFiltro = [];
    for (let elemento of array) {
        if (funcaoFiltro(elemento)) {
            arrayFiltro.push(elemento);
        }
    }
    return arrayFiltro;
}

function ePar(numero) {
    return numero % 2 === 0;
}
function maiorQueDez(numero) {
    return numero > 10;
}

let numeros = [1, 2, 3, 4, 5, 11, 12, 13, 14];


let numerosPares = filtrarArray(numeros, ePar);

let numerosMaioresQueDez = filtrarArray(numeros, maiorQueDez);

console.log(numerosPares);
console.log(numerosMaioresQueDez);

function aplicarOperacao(numeros, operacao) {
    let resultado = [];
    for (let numero of numeros) {
        resultado.push(operacao(numero));
    }
    return resultado;
}

function dobrar(valor) {
    return valor * 2;
}
function incrementar(valor) {
    return valor + 1;
}
let array_numeros = [1, 2, 3, 4, 5];

let numerosDobrados = aplicarOperacao(array_numeros, dobrar);

let numerosIncrementados = aplicarOperacao(array_numeros, incrementar);

console.log(numerosDobrados);
console.log(numerosIncrementados);
