// Exemplo de Gerenciamento de Lista de Tarefas

// Importa o módulo 'readline' do Node.js, que é usado para ler dados do terminal.
const readline = require('readline');

// Cria uma interface para leitura e escrita no terminal.
// 'process.stdin' é um stream de entrada padrão (teclado).
// 'process.stdout' é um stream de saída padrão (tela).
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Declara um array 'tarefas' com três tarefas iniciais.
let tarefas = ['Comprar pão', 'Estudar JavaScript', 'Ir ao médico'];

// Função que exibe o menu de opções para o usuário no terminal.
function exibirMenu() {
    console.log('\nEscolha uma opção:');
    console.log('1. Adicionar Tarefa');
    console.log('2. Alterar Tarefa');
    console.log('3. Excluir Tarefa');
    console.log('4. Exibir Tarefas');
    console.log('5. Sair\n');
}

// Função para adicionar uma nova tarefa à lista de tarefas.
// Esta função interage diretamente com o usuário através do terminal para coletar novas tarefas.
function adicionarTarefa() {

    // O método 'rl.question' é utilizado para exibir uma mensagem no terminal e
    // esperar por uma entrada do usuário.
    // 'Digite a nova tarefa: ' é a mensagem que será mostrada ao usuário, pedindo
    // que ele digite o nome da nova tarefa.
    // A função de callback (segundo argumento de 'rl.question') é chamada assim que o
    // usuário insere a tarefa e pressiona Enter.
    rl.question('Digite a nova tarefa: ', (novaTarefa) => {

        // Dentro da função de callback, o parâmetro 'novaTarefa' contém o texto que
        // o usuário digitou no terminal.
        // Este texto é então adicionado ao array 'tarefas' usando o método 'push'.
        // 'push' é um método de arrays em JavaScript que adiciona um novo elemento ao final do array.
        tarefas.push(novaTarefa);
        
        // Após adicionar a nova tarefa ao array, uma mensagem de confirmação é exibida no terminal.
        // 'console.log' é usado para imprimir a mensagem 'Tarefa adicionada com sucesso!' no terminal.
        console.log('Tarefa adicionada com sucesso!');
        
        // Depois de adicionar a tarefa e exibir a mensagem de sucesso, a função 'executarPrograma' é
        // chamada novamente.
        // Isso faz com que o menu seja exibido novamente, permitindo ao usuário continuar usando o programa
        // sem precisar reiniciá-lo manualmente.
        executarPrograma();

    });
}


// Função para alterar uma tarefa existente na lista de tarefas.
// Esta função interage com o usuário para coletar informações sobre qual tarefa deve ser
// alterada e qual será o novo conteúdo da tarefa.
function alterarTarefa() {

    // Solicita ao usuário para digitar o índice da tarefa que deseja alterar.
    // O índice é usado para identificar a posição da tarefa dentro do array 'tarefas'.
    // 'Digite o índice da tarefa para alterar (0, 1, 2,...): ' é a mensagem exibida para o usuário.
    rl.question('Digite o índice da tarefa para alterar (0, 1, 2,...): ', (indice) => {
        
        // Converte o índice recebido de string para número para manipulação adequada.
        indice = parseInt(indice);
        
        // Verifica se o índice digitado é válido, ou seja, se é um número dentro do intervalo do array.
        if (indice >= 0 && indice < tarefas.length) {
        
            // Solicita ao usuário para digitar a nova descrição da tarefa após ter confirmado que o
            // índice é válido.
            rl.question('Digite a nova descrição da tarefa: ', (novaTarefa) => {
        
                // Atualiza a tarefa no índice especificado com a nova descrição fornecida pelo usuário.
                tarefas[indice] = novaTarefa;
                
                // Exibe uma mensagem de sucesso indicando que a tarefa foi alterada.
                console.log('Tarefa alterada com sucesso!');
                
                // Chama a função 'executarPrograma' para retornar ao menu inicial, permitindo mais interações.
                executarPrograma();

            });
        
        } else {
        
            // Caso o índice fornecido seja inválido (não está dentro do intervalo do array), exibe
            // uma mensagem de erro.
            console.log('Índice inválido!');
            
            // Retorna ao menu inicial para permitir ao usuário corrigir o erro ou escolher outra ação.
            executarPrograma();

        }
    });
}


