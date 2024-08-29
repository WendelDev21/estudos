/*
Exercício: Lista de Compras em JavaScript

Você foi contratado para desenvolver um programa
de lista de compras em JavaScript. O programa deve
permitir que os usuários adicionem itens à lista,
removam itens existentes e exibam a lista completa de compras.

Requisitos:

- O programa deve permitir que os usuários adicionem novos itens à lista de compras.
- O programa deve permitir que os usuários removam itens da lista de compras.
- O programa deve exibir a lista de compras completa, mostrando todos os itens adicionados.
- Os itens da lista de compras podem ser strings que representam nomes de produtos.
- O programa deve fornecer um menu de opções para o usuário interagir, incluindo
as opções de adicionar um item, remover um item e exibir a lista de compras.
- O programa deve continuar em execução até que o usuário decida sair.


Exemplo de execução:

Lista de Compras
================

1. Adicionar Item
2. Remover Item
3. Exibir Lista de Compras
4. Sair


*/

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let listaDeCompras = ['pão', 'leite', 'carne', 'ovos'];

function exibirMenu() {
    
    console.log(`
    Lista de Compras:
    =================
    
    1. Adicionar Item
    2. Remover Item
    3. Exibir Lista de Compras
    4. Sair\n
    `);
}

function adicionarItem() {
    
    rl.question('Digite o novo item: ', (novoItem) => {

        listaDeCompras.push(novoItem);

        console.log('Item adicionado com sucesso!');

        executarLista();

    });
}

function removerItem() {
    
    rl.question('Digite o indice do item para excluir (0, 1, 2, 3...): ', (indice) => {

        indice = parseInt(indice);

        if (indice >= 0 && indice < listaDeCompras.length) {

            listaDeCompras.splice(indice, 1);

            console.log('Item removido com sucesso!');

        } else {

            console.log('Indice inválido!');
        }

        executarLista();
    });
}
function exibirLista() {
    

    console.log('Itens:');

    listaDeCompras.forEach((listaDeCompras, index) => {

        console.log(`${index}: ${listaDeCompras}`);

    });

    executarLista();
}
function executarLista() {
    
    exibirMenu();

    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                adicionarItem();
                break;
            case '2':
                removerItem();
                break;
            case '3':
                exibirLista();
                break;
            case '4':
                console.log('Saindo da lista de compras...');
                rl.close();
                break;
        
            default:
                console.log('Opção inválida!. Tente novamente');
                executarLista();
                break;
        }
    });
    
}

executarLista();