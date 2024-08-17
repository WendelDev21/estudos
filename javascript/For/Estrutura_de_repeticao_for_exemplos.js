/*
1. Loop For Clássico

É o exemplo mais básico e direto, usado para repetir
um bloco de código um número específico de vezes.

*/

// O loop 'for' é uma estrutura de repetição usada para executar um bloco de código várias vezes.
// Essa estrutura é ideal quando sabemos antecipadamente quantas vezes o bloco de código deve ser executado.
// Neste caso, queremos imprimir os números de 0 a 9 no console.

for (
    
    // Inicialização: A variável 'i' é declarada e inicializada com o valor 0.
    // Esta variável serve como contador do loop, começando do número 0.
    let i = 0;
    
    // Condição: Antes de cada iteração do loop, verifica-se se esta condição é verdadeira.
    // Aqui, o loop continuará a executar enquanto o valor de 'i' for menor que 10.
    // Isso garante que o bloco de código dentro do loop seja executado para 'i' de 0 a 9.
    i < 10;
    
    // Incremento: Após cada iteração do loop, o valor de 'i' é incrementado em 1.
    // Isso atualiza o contador a cada volta do loop, aproximando-o da condição de término.
    i++
) {
    // Bloco de código a ser repetido: Dentro do loop, usamos 'console.log' para imprimir
    // o valor atual de 'i' no console.
    // Na primeira iteração, 'i' será 0, na segunda iteração, 'i' será 1, e assim por diante, até 9.
    console.log(i);
}

// Após a conclusão do loop (quando 'i' alcança o valor 10 e a condição 'i < 10' se torna falsa),
// o programa continua a executar qualquer código que venha após o loop.
// Neste caso, como não há mais instruções, o programa termina a execução desta parte.


// 2. Iterar Sobre Arrays

// O loop for pode ser usado para percorrer todos os elementos de um array.

// Declara uma constante chamada 'frutas' e inicializa-a com um array contendo
// três strings: "maçã", "banana" e "laranja".
// Cada elemento do array representa uma fruta diferente.
const frutas = ['maçã', 'banana', 'laranja'];

// Inicia um loop 'for' para iterar sobre o array 'frutas'.
// Este loop permite acessar cada fruta individualmente, usando um índice que
// começa em 0 e vai até o comprimento do array (frutas.length) menos 1.
for (

    // Inicialização: Declara a variável 'i' e inicializa-a com 0. 
    // 'i' serve como índice para acessar os elementos do array 'frutas'.
    let i = 0;
    
    // Condição: O loop continua enquanto 'i' for menor que o comprimento do array 'frutas'.
    // 'frutas.length' retorna o número de elementos no array, garantindo que o loop percorra todo o array.
    i < frutas.length;
    
    // Incremento: 'i++' incrementa o valor de 'i' em 1 a cada iteração do loop.
    // Isso avança o índice para o próximo elemento do array a cada volta do loop.
    i++

) {
    // Dentro do loop, 'console.log' é usado para imprimir o elemento atual do array 'frutas'
    // acessado por 'frutas[i]'.
    // '[i]' é o índice que acessa cada elemento do array, começando do primeiro elemento (índice 0)
    // até o último.
    // A cada iteração, o valor de 'i' é usado para acessar e imprimir uma fruta diferente do array.
    console.log(`Fruta ${i + 1}: ${frutas[i]}`);

}

// Este código percorre o array 'frutas', imprimindo cada fruta com um número de ordem.
// Por exemplo, "Fruta 1: maçã", "Fruta 2: banana" e "Fruta 3: laranja".
// A expressão 'i + 1' é usada para que a contagem das frutas comece em 1 em vez de 0,
// tornando a saída mais amigável para o usuário.


//3. Loop For...of

// Introduzido no ES6, o for...of permite iterar
// diretamente sobre os valores de um iterável, como arrays ou strings, de maneira mais concisa.

// Declara uma constante chamada 'cores' e inicializa-a com um array contendo três
// strings: "vermelho", "azul" e "verde".
// Cada elemento do array representa uma cor diferente.
const cores = ['vermelho', 'azul', 'verde'];

// Inicia um loop 'for...of', que é uma maneira moderna e concisa de iterar sobre os elementos de um array.
// Diferente do loop 'for' tradicional, o 'for...of' simplifica a iteração diretamente
// sobre os valores dos elementos do array,
// sem a necessidade de usar um índice para acessá-los.
for (

    // 'const cor' declara uma nova constante 'cor' dentro do escopo do loop.
    // Em cada iteração, 'cor' recebe o valor de um elemento do array 'cores'.
    // O loop 'for...of' automaticamente itera sobre todos os elementos do array, um por um,
    // atribuindo cada um deles à variável 'cor'.
    const cor of cores

) {

    // Dentro do loop, utilizamos 'console.log' para imprimir o valor da variável 'cor' no console.
    // Na primeira iteração, 'cor' será "vermelho", na segunda será "azul", e na terceira será "verde".
    console.log(cor);

}

// Este código percorre o array 'cores', imprimindo o nome de cada cor no console.
// O loop 'for...of' fornece uma maneira elegante e direta de acessar cada elemento do array
// sem a necessidade de um contador ou índice.


// 4. Loop For...in

// O loop for...in é usado para iterar sobre as
// propriedades enumeráveis de um objeto.


// Declara uma constante chamada 'pessoa' e inicializa-a com um objeto.
// Este objeto contém três propriedades: 'nome', 'idade' e 'cidade', cada uma armazenando um valor específico.
// 'nome' é uma string que armazena o nome da pessoa, 'idade' é um número que armazena
// a idade, e 'cidade' é uma string que armazena o nome da cidade.
const pessoa = {
    nome: 'João',
    idade: 30,
    cidade: 'São Paulo'
};

// Inicia um loop 'for...in', que é utilizado para iterar sobre as propriedades (chaves) de um objeto.
// Diferente do 'for...of', que itera sobre os valores de um array, o 'for...in' itera
// sobre as chaves (nomes das propriedades) de um objeto.
for (

    // 'const propriedade' declara uma nova constante 'propriedade' dentro do escopo do loop.
    // Em cada iteração, 'propriedade' recebe o nome de uma chave do objeto 'pessoa'.
    // O loop 'for...in' automaticamente itera sobre todas as chaves do objeto, uma por uma,
    // atribuindo cada uma delas à variável 'propriedade'.
    const propriedade in pessoa

) {

    // Dentro do loop, utilizamos 'console.log' para imprimir o nome da propriedade atual
    // e o seu valor correspondente no objeto 'pessoa'.
    // A sintaxe 'pessoa[propriedade]' é utilizada para acessar o valor de cada
    // propriedade do objeto usando a chave (nome da propriedade) atual.
    // Essa abordagem é útil para acessar propriedades de um objeto dinamicamente.
    console.log(`${propriedade}: ${pessoa[propriedade]}`);

}

// Este código percorre o objeto 'pessoa', imprimindo o nome de cada propriedade (chave) e seu valor associado.
// Por exemplo, ele imprimirá "nome: João", "idade: 30" e "cidade: São Paulo" no console.
// O loop 'for...in' fornece uma maneira eficiente de acessar todas as chaves e valores de um objeto sem a necessidade de conhecê-las antecipadamente.



// 5. Loop For com Break

// O comando break pode ser usado para sair prematuramente de um loop for.

// Inicia um loop 'for', que é uma estrutura de controle utilizada para repetir
// um bloco de código múltiplas vezes.
// Este loop é configurado para repetir enquanto a variável 'i' for menor que 10.
for (

    // Inicialização: Declara a variável 'i' e inicializa com o valor 0.
    // Esta variável 'i' atua como contador do loop, começando de 0.
    let i = 0;
    
    // Condição: O loop continua a executar enquanto esta condição for verdadeira.
    // Neste caso, o loop executará enquanto o valor de 'i' for menor que 10.
    i < 10;
    
    // Incremento: Após cada iteração do loop, o valor de 'i' é incrementado em 1.
    // Isso é feito automaticamente pelo loop 'for' e avança o contador para a próxima iteração.
    i++

) {

    // Dentro do loop, verifica se 'i' é igual a 5 usando uma estrutura condicional 'if'.
    if (i === 5) {

        // Se 'i' for igual a 5, o comando 'break' é executado.
        // 'break' é uma instrução que imediatamente termina a execução do loo
        //p mais interno em que se encontra.
        // Neste caso, faz com que o loop 'for' pare de executar e saia dele quando 'i' atingir o valor 5.
        break; // Sai do loop quando i é igual a 5

    }

    // Se 'i' não for igual a 5, o programa continua a executar o código abaixo do 'if'.
    // Neste caso, imprime o valor atual de 'i' no console.
    // Isso significa que os números de 0 a 4 serão impressos, um por iteração do
    // loop, até que 'i' atinja 5 e o loop seja interrompido.
    console.log(`Loop For com Break ${i}`);

}

// Após a execução do 'break', o programa continua a executar qualquer código que venha após o loop 'for'.
// Neste exemplo, como não há mais instruções após o loop, o programa termina sua execução aqui.


// Imprime de 0 a 4 e então sai do loop

// 6. Loop For com Continue

// O comando continue pula a iteração atual do loop e continua com a próxima.

// Inicia um loop 'for', que é uma estrutura de controle usada para repetir
// um bloco de código múltiplas vezes.
// Este loop é configurado para repetir enquanto a variável 'i' for menor que 10.
for (

    // Inicialização: Declara a variável 'i' e inicializa com o valor 0.
    // Esta variável 'i' atua como contador do loop, começando de 0.
    let i = 0;
    
    // Condição: O loop continua a executar enquanto esta condição for verdadeira.
    // Neste caso, o loop executará enquanto o valor de 'i' for menor que 10.
    i < 10;
    
    // Incremento: Após cada iteração do loop, o valor de 'i' é incrementado em 1.
    // Isso avança o contador para a próxima iteração, assegurando que o loop
    // eventualmente atinja sua condição de parada.
    i++

) {

    // Utiliza uma estrutura condicional 'if' para verificar se 'i' é igual a 5 em cada iteração do loop.
    if (i === 5) {

        // Se 'i' for igual a 5, a instrução 'continue' é executada.
        // 'continue' imediatamente interrompe a execução do código restante no corpo do
        // loop para a iteração atual.
        // Então, o loop avança para a próxima iteração, incrementando 'i' antes de verificar a
        // condição do loop novamente.
        continue; // Pula o resto do código no loop para i = 5

    }

    // Se 'i' não for igual a 5, ou após um 'continue', este código é executado.
    // Imprime o valor atual de 'i' no console, exceto quando 'i' é igual a 5, devido
    // ao 'continue' que pula essa iteração.
    console.log(i);
    console.log(`Loop For com Continue ${i}`);
    
}

// Este loop 'for' imprime os números de 0 a 9 no console, com a exceção do número 5.
// A instrução 'continue' permite que o número 5 seja omitido sem interromper completamente o loop.
// Após 'i' atingir o valor 10, a condição do loop 'for' torna-se falsa, e o programa
// termina a execução do loop


// Imprime todos os números de 0 a 9, exceto o 5





