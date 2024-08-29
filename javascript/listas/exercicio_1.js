/*
Exercício: Gerenciamento de Lista de Convidados
Você está organizando um evento e precisa gerenciar uma lista de convidados. 

Você deverá implementar uma série de funcionalidades para:

- Adicionar,
- Remover, 
- Verificar
- Alterar informações dos convidados na lista.


- Número de Convidados: Implemente uma função que retorne o número
total de convidados na lista.

- Ordenar Convidados: Antes de exibir a lista de convidados, certifique-se
de que está ordenada alfabeticamente.*/

// Inicializa um array 'listaDeConvidados' com cinco nomes.
let listaDeConvidados = ['Alice', 'Carlos', 'Patrícia', 'Felipe', 'Bruna'];

// Função para adicionar um novo convidado à lista de convidados.
// A função recebe um parâmetro 'nome', que é uma string representando o nome do convidado.
function adicionarConvidado(nome) {
    
    // Verifica se o nome já existe na lista usando o método 'includes'.
    // O método 'includes' retorna true se o item estiver no array, caso contrário, retorna false.
    if (!listaDeConvidados.includes(nome)) {
    
        // Adiciona o nome ao array usando o método 'push'.
        // 'push' adiciona o elemento ao final do array e retorna o novo comprimento do array.
        listaDeConvidados.push(nome);
    
        // Ordena a lista de convidados alfabeticamente usando o método 'sort'.
        // 'sort' altera o próprio array e também retorna a referência para o array.
        listaDeConvidados.sort();
    
    } else {
    
        // Se o nome já estiver na lista, imprime uma mensagem indicando que já está na lista.
        console.log(nome + ' já está na lista de convidados.');
    
    }
}


// Função para remover um convidado da lista.
// Recebe um parâmetro 'nome', que é o nome do convidado a ser removido.
function removerConvidado(nome) {

    // Utiliza o método 'indexOf' para encontrar o índice do nome no array.
    // 'indexOf' retorna o índice do primeiro elemento encontrado que satisfaz a
    // condição ou -1 se nenhum for encontrado.
    let indice = listaDeConvidados.indexOf(nome);

    if (indice !== -1) {
    
        // Remove o elemento no índice encontrado usando 'splice'.
        // O primeiro argumento é o índice para começar a remover, o segundo é o número de elementos a remover.
        listaDeConvidados.splice(indice, 1);
    
    } else {
    
        // Se o nome não for encontrado, imprime uma mensagem indicando que não foi encontrado.
        console.log(nome + ' não encontrado na lista.');
    
    }
}


// Função para verificar se uma pessoa está na lista de convidados.
// Recebe um parâmetro 'nome', que é o nome do convidado a verificar.
function checarPresenca(nome) {

    // Verifica se o nome está no array usando 'includes'.
    if (listaDeConvidados.includes(nome)) {

        // Se estiver na lista, imprime uma mensagem confirmando sua presença.
        console.log(nome + ' está na lista de convidados.');

    } else {

        // Se não estiver na lista, imprime uma mensagem indicando que não está na lista.
        console.log(nome + ' não está na lista de convidados.');

    }
}

// Função para listar todos os convidados.
function listarConvidados() {

    // Utiliza 'join' para criar uma string com todos os nomes do array, separados por vírgula e espaço.
    // 'join' converte todos os elementos do array em strings, se necessário, e os concatena.
    console.log('Lista de Convidados:', listaDeConvidados.join(', '));
}

// Função para obter o número total de convidados.
function numeroDeConvidados() {

    // Utiliza a propriedade 'length' para obter o número de elementos no array.
    console.log('Total de convidados:', listaDeConvidados.length);
}

// Função para alterar o nome de um convidado.
// Recebe dois parâmetros, 'nomeAtual' que é o nome atual do convidado na
// lista, e 'novoNome', que é o novo nome a ser registrado.
function alterarConvidado(nomeAtual, novoNome) {

    // Primeiro, utiliza o método 'indexOf' para encontrar o índice do nome atual na lista de convidados.
    // Se o nome não existir na lista, 'indexOf' retorna -1.
    let indice = listaDeConvidados.indexOf(nomeAtual);

    if (indice !== -1) { // Verifica se o índice é diferente de -1, o que indica que o convidado foi encontrado.

        // Verifica se o novo nome já existe na lista usando 'includes'.
        // Isso evita duplicar nomes na lista.
        if (!listaDeConvidados.includes(novoNome)) {

            // Atribui o novo nome ao índice encontrado, atualizando diretamente na lista de convidados.
            listaDeConvidados[indice] = novoNome;

            // Ordena novamente a lista de convidados após a alteração, mantendo a ordem alfabética.
            listaDeConvidados.sort();

            // Imprime uma mensagem confirmando a alteração.
            console.log(nomeAtual + ' foi alterado para ' + novoNome + ' na lista de convidados.');

        } else {

            // Caso o novo nome já exista na lista, imprime uma mensagem de erro.
            console.log(novoNome + ' já está na lista de convidados. Escolha um nome diferente.');
        }

    } else {

        // Se o nome atual não foi encontrado na lista, imprime uma mensagem indicando
        // que não pode ser alterado.
        console.log(nomeAtual + ' não encontrado na lista de convidados.');
    }
}

// Chamadas de exemplo das funções para demonstração.
adicionarConvidado('Marcos'); // Tentativa de adicionar 'Marcos' à lista.
removerConvidado('Alice');   // Tentativa de remover 'Alice' da lista.
checarPresenca('Carlos');    // Verifica se 'Carlos' está na lista.
listarConvidados();          // Exibe todos os convidados.
numeroDeConvidados();        // Exibe o número total de convidados.

// Chamadas de exemplo para a função de alteração.
alterarConvidado('Carlos', 'Roberto');  // Tentativa de alterar 'Carlos' para 'Roberto'.

// Novamente listando convidados e mostrando o número total para verificar as alterações.
listarConvidados();          
numeroDeConvidados(); 