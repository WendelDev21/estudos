/*
O if em JavaScript permite que você faça várias
comparações usando operadores relacionais, como:

maior que (>), 
menor que (<), 
maior ou igual a (>=), 
menor ou igual a (<=), 
igual a (===) 
diferente de (!==)
Operador lógico E (&&):
Operador lógico OU (||):

Vamos ver um exemplo prático de cada uma dessas comparações:

    Maior que (>)

*/

// Declara uma variável 'numero' e atribui a ela o valor 10.
// 'let' é usado para declarar variáveis cujo valor pode ser alterado mais tarde.
let numero = 10;

// Verifica se o valor da variável 'numero' é maior que 5.
// A estrutura 'if' permite a execução condicional de blocos de código.
if (numero > 5) {

    // Se a condição '(numero > 5)' for verdadeira, executa o código dentro deste bloco.
    // 'console.log' é usado para imprimir uma mensagem no console.
    console.log("O número é maior que 5.");

} else {

    // Se a condição '(numero > 5)' for falsa, executa o código dentro deste bloco 'else'.
    console.log("O número não é maior que 5.");

}


// Menor que (<)

// Declara uma variável 'idade' e atribui a ela o valor 16.
// A variável 'idade' é usada para armazenar a idade de uma pessoa.
let idade = 16;

// Verifica se o valor da variável 'idade' é menor que 18.
// A condição '(idade < 18)' é usada para determinar se alguém é menor de idade.
if (idade < 18) {

    // Se a condição for verdadeira (isto é, a pessoa tem menos de 18 anos),
    // imprime "Você é menor de idade." no console.
    console.log("Você é menor de idade.");

} else {

    // Se a condição for falsa (a pessoa tem 18 anos ou mais),
    // executa o código neste bloco 'else', imprimindo "Você é maior de idade." no console.
    console.log("Você é maior de idade.");

}


// Maior ou igual a (>=)

// Declara uma variável chamada 'saldo' e atribui a ela o valor 100.
// A palavra-chave 'let' é usada para declarar variáveis cujo valor pode mudar ao longo do tempo.
// Neste caso, 'saldo' representa a quantidade de dinheiro em uma conta hipotética.
let saldo = 100;

// Utiliza a estrutura de controle 'if' para verificar se a condição '(saldo >= 0)' é verdadeira.
// O operador '>=' significa 'maior ou igual a'. Portanto, esta condição verifica se 'saldo' é maior ou igual a 0.
if (saldo >= 0) {

    // Se a condição é verdadeira (ou seja, o saldo é positivo ou zero),
    // executa o bloco de código dentro das chaves seguintes.
    // 'console.log' é utilizado para imprimir uma mensagem no console do navegador ou terminal.
    // A mensagem "Seu saldo é positivo ou zero." é mostrada ao usuário, indicando que seu saldo não é negativo.
    console.log("Seu saldo é positivo ou zero.");

} else {

    // O bloco 'else' é executado se a condição '(saldo >= 0)' for falsa, o que significa que 'saldo' é menor que 0.
    // Nesse caso, imprime "Seu saldo é negativo." no console,
    // indicando ao usuário que seu saldo atual é menor que zero.
    console.log("Seu saldo é negativo.");

}


// Menor ou igual a (<=)

// Declara uma variável chamada 'temperatura' e atribui a ela o valor 25.
// A palavra-chave 'let' é usada para declarar variáveis que podem ter seus valores alterados no futuro.
// Neste contexto, 'temperatura' é usada para armazenar a temperatura atual em graus Celsius.
let temperatura = 25;

// Utiliza a estrutura de controle 'if' para verificar se a condição '(temperatura <= 0)' é verdadeira.
// O operador '<=' significa 'menor ou igual a'. Assim, esta condição verifica se a temperatura é menor ou igual a 0 graus Celsius.
if (temperatura <= 0) {

    // Se a condição é verdadeira (isto é, a temperatura é menor ou igual a 0 graus Celsius),
    // executa o bloco de código dentro das chaves a seguir.
    // 'console.log' é utilizado para imprimir uma mensagem no console.
    // A mensagem "Está muito frio." é exibida, indicando que a temperatura está em um nível que é considerado muito frio.
    console.log("Está muito frio.");

} else {

    // Se a condição '(temperatura <= 0)' for falsa (ou seja, a temperatura é maior que 0 graus Celsius),
    // executa o bloco de código dentro do 'else'.
    // Neste caso, imprime "A temperatura está acima de zero." no console,
    // informando que a temperatura é positiva e, portanto, acima do ponto de congelamento da água.
    console.log("A temperatura está acima de zero.");

}


// Igual a (===)

// Declara uma variável chamada 'cor' e atribui a ela o valor "vermelho".
// A palavra-chave 'let' é utilizada para declarar variáveis que podem ter seus valores alterados no futuro.
// Aqui, 'cor' é uma variável que armazena a informação sobre uma cor, neste caso, a string "vermelho".
let cor = "vermelho";

// Utiliza a estrutura de controle 'if' para verificar se a variável 'cor' tem exatamente o valor "vermelho".
// O operador '===' é usado para comparação estrita, o que significa que ele verifica tanto o valor quanto o tipo de dado.
// Isso quer dizer que a condição só será verdadeira se 'cor' for exatamente igual a "vermelho", tanto em valor quanto
// em tipo (string neste caso).
if (cor === "vermelho") {

    // Se a condição é verdadeira (ou seja, se 'cor' é exatamente "vermelho"),
    // executa o bloco de código dentro das chaves seguintes.
    // Aqui, utilizamos 'console.log' para imprimir a mensagem "A cor é vermelho." no console.
    // Isso informa ao usuário que a cor verificada é de fato vermelho.
    console.log("A cor é vermelho.");

} else {

    // Se a condição '(cor === "vermelho")' for falsa (ou seja, se 'cor' não for exatamente "vermelho"),
    // executa o bloco de código dentro do 'else'.
    // Neste caso, imprime "A cor não é vermelho." no console,
    // informando ao usuário que a cor verificada é diferente de vermelho.
    console.log("A cor não é vermelho.");

}


// Diferente de (!==)

// Declara uma variável chamada 'diaSemana' e atribui a ela o valor "sábado".
// 'let' é utilizado para declarar variáveis que podem ter seus valores alterados no futuro.
// Neste contexto, a variável 'diaSemana' é usada para armazenar o nome do dia da semana atual.
let diaSemana = "sábado";

// Utiliza a estrutura de controle 'if' para verificar se a variável 'diaSemana' NÃO é igual a "domingo".
// O operador '!==' é usado para uma comparação estrita de desigualdade, verificando tanto o valor quanto o tipo.
// Isso significa que a condição será verdadeira se 'diaSemana' for qualquer coisa diferente de "domingo".
if (diaSemana !== "domingo") {

    /* Se a condição é verdadeira (ou seja, se 'diaSemana' não é "domingo"),
    executa o bloco de código dentro das chaves a seguir.
    Aqui, usamos 'console.log' para imprimir a mensagem "Hoje não é domingo." no console,
    indicando que o dia da semana atual não é domingo. */
    console.log("Hoje não é domingo.");

} else {

    /* Se a condição '(diaSemana !== "domingo")' for falsa (ou seja, se 'diaSemana' é exatamente "domingo"),
    executa o bloco de código dentro do 'else'.
    Neste caso, imprime "Hoje é domingo." no console,
    informando que o dia da semana atual é domingo. */
    console.log("Hoje é domingo.");

}


/* 
Operador lógico E (&&):

O operador && é verdadeiro se ambas as condições forem verdadeiras.
*/


/* Declara uma variável chamada 'idadeE' e atribui a ela o valor 25.
'let' é utilizado para declarar variáveis cujos valores podem ser alterados posteriormente.
Neste caso, a variável 'idadeE' armazena a idade de uma pessoa. */
let idadeE = 25;

/* Declara uma variável chamada 'possuiCarteiraDeMotorista' e atribui a ela o valor true.
Essa variável é um booleano, o que significa que pode ter apenas dois valores: true (verdadeiro) ou false (falso).
Aqui, 'true' indica que a pessoa possui uma carteira de motorista. */
let possuiCarteiraDeMotorista = true;

/* Utiliza a estrutura de controle 'if' para verificar duas condições ao mesmo tempo:
1. Se a idade da pessoa ('idadeE') é maior ou igual a 18.
2. Se a pessoa possui carteira de motorista ('possuiCarteiraDeMotorista' é true).
O operador '&&' é um operador lógico AND que requer que ambas as condições sejam verdadeiras para
// que o bloco 'if' seja executado. */
if (idadeE >= 18 && possuiCarteiraDeMotorista) {

/* Se ambas as condições forem verdadeiras (ou seja, a pessoa tem 18 anos ou mais E possui carteira de motorista),
executa o bloco de código dentro das chaves a seguir.
Aqui, usamos 'console.log' para imprimir a mensagem "Você é maior de idade e possui carteira de motorista." no console,
indicando que a pessoa atende a ambos os critérios estabelecidos. */
console.log("Você é maior de idade e possui carteira de motorista.");

} else {

/* Se pelo menos uma das condições for falsa (ou seja, a pessoa tem menos de 18 anos OU não possui carteira de motorista),
executa o bloco de código dentro do 'else'.
Neste caso, imprime "Você não é maior de idade ou não possui carteira de motorista." no console,
indicando que a pessoa não atende a pelo menos um dos critérios. */
console.log("Você não é maior de idade ou não possui carteira de motorista.");

}



/*
Operador lógico OU (||):

O operador || é verdadeiro se pelo menos uma das condições for verdadeira.
*/

/* Declara uma variável chamada 'diaDaSemana' e atribui a ela o valor "sábado".
Usamos 'let' para declarar variáveis que podem ter seus valores alterados ao longo do código.
Neste caso, 'diaDaSemana' armazena o nome do dia atual da semana como uma string. */
let diaDaSemana = "sábado";

/* Utiliza a estrutura condicional 'if' para verificar se hoje é sábado ou domingo.
A condição verifica duas possíveis verdades usando o operador lógico OR '||':
1. Se 'diaDaSemana' é igual a "sábado".
2. Se 'diaDaSemana' é igual a "domingo".
O operador '===' é usado para comparação estrita, significando que o valor e o tipo devem ser exatamente iguais.
Se qualquer uma dessas condições for verdadeira, o bloco de código dentro do 'if' será executado. */
if (diaDaSemana === "sábado" || diaDaSemana === "domingo") {

/* Se a condição acima for verdadeira (ou seja, se for sábado ou domingo),
executa o bloco de código dentro das chaves a seguir.
Aqui, 'console.log' é usado para imprimir a mensagem "É fim de semana!" no console,
indicando que o dia atual é sábado ou domingo. */
console.log("É fim de semana!");

} else {

/* Se nenhuma das condições no 'if' for verdadeira (ou seja, não é nem sábado nem domingo),
o bloco de código dentro do 'else' é executado.
Isso significa que o dia atual é um dos dias úteis da semana (de segunda a sexta).
Neste caso, imprime "Não é fim de semana." no console,
indicando que o dia atual não é nem sábado nem domingo. */
console.log("Não é fim de semana.");

}

