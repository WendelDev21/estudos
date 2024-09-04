/*
Você foi contratado para desenvolver um programa de
gerenciamento de contatos em JavaScript utilizando Mapas (Map). 

O programa deve permitir que o usuário: 

- Adicione novos contatos
- Remova contatos existentes 
- Exiba a lista de contatos atualizada.

Utilizando o módulo readline para entrada de dados,
crie um programa que apresente as seguintes funcionalidades:

Adicionar Contato: O usuário deve ser capaz de adicionar
um novo contato fornecendo o nome e o número de telefone.

Remover Contato: O usuário deve ser capaz de remover
um contato existente informando apenas o nome.

Exibir Contatos: O usuário deve ser capaz de visualizar
a lista de contatos atualizada, contendo o nome e o número
de telefone de cada contato.

Sair: O usuário pode optar por sair do programa.

O programa deve utilizar um mapa (Map) para armazenar os contatos,
onde cada chave representa o nome do contato e o valor associado é
o número de telefone.

Lembre-se de apresentar um menu de opções ao usuário para
que ele possa interagir com o programa de forma intuitiva. */

// Importando o módulo 'readline' do Node.js, que permite a interação com a linha de comando.
const readline = require('readline');

// Criando uma interface de leitura e escrita a partir do módulo 'readline'.
// 'process.stdin' é definido como entrada (input), permitindo que o programa leia dados do usuário via teclado.
// 'process.stdout' é definido como saída (output), permitindo que o programa escreva dados para o terminal.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Criando um mapa chamado 'contatos' para armazenar os contatos.
// 'Map' é uma estrutura de dados que armazena pares de chave-valor, onde a chave é única.
let contatos = new Map();

// Função para adicionar um novo contato ao mapa 'contatos'.
// Recebe 'nome' e 'telefone' como parâmetros, que são as informações do contato.
function adicionarContato(nome, telefone) {

    // Adiciona o par nome-telefone ao mapa. O nome atua como chave, e o telefone como valor.
    contatos.set(nome, telefone);

    // Exibe uma mensagem de sucesso no console.
    console.log(`Contato "${nome}" adicionado com sucesso.`);
    
}

// Função para remover um contato do mapa 'contatos'.
// Recebe 'nome', que é a chave do contato a ser removido.
function removerContato(nome) {

    // Verifica se o contato existe no mapa usando o método 'has'.
    if (contatos.has(nome)) {

        // Se o contato existe, remove-o usando o método 'delete'.
        contatos.delete(nome);

        // Exibe uma mensagem de sucesso no console.
        console.log(`Contato "${nome}" removido.`);

    } else {

        // Se o contato não for encontrado, exibe uma mensagem de erro.
        console.log(`Contato "${nome}" não encontrado.`);

    }
}

// Define a função 'exibirContatos' que não recebe parâmetros e é usada para mostrar todos os
// contatos armazenados.
function exibirContatos() {

    // Exibe um cabeçalho no console para informar ao usuário que a lista de contatos será mostrada a seguir.
    console.log('Lista de Contatos:');

    // Utiliza o método 'forEach' do objeto 'Map' para iterar sobre cada par chave-valor no mapa 'contatos'.
    // 'forEach' é um método que permite executar uma função para cada item no mapa.
    // A função passada para 'forEach' recebe dois argumentos: 'telefone' (o valor) e 'nome' (a chave).
    // 'telefone' e 'nome' são, respectivamente, o número de telefone e o nome do contato armazenados no mapa.
    contatos.forEach((telefone, nome) => {

        // Para cada par chave-valor, exibe o nome do contato seguido pelo seu telefone.
        // A formatação `${nome}: ${telefone}` usa template literals para inserir os valores
        // de 'nome' e 'telefone' diretamente na string.
        console.log(`${nome}: ${telefone}`);
        
    });
}


// Define a função 'exibirMenu', que é responsável por apresentar o menu principal do programa ao usuário.
function exibirMenu() {

    // Exibe um conjunto de opções para o usuário, cada uma correspondendo a uma ação diferente no
    // gerenciador de contatos.
    console.log('\nEscolha uma opção:');
    console.log('1. Adicionar Contato');   // Opção para adicionar um novo contato.
    console.log('2. Remover Contato');     // Opção para remover um contato existente.
    console.log('3. Exibir Contatos');     // Opção para listar todos os contatos armazenados.
    console.log('4. Sair');                // Opção para sair do programa.

    // Solicita ao usuário que escolha uma das opções listadas.
    // 'rl.question' exibe uma mensagem e aguarda a entrada do usuário, que é processada em uma função callback.
    rl.question('Opção: ', (opcao) => {

        // Utiliza uma estrutura de controle 'switch' para dirigir o fluxo do programa baseado na
        // entrada do usuário.
        switch (opcao) {

            case '1':  // Caso a opção 1 seja selecionada:

                // Solicita o nome do novo contato.
                rl.question('Nome do Contato: ', (nome) => {

                    // Após obter o nome, solicita o telefone do novo contato.
                    rl.question('Telefone: ', (telefone) => {

                        // Chama a função 'adicionarContato' com os dados fornecidos pelo usuário.
                        adicionarContato(nome, telefone);

                        // Após adicionar o contato, retorna ao menu principal.
                        exibirMenu();

                    });
                });
                break;
            case '2':  // Caso a opção 2 seja selecionada:

                // Solicita o nome do contato que o usuário deseja remover.
                rl.question('Nome do Contato: ', (nome) => {
                
                    // Chama a função 'removerContato' para excluir o contato especificado.
                    removerContato(nome);
                
                    // Retorna ao menu principal.
                    exibirMenu();
                });
                break;
            
            case '3':  // Caso a opção 3 seja selecionada:
            
                // Chama a função 'exibirContatos' para listar todos os contatos.
                exibirContatos();
                
                // Retorna ao menu para permitir mais ações.
                exibirMenu();
                break;

            case '4':  // Caso a opção 4 seja selecionada:

                // Exibe uma mensagem indicando que o programa será encerrado.
                console.log('Saindo do Programa.');

                // Fecha a interface de linha de comando, efetivamente encerrando o programa.
                rl.close();
                break;

            default:  // Caso uma entrada inválida seja fornecida:

                // Informa ao usuário que a opção escolhida é inválida.
                console.log('Opção Inválida. Tente Novamente.');

                // Retorna ao menu principal para permitir outra tentativa.
                exibirMenu();

        }
    });
}

// Exibe uma mensagem de boas-vindas ao iniciar o programa.
console.log('Bem-vindo ao Gerenciador de Contatos!');

// Chama a função 'exibirMenu' para iniciar a interação com o usuário.
exibirMenu();

