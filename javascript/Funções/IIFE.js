/*
Uma IIFE (Immediately Invoked Function Expression) é
uma expressão de função que é executada assim que definida.

O principal uso das IIFEs em JavaScript é criar um escopo
privado para variáveis e funções, evitando assim poluir o
escopo global e gerenciar a privacidade de dados e
métodos. Isso é especialmente útil em cenários onde
você deseja isolar parte do seu código para evitar
conflitos de nomes ou simplesmente quando precisa
executar algum código de inicialização.

Exemplo Básico de IIFE
Vou mostrar um exemplo simples de IIFE que demonstra
como criar um contador. Este contador terá seu próprio
escopo, protegido do escopo global, graças ao uso da IIFE.

*/

// Início da IIFE.
// O uso de uma IIFE permite a criação de um escopo local, impedindo que variáveis e
// funções internas poluam o escopo global.
(function() {

    // Declaração da variável 'contador' dentro do escopo da IIFE.
    // 'contador' é acessível apenas dentro desta IIFE, tornando-o privado e protegido
    // de modificações externas.
    let contador = 0;

    // Define a função 'incrementar' dentro do escopo da IIFE.
    // Esta função incrementa o valor de 'contador' por um e então imprime o novo valor no console.
    function incrementar() {
      contador += 1; // Incrementa 'contador' em um.
      console.log(contador); // Imprime o valor atual de 'contador' no console.
    }

    // Define a função 'resetar' dentro do escopo da IIFE.
    // Esta função redefine o valor de 'contador' para 0 e imprime uma mensagem
    // indicando que o contador foi resetado.
    function resetar() {
      contador = 0; // Redefine 'contador' para 0.
      console.log('Contador resetado.'); // Imprime uma mensagem indicando o reset do contador.
    }

    // Simula o uso das funções 'incrementar' e 'resetar' dentro da IIFE.
    // Como essas chamadas estão dentro da IIFE, elas são executadas imediatamente após a definição.
    incrementar(); // Incrementa 'contador' para 1 e imprime o valor.
    incrementar(); // Incrementa 'contador' para 2 e imprime o valor.
    resetar();     // Redefine 'contador' para 0 e imprime a mensagem "Contador resetado."
    incrementar(); // Incrementa 'contador' para 1 e imprime o valor.
    incrementar(); // Incrementa 'contador' para 1 e imprime o valor.
    incrementar(); // Incrementa 'contador' para 1 e imprime o valor.
    incrementar(); // Incrementa 'contador' para 1 e imprime o valor.
    incrementar(); // Incrementa 'contador' para 1 e imprime o valor.
  })(); // Fim da IIFE e sua imediata invocação.



  // ---------------------------------------

/*
Vamos criar outro exemplo de IIFE (Immediately Invoked Function Expression) 
que ilustra uma aplicação prática diferente. Neste caso, vamos usar uma IIFE para
implementar um módulo simples que faz o gerenciamento de tarefas. Este módulo permitirá
adicionar tarefas a uma lista e exibir todas as tarefas presentes na lista. O objetivo é
demonstrar como as IIFEs podem ser utilizadas para criar escopos privados e expor 
apenas o que é necessário, mantendo o restante do código protegido dentro do escopo da função.

Exemplo de IIFE: Módulo de Gerenciamento de Tarefas

*/

// Declaração da constante 'gerenciadorDeTarefas' e atribuição da IIFE a ela.
// A IIFE cria um escopo fechado, permitindo a definição de variáveis e funções que não 
// poluem o escopo global.
const gerenciadorDeTarefas = (function() {

    // Declaração da variável 'tarefas', inicializada com um array vazio.
    // Esta variável armazena as tarefas adicionadas e é acessível apenas dentro da IIFE,
    // mantendo o estado das tarefas privado.
    let tarefas = [];

    // Define a função 'adicionar', responsável por adicionar uma nova tarefa ao array 'tarefas'.
    // A função recebe um argumento 'tarefa', que é uma string representando a tarefa a ser adicionada.
    function adicionar(tarefa) {

      // Adiciona a tarefa recebida ao final do array 'tarefas'.
    tarefas.push(tarefa);

      // Imprime no console uma mensagem informando que a tarefa foi adicionada.
    console.log(`Tarefa "${tarefa}" adicionada.`);

    }

    // Define a função 'listar', que imprime todas as tarefas armazenadas no array 'tarefas'.
    function listar() {

      // Verifica se o array 'tarefas' está vazio.
    if (tarefas.length === 0) {

        // Se estiver vazio, imprime uma mensagem informando que não há tarefas.
        console.log("Não há tarefas.");
        return;

    }

      // Se o array não estiver vazio, imprime todas as tarefas, uma por linha.
    console.log("Tarefas:");

    tarefas.forEach((tarefa, index) => {

        // Para cada tarefa no array, imprime o índice (base 1) e a tarefa.
        console.log(`${index + 1}: ${tarefa}`);
        
    });
    }

    // A IIFE retorna um objeto contendo referências para as funções 'adicionar' e 'listar'.
    // Esse objeto permite a interação com o gerenciador de tarefas de fora da IIFE, mantendo
    // as variáveis internas privadas.
    return {
        adicionar,
        listar
    };
})();

  // Utilização do gerenciador de tarefas após sua criação.
  // Chama o método 'adicionar' para adicionar tarefas ao gerenciador.
gerenciadorDeTarefas.adicionar("Comprar leite");
gerenciadorDeTarefas.adicionar("Pagar as contas");
gerenciadorDeTarefas.adicionar("Aprender JavaScript");
gerenciadorDeTarefas.adicionar("Aprender HTML");
gerenciadorDeTarefas.adicionar("Aprender CSS");

  // Após adicionar algumas tarefas, chama o método 'listar' para exibir todas as tarefas armazenadas.
gerenciadorDeTarefas.listar();  