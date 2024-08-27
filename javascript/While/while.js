/*
While

1. Loop while simples:

*/

// Exemplo de um loop while simples que conta de 1 até 5

// Inicializa a variável `contador` com o valor 1. Esta variável será usada para controlar o loop,
// começando a contagem a partir de 1.
let contador = 1;

// Inicia um loop while. Este loop irá repetir o bloco de código dentro dele enquanto a condição
// especificada (contador <= 5) for verdadeira. A condição aqui verifica se o valor da variável `contador`
// é menor ou igual a 5. Enquanto for verdade, o loop continuará executando.
while (contador <= 5) {

    // Dentro do loop, usamos `console.log` para imprimir a mensagem na console do navegador ou terminal.
    // A mensagem contém uma string fixa "Contagem atual: " seguida do valor atual da variável `contador`.
    // Isso nos permite ver o progresso da contagem cada vez que o loop é executado.
    console.log("Contagem atual: " + contador);
    
    // Incrementa o valor da variável `contador` por 1 a cada iteração do loop. Isso é feito usando o operador
    // de incremento `++`, que aumenta o valor da variável em 1. Esta linha é crucial para que o loop
    // eventualmente chegue a um fim, pois altera o valor da variável `contador`, aproximando-a da condição
    // de saída do loop (quando `contador` for maior que 5).
    // contador = contador + 1
    // 1 = 1 + 1
    // 2 = 2 + 1
    contador++;

}
// Após o valor da variável `contador` exceder 5, a condição do loop while (contador <= 5) torna-se falsa,
// fazendo com que o loop seja encerrado. O programa então prossegue para quaisquer linhas de código
// que venham após o bloco do loop while, se houver.

/* Este exemplo executa um loop enquanto a condição
especificada (contador <= 5) for verdadeira. 

A cada iteração, o contador é incrementado em 1.
*/

// ---------------------------------------------------------


// 2. Loop while infinito com uma condição de saída interna:


// Exemplo de um loop while infinito com uma condição de saída interna
// Inicializa a variável `contador_2` com o valor 1. Esta variável será
// utilizada para contar as iterações do loop.
let contador_2 = 1;

// Inicia um loop while que teoricamente executaria para sempre porque sua condição
// é sempre verdadeira (`true`).
// Este tipo de loop é conhecido como "loop infinito" e deve ser usado com cuidado, pois pode causar
// que um programa fique preso se não houver uma condição de saída explícita.
while (true) {

    // Dentro do loop, a função `console.log` é usada para imprimir uma mensagem
    // na saída padrão (normalmente o terminal).
    // A mensagem inclui o texto "While infinito: *** ", seguido pelo valor atual da variável `contador_2`,
    // e termina com " ***" para destacar o número da iteração.
    console.log("While infinito: *** " + contador_2 + " ***");
    
    // Incrementa o valor da variável `contador_2` em 1. Isso é necessário
    // para que a condição de saída do loop
    // possa eventualmente ser atendida, evitando assim que o loop se torne verdadeiramente infinito.
    contador_2++;
    
    // Verifica se o valor da variável `contador_2` é maior que 5. Essa é a condição de saída do loop.
    // Se esta condição for verdadeira, o loop será interrompido.
    if (contador_2 > 5) {

        // A instrução `break` é usada para sair do loop imediatamente, independentemente da condição do while.
        // Neste caso, é utilizada para encerrar o loop quando a variável `contador_2` ultrapassa o valor de 5.
        break; // Sai do loop se o contador for maior que 5

    }
}

// Após o loop ser encerrado (quando `contador_2` é maior que 5), o programa continua a execução
// das instruções seguintes, se houver. Esta abordagem permite controlar um loop infinito
// com uma lógica de saída específica, garantindo que o loop execute um número finito de vezes.



/*
Este exemplo demonstra um loop while infinito que é interrompido
usando a instrução break quando a condição interna (contador > 5) é
verdadeira. Isso evita que o loop continue indefinidamente.
*/


// 3. Loop while com uso de uma função de verificação:

// Exemplo de um loop while com uma função de verificação
// Define uma função chamada `condicaoDeParada`. Esta função recebe um parâmetro `valor` e retorna um booleano.
// A função é usada para determinar se o loop `while` deve continuar executando.
// Retorna `true` se o valor passado for menor ou igual a 5, o que significa que a condição de parada
// do loop ainda não foi atendida.
function condicaoDeParada(valor) {
    return valor <= 10;
}

// Inicializa a variável `contador_4` com o valor 1. Esta variável será utilizada como contador
// para o loop, iniciando a contagem a partir de 1.
let contador_4 = 0;

// Inicia um loop `while` cuja condição de continuação é determinada pela função `condicaoDeParada`.
// A função é chamada a cada iteração do loop, passando o valor atual de `contador_4` como argumento.
// O loop continuará enquanto a condição de parada (valor <= 5) for verdadeira.
while (condicaoDeParada(contador_4)) {

    // Imprime uma mensagem no console a cada iteração do loop. A mensagem inclui uma descrição
    // do que está sendo feito e o valor atual do contador, indicando qual iteração do loop está sendo executada.
    console.log("While com uma função de verificação: " + contador_4);
    
    // Incrementa o valor da variável `contador_4` por 1. Isso assegura que o contador progride
    // e que eventualmente a condição de parada do loop será falsa (quando `contador_4` for maior que 5).
    // contador_4 = contador_4 + 2
    contador_4 += 2;

}

// Após a condição de parada do loop se tornar falsa (quando `contador_4` é maior que 5),
// imprime uma mensagem final no console, indicando que a contagem foi finalizada.
// Esta mensagem serve como um feedback visual de que o loop foi completado e o programa pode prosseguir.
console.log("Contagem finalizada.");




/* Neste exemplo, uma função condicaoDeParada() é
definida para verificar se o valor do contador é menor
ou igual a 5. O loop while continua enquanto essa função
retornar true. Isso fornece uma maneira mais modular de
definir a condição de parada do loop. */


// 4. Loop while com condição inversa:

// Exemplo de um loop while com condição inversa
// Inicializa a variável `contador_5` com o valor 5. Esta variável será utilizada como contador para o loop,
// começando a contagem em 5 e decrescendo até 0.
let contador_5 = 5;

// Inicia um loop `while` que continuará a executar enquanto `contador_5` for verdadeiro.
// No JavaScript, todos os números exceto 0 são considerados verdadeiros (`true`) quando
// avaliados em um contexto booleano.
// Isso significa que o loop continuará a executar enquanto `contador_5` for diferente de 0.
while (contador_5) {

    // Imprime uma mensagem no console a cada iteração do loop. A mensagem inclui uma descrição
    // e o valor atual do contador, indicando a contagem decrescente que está sendo executada.
    console.log("Contador Condição Inversa: " + contador_5);
    
    // Decrementa o valor da variável `contador_5` por 1. Isso garante que a contagem regressiva progride
    // e que eventualmente a condição do loop (`contador_5`) se tornará 0, que é avaliado como falso (`false`),
    // fazendo com que o loop seja encerrado.
    // contador_5 = contador_5 - 1
    contador_5--;
    
}

// Após o valor de `contador_5` chegar a 0, a condição do loop while torna-se falsa, e o loop é encerrado.
// Imprime uma mensagem final no console, indicando que a contagem regressiva foi finalizada.
// Esta mensagem serve como um feedback visual de que o processo de contagem decrescente completou
// e o programa pode prosseguir para as próximas operações.
console.log("Contagem finalizada.");



/*Neste exemplo, o loop while é executado enquanto a
variável contador for avaliada como verdadeira. Como o
valor de contador é inicializado como 5, o loop é
executado enquanto contador for diferente de zero.
A cada iteração, o valor de contador é decrementado em 1.*/


// 5. Loop while com múltiplas condições:

// Exemplo de um loop while com múltiplas condições
// Inicializa a variável `numero` com o valor 0. Esta variável será utilizada para contar de 0 até um limite,
// incrementando-se de dois em dois, desde que a condição do loop seja satisfeita.
let numero = 0;

// Define a variável `limite` com o valor 10. Esta variável é usada para estabelecer o ponto até o qual
// a contagem deve ocorrer dentro do loop `while`.
let limite = 10;

// Inicia um loop `while` com duas condições: `numero < limite` e `numero % 2 === 0`.
// A primeira condição verifica se o valor da variável `numero` ainda é menor que o valor de `limite`.
// A segunda condição verifica se o valor de `numero` é par, usando o operador módulo (%) para verificar
// se o resto da divisão de `numero` por 2 é igual a zero.
while (numero < limite && numero % 2 === 0) {

    // Imprime uma mensagem no console a cada iteração do loop. A mensagem inclui uma descrição
    // e o valor atual de `numero`, indicando qual número par está sendo impresso.
    console.log("While com múltiplas condições: " + numero);
    
    // Incrementa o valor da variável `numero` por 2 a cada iteração do loop.
    // Isso garante que apenas números pares sejam impressos e que o loop avance em passos de dois,
    // atendendo à condição de que `numero` deve ser par.
    numero += 2;
    
}

// Após a condição do loop `while` se tornar falsa (quando `numero` é igual ou maior que `limite`,
// ou se `numero` não for par, o que não ocorre neste caso específico devido ao incremento controlado),
// imprime uma mensagem final no console, indicando que a contagem foi finalizada.
// Esta mensagem serve como um feedback visual de que o processo de contagem sob condições específicas
// foi completado e que o programa pode prosseguir para as próximas operações.
console.log("Contagem finalizada.");



/*Neste exemplo, o loop while é executado enquanto duas
condições forem verdadeiras: numero deve ser menor que limite e
numero deve ser um número par (o resto da divisão por 2 é
igual a zero). O loop continua até que uma das condições seja falsa.*/