// Função para excluir uma tarefa da lista de tarefas.
// Esta função pede ao usuário que forneça o índice da tarefa que deseja remover.
function excluirTarefa() {

    // Solicita ao usuário que insira o índice da tarefa que deseja excluir.
    // 'Digite o índice da tarefa para excluir (0, 1, 2,...): ' é a mensagem exibida para o usuário,
    // pedindo que ele informe o índice numérico da tarefa a ser removida.
    rl.question('Digite o índice da tarefa para excluir (0, 1, 2,...): ', (indice) => {
        
        // Converte o índice recebido de uma string para um número inteiro, 
        // pois os índices de array em JavaScript são valores numéricos.
        indice = parseInt(indice);

        // Verifica se o índice fornecido é válido, ou seja, se está dentro do intervalo
        // dos índices do array 'tarefas'.
        // 'indice >= 0' garante que o índice não seja negativo.
        // 'indice < tarefas.length' garante que o índice não seja maior ou igual ao
        // número de tarefas, evitando um erro de 'out of bounds'.
        if (indice >= 0 && indice < tarefas.length) {

            // Remove a tarefa no índice especificado.
            // O método 'splice' é usado para remover elementos de um array:
            // o primeiro parâmetro indica o índice do primeiro elemento a ser removido,
            // e o segundo parâmetro indica o número de elementos a serem removidos.
            tarefas.splice(indice, 1);

            // Imprime uma mensagem no console informando que a tarefa foi excluída com sucesso.
            console.log('Tarefa excluída com sucesso!');

        } else {

            // Se o índice fornecido for inválido, imprime uma mensagem de erro no console.
            console.log('Índice inválido!');

        }

        // Chama a função 'executarPrograma' para retornar ao menu principal,
        // permitindo que o usuário continue a interagir com o programa.
        // Isso mantém o programa em execução, evitando que ele termine após a operação de exclusão.
        executarPrograma();

    });
}

// Função para exibir todas as tarefas cadastradas no sistema.
// Esta função não recebe parâmetros e sua finalidade é listar todas as tarefas presentes no array 'tarefas'.
function exibirTarefas() {

    // Inicia a exibição com uma linha de cabeçalho 'Tarefas:' para indicar que a
    // listagem das tarefas seguirá abaixo.
    console.log('Tarefas:');

    // O método 'forEach' é utilizado para percorrer todo o array 'tarefas'. 
    // 'forEach' executa uma função para cada elemento do array. 
    // Cada elemento é passado para a função callback como 'tarefa', e seu
    // índice no array é passado como 'index'.
    tarefas.forEach((tarefa, index) => {

        // Dentro da função callback, cada tarefa e seu respectivo índice são exibidos no console.
        // Utiliza-se template literals (delimitados por crases) para formatar a saída,
        // onde `${index}` insere o índice da tarefa e `${tarefa}` insere o nome da tarefa.
        // Isso permite que as tarefas sejam listadas de forma numerada, facilitando a visualização.
        console.log(`${index}: ${tarefa}`);

    });

    // Após listar todas as tarefas, a função 'executarPrograma' é chamada novamente.
    // Isso permite que o menu de opções seja exibido novamente para o usuário, mantendo o programa em execução.
    // O usuário pode então escolher realizar outra ação, como adicionar, alterar ou excluir uma tarefa.
    executarPrograma();
}



// Função principal que controla o fluxo do programa.
// Esta função é responsável por exibir o menu de opções e processar as escolhas do usuário.
function executarPrograma() {

    // Chama a função 'exibirMenu', que imprime as opções do menu no console.
    // Isso permite ao usuário saber quais ações estão disponíveis para escolha.
    exibirMenu();
    
    // Solicita ao usuário para escolher uma opção do menu.
    // 'Escolha uma opção: ' é a mensagem exibida no console, e a função espera pela entrada do usuário.
    rl.question('Escolha uma opção: ', (opcao) => {
        
        // Utiliza uma estrutura 'switch' para direcionar o fluxo do programa
        // com base na opção escolhida pelo usuário.
        switch (opcao) {
            case '1':  // Caso o usuário digite '1', a função para adicionar uma tarefa é chamada.
                adicionarTarefa();
                break;
            case '2':  // Caso o usuário digite '2', a função para alterar uma tarefa é chamada.
                alterarTarefa();
                break;
            case '3':  // Caso o usuário digite '3', a função para excluir uma tarefa é chamada.
                excluirTarefa();
                break;
            case '4':  // Caso o usuário digite '4', a função para exibir todas as tarefas é chamada.
                exibirTarefas();
                break;
            case '5':  // Caso o usuário digite '5', uma mensagem de despedida é exibida e o programa é encerrado.
                console.log('Saindo do programa...');
                rl.close();  // Encerra a interface de leitura e escrita, terminando a interação com o usuário.
                break;
            default:  // Se o usuário digitar uma opção inválida, uma mensagem de erro é exibida.
                console.log('Opção inválida! Tente novamente.');
                executarPrograma();  // A função 'executarPrograma' é chamada novamente para que o usuário possa fazer outra tentativa.
                break;
        }
    });
}


// Inicia o programa chamando a função 'executarPrograma'.
executarPrograma();
