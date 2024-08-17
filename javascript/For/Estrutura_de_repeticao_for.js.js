/* 
    O loop for é uma das estruturas de repetição mais usadas
    em JavaScript (e em muitas outras linguagens de programação) 
    \para executar um bloco de código várias vezes. 
    
    Ele é particularmente útil quando você sabe antecipadamente
    quantas vezes deseja que o bloco de código seja executado.
    
    
    Estrutura Básica do Loop for
    
    A estrutura básica do loop for em JavaScript é a seguinte:
    
    for (inicialização; condição; incremento) {
        // Bloco de código a ser executado em cada iteração
    }
    
        Inicialização: Executada antes do primeiro loop começar. Normalmente, é usada para definir e inicializar um contador.
        Condição: Avaliada antes de cada iteração do loop. Se a condição for verdadeira (true), o bloco de
                    código dentro do loop é executado. Se for falsa (false), o loop termina.
        Incremento: Executado após cada iteração do loop. Geralmente, é usado para atualizar o contador.
    
    
    Exemplo Prático: Contando Até 5
    
    Vamos criar um exemplo simples que usa o loop for para
    contar de 1 até 5 e imprimir cada número no console.
    
    */
    
    // Iniciamos um loop 'for', que é uma estrutura de controle usada para repetir um bloco de código um número específico de vezes.
    // Este loop é configurado para repetir enquanto a variável 'i' for menor ou igual a 5, começando de 1.
    for (
    
        // Inicialização: Declaramos a variável 'i' e a inicializamos com o valor 1.
        // Esta variável 'i' atua como contador do loop, indicando o número atual na sequência de 1 a 5.
        let i = 1;
        
        // Condição de continuação: O loop continuará a executar enquanto esta condição for verdadeira.
        // Aqui, especificamos que o loop deve continuar enquanto o valor de 'i' for menor ou igual a 5.
        // Isso garante que o loop será executado para os valores de 'i' de 1 a 5, inclusos.
        i <= 5;
        
        // Incremento: Após cada iteração do loop, o valor de 'i' é incrementado em 1.
        // O operador '++' é uma forma concisa de adicionar 1 ao valor atual de 'i', preparando-o para a próxima iteração.
        i++
    ) {
        // Dentro do corpo do loop, utilizamos a função 'console.log()' para imprimir o valor atual de 'i' no console.
        // A saída é personalizada para incluir uma mensagem que torne claro qual número está sendo impresso.
        // A concatenação de strings é utilizada para inserir o valor dinâmico de 'i' dentro da mensagem.
        console.log("Número " + i + ": " + i);
        // A cada iteração, essa linha imprime uma mensagem no console, começando com "Número 1: 1" e terminando com "Número 5: 5".
    }
    
    // Após a conclusão do loop, quando 'i' se torna maior que 5, a execução do programa continua para qualquer código que venha a seguir.
    // Neste exemplo específico, não há mais instruções após o loop, então o programa termina sua execução aqui.
    
    // Este loop 'for' é especificamente projetado para realizar uma contagem regressiva, começando do número 5 e indo até o número 1.
    // Cada parte do loop 'for' é configurada para atender a este propósito de contagem regressiva.
    
    for (
    
        // Inicialização: A variável 'i' é declarada e inicializada com o valor 5.
        // Este é o ponto de partida para a contagem regressiva, representando o valor inicial mais alto da sequência.
        let i = 5;
        
        // Condição de continuação: O loop continuará a executar enquanto esta condição for verdadeira.
        // Aqui, especificamos que o loop deve continuar enquanto o valor de 'i' for maior ou igual a 1.
        // Isso assegura que a contagem regressiva incluirá os números 5, 4, 3, 2 e 1.
        i >= 1;
        
        // Decremento: Diferentemente de um loop de contagem progressiva, aqui decrementamos 'i' em 1 após cada iteração.
        // O operador '--' é usado para subtrair 1 do valor atual de 'i', movendo-se para o próximo número na sequência regressiva.
        i--
    
    ) {
    
        // Dentro do corpo do loop, utilizamos a função 'console.log()' para imprimir a mensagem personalizada no console.
        // A mensagem inclui o termo "Número Contagem regressiva" seguido pelo valor atual de 'i', tornando clara
        // a natureza regressiva da contagem.
        // A concatenação de strings é utilizada para construir a mensagem, inserindo o valor dinâmico de 'i'.
        console.log("Número Contagem regressiva " + i + ": " + i);
    
        // A cada iteração, essa linha imprime uma mensagem no console, começando com "Número Contagem regressiva 5: 5" e
        // terminando com "Número Contagem regressiva 1: 1".
    
    }
    
    // Após a conclusão do loop, quando 'i' se torna menor que 1, a execução do programa continua para qualquer código que venha a seguir.
    // Neste exemplo específico, como não há mais instruções após o loop, o programa termina sua execução após imprimir
    // a contagem regressiva completa.
    
    
    /*
    
    
    Exemplo Prático: Somando Números
    
    Vamos usar o loop for para somar os números
    de 1 a 5 e imprimir o resultado final.
    
    */
    
    // Primeiramente, inicializamos uma variável chamada 'soma' com o valor 0.
    // Esta variável atuará como um acumulador, onde armazenaremos a soma progressiva dos números de 1 a 5.
    let soma = 0;
    
    // Iniciamos um loop 'for' que servirá para iterar sobre os números de 1 a 5, inclusos.
    // A cada iteração, o valor do contador 'i' será adicionado à variável 'soma'.
    for (
    
        // Inicialização: Declaramos a variável 'i' e a inicializamos com o valor 1.
        // 'i' será nosso contador que começa em 1, representando o primeiro número na sequência de somas.
        let i = 1;
        
        // Condição de continuação: O loop continuará enquanto 'i' for menor ou igual a 5.
        // Isso garante que o loop será executado exatamente cinco vezes, somando os números de 1 a 5.
        i <= 5;
        
        // Incremento: Após cada iteração do loop, incrementamos 'i' em 1.
        // Isso move o contador para o próximo número na sequência, até que o
        // contador atinja o valor 6 e o loop termine.
        i++
    
    ) {
    
        // Dentro do corpo do loop, adicionamos o valor atual de 'i' à variável 'soma'.
        // A expressão 'soma += i' é uma forma concisa de escrever
        // 'soma = soma + i', atualizando 'soma' com o novo total após cada adição.
        soma += i;
        console.log(`Soma atual: ${soma}`);
    
    }
    
    // Após completar o loop e somar os números de 1 a 5, exibimos o resultado final
    // da soma acumulada na variável 'soma'.
    // Utilizamos uma template string para formatar a mensagem de saída, incluindo o valor calculado de 'soma'.
    console.log(`A soma dos números de 1 a 5 é: ${soma}`);
    
    
    // For Aninhado
    
    /*Abaixo está um exemplo de como usar um laço de repetição
    for aninhado para criar uma tabela de multiplicação:*/
    
     // Primeiro, definimos uma constante chamada 'tamanhoTabela' que determinará até 
     // que número queremos que nossa tabela de multiplicação vá.
    // Neste caso, definimos como 10, significando que queremos tabelas de multiplicação de 1 a 10.
    const tamanhoTabela = 10;
    
    // Iniciamos um loop 'for' externo que irá iterar sobre os multiplicadores, de 1 até o valor
    // definido em 'tamanhoTabela'.
    // Este loop controla as linhas da tabela de multiplicação, com cada iteração representando
    // uma tabela de multiplicação diferente.
    for (let i = 1; i <= tamanhoTabela; i++) {
    
        // Dentro do loop externo, iniciamos outro loop 'for', desta vez um loop interno.
        // Este loop irá percorrer os números de 1 a 'tamanhoTabela', atuando como os multiplicandos.
        for (let j = 1; j <= tamanhoTabela; j++) {
    
            // Dentro do loop interno, realizamos a operação de multiplicação entre o
            // multiplicador (i) e o multiplicando (j).
            // O resultado dessa multiplicação é então impresso no console.
            // Usamos a concatenação de strings para formatar a saída como uma expressão de 
            // multiplicação (ex: "2 x 3 = 6").
            console.log(i + " x " + j + " = " + (i * j));
    
        }
    
        // Após completar uma tabela de multiplicação (ou seja, depois de terminar as iterações do loop interno),
        // imprimimos uma linha em branco no console para separar visualmente cada tabela de multiplicação.
        console.log();
        
    }
    
    // Este código cria uma tabela de multiplicação completa, do 1 ao número especificado em 'tamanhoTabela',
    // com cada tabela sendo separada por uma linha em branco para facilitar a leitura.
    // Os loops aninhados permitem calcular e imprimir cada linha da tabela de multiplicação de maneira eficiente.
    