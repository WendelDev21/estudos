/*
Exercício: Gerenciamento de Filmes Favoritos

Você é um desenvolvedor de um aplicativo de gerenciamento
de filmes favoritos. Crie um programa em JavaScript que
permita aos usuários adicionar, remover e listar filmes
favoritos usando conjuntos (Set).

O programa deve ter as seguintes funcionalidades:

1 - Adicionar Filme Favorito: O usuário deve ser capaz de
adicionar um filme favorito ao conjunto.

2 - Remover Filme Favorito: O usuário deve ser capaz de remover
um filme favorito do conjunto.

3 - Listar Filmes Favoritos: O programa deve exibir todos os
filmes favoritos presentes no conjunto.

4 - Sair: O usuário pode optar por sair do programa.

O programa deve continuar solicitando ao usuário para
escolher uma opção até que ele decida sair.*/

// Importa o módulo readline necessário para interação com o usuário via console.
const readline = require('readline');

// Cria uma interface de linha de comando para entrada e saída de dados.
const rl = readline.createInterface({
    input: process.stdin,  // Define a entrada padrão do sistema, normalmente o teclado.
    output: process.stdout // Define a saída padrão do sistema, normalmente o console.
});

// Cria um conjunto para armazenar os títulos dos filmes favoritos.
let filmesFavoritos = new Set();

// Define a função 'adicionarFilme' que não recebe parâmetros externos e é responsável por
// adicionar um novo filme ao conjunto de filmes favoritos.
function adicionarFilme() {

    // Solicita ao usuário para inserir o nome do filme que deseja adicionar aos favoritos.
    // A função 'rl.question' do módulo 'readline' é usada para interagir com o usuário através do console.
    // O primeiro argumento é a string que será exibida ao usuário, pedindo que ele digite o nome do filme.
    // O segundo argumento é uma função callback que será chamada assim que o usuário inserir sua
    // resposta e pressionar Enter.
    rl.question('Digite o nome do filme a ser adicionado: ', (filme) => {
        
        // Adiciona o nome do filme ao conjunto 'filmesFavoritos'.
        // O método 'add' do objeto Set é usado para inserir o filme no conjunto.
        // Sets automaticamente evitam duplicatas, então se o mesmo nome for inserido
        // novamente, ele não será adicionado duas vezes.
        filmesFavoritos.add(filme);

        // Exibe uma mensagem no console confirmando que o filme foi adicionado.
        // Usa-se template literals, delimitados por crases, para inserir a variável 'filme'
        // diretamente na string de mensagem.
        console.log(`Filme "${filme}" adicionado aos favoritos.`);

        // Chama a função 'exibirMenu' para retornar ao menu principal.
        // Isso permite que o usuário continue interagindo com o programa após adicionar um filme,
        // escolhendo outras opções como adicionar mais filmes, remover filmes, listar os filmes ou
        // sair do programa.
        exibirMenu();

    });
}






// Define a função 'removerFilme' que não recebe parâmetros externos. Essa função gerencia a
// remoção de um filme dos favoritos.
function removerFilme() {

    // Solicita ao usuário que digite o nome do filme que deseja remover da lista de favoritos.
    // 'rl.question' é uma função do módulo 'readline' que exibe uma pergunta no console e
    // espera pela entrada do usuário.
    // Após o usuário digitar a resposta e pressionar Enter, a resposta é passada como argumento para
    // a função callback.
    rl.question('Digite o nome do filme a ser removido: ', (filme) => {
        
        // Verifica se o filme especificado realmente existe no conjunto 'filmesFavoritos'.
        // O método 'has' é usado para checar a presença de um elemento no conjunto, retornando
        // true se o elemento estiver presente.
        if (filmesFavoritos.has(filme)) {

            // Se o filme está presente no conjunto, usa o método 'delete' para removê-lo.
            // 'delete' também retorna um booleano indicando se o elemento foi removido com sucesso.
            filmesFavoritos.delete(filme);

            // Exibe uma mensagem de confirmação no console informando que o filme foi removido.
            console.log(`Filme "${filme}" removido dos favoritos.`);

        } else {

            // Se o filme não for encontrado no conjunto, informa ao usuário que o filme não foi encontrado.
            console.log(`Filme "${filme}" não encontrado nos favoritos.`);
        }

        // Após tentar remover o filme, independente do resultado, chama a função 'exibirMenu' para
        // mostrar as opções disponíveis novamente.
        // Isso permite que o usuário continue utilizando o sistema sem necessidade de reiniciar o programa.
        exibirMenu();

    });
}

// Define a função 'listarFilmes' que não recebe parâmetros. Sua função é exibir todos
// os filmes no conjunto de filmes favoritos.
function listarFilmes() {

    // Exibe um cabeçalho no console para indicar a seção onde os filmes favoritos serão listados.
    console.log('Filmes favoritos:');

    // Itera sobre cada elemento do conjunto 'filmesFavoritos'. 
    // O método 'forEach' é utilizado para percorrer o conjunto. Para cada filme no conjunto,
    // a função passada para 'forEach' é chamada.
    // 'filme' é a variável que representa cada elemento do conjunto durante a iteração.
    filmesFavoritos.forEach(filme => {

        // Imprime o nome do filme no console. Cada filme é exibido em uma nova linha, graças ao
        // uso do console.log.
        console.log(filme);
        
    });

    // Após listar todos os filmes, chama a função 'exibirMenu' para retornar ao menu principal do sistema.
    // Isso permite que o usuário continue a interagir com o programa, escolhendo outras opções como
    // adicionar mais filmes, remover um filme ou sair do programa.
    exibirMenu();
}

// Define a função 'exibirMenu', responsável por mostrar as opções disponíveis para o
// usuário e processar sua escolha.
function exibirMenu() {

    // Exibe uma mensagem clara no console solicitando que o usuário escolha uma das opções disponíveis.
    console.log('\nEscolha uma opção:');
    console.log('1. Adicionar Filme Favorito');  // Opção para adicionar um novo filme aos favoritos.
    console.log('2. Remover Filme Favorito');   // Opção para remover um filme existente dos favoritos.
    console.log('3. Listar Filmes Favoritos');  // Opção para visualizar todos os filmes favoritos.
    console.log('4. Sair');                     // Opção para encerrar o programa.

    // Solicita ao usuário que digite o número correspondente à opção desejada.
    // 'rl.question' é usada para capturar a entrada do usuário, que é então passada para a função
    // callback como 'opcao'.
    rl.question('Opção: ', (opcao) => {
        
        // Utiliza uma estrutura 'switch' para direcionar a execução do programa com base na entrada do usuário.
        switch (opcao) {
            case '1':
                adicionarFilme();  // Chama a função 'adicionarFilme' se a opção 1 for escolhida.
                break;
            case '2':
                removerFilme();  // Chama a função 'removerFilme' se a opção 2 for escolhida.
                break;
            case '3':
                listarFilmes();  // Chama a função 'listarFilmes' se a opção 3 for escolhida.
                break;
            case '4':
                // Exibe uma mensagem de encerramento e fecha a interface de linha de comando.
                console.log('Encerrando o programa.');
                rl.close();  // Encerra a interface de linha de comando, terminando a interação com o usuário.
                break;
            default:
                // Se uma opção inválida for inserida, informa ao usuário e exibe o menu novamente.
                console.log('Opção inválida. Tente novamente.');
                exibirMenu();
        }
    });
}


// Exibe uma mensagem de boas-vindas ao iniciar o programa.
console.log('Bem-vindo ao Gerenciador de Filmes Favoritos!');

// Inicializa o programa exibindo o menu principal.
exibirMenu();
