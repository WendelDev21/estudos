/*
Exercício: 

O exercício consiste em criar um sistema de carrinho de compras em
JavaScript utilizando closures para manter privados os detalhes de
implementação e o estado do carrinho. O sistema deve permitir
adicionar e remover itens, listar todos os itens, e calcular o
total do carrinho. Aqui está um resumo das tarefas a serem realizadas:

Implementar a Função do Carrinho: Crie uma função chamada
criarCarrinho que retorna um objeto contendo métodos para
manipular os itens do carrinho.

Métodos do Carrinho:

- adicionarItem(nome, preco, quantidade): Adiciona um item ao carrinho ou atualiza sua
 quantidade se já estiver presente.

- removerItem(nome): Remove um item do carrinho pelo nome.
- calcularTotal(): Retorna o valor total do carrinho.
- listarItens(): Retorna uma string listando todos os itens do carrinho, com seus preços e quantidades.
- Teste o Sistema do Carrinho: Use o sistema de carrinho para adicionar itens, remover
 um item, listar os itens e mostrar o total do carrinho.
 
 */

 function criarCarrinho() {

    const itens = [];

    return {

        adicionarItem: function (nome, preco, quantidade) {

            const item = itens.find(item => item.nome === nome);

            if (item) {

                item.quantidade += quantidade;

            } else {

                itens.push({nome, preco, quantidade});
            }
        },

        removerItem: function (nome) {

            const index = itens.findIndex(item => item.nome === nome);

            if (index> -1) {

                itens.splice(index, 1);
            }
        },

        calcularTotal: function () {

            return itens.reduce((total, item) => total + (item.preco * item.quantidade), 0);

        },

        listarItens: function () {

            return itens.map(item => `${item.nome} (Preço: ${item.preco}, Quantidade: ${item.quantidade})`).join(', ');

        }
    };
 }

 const carrinho = criarCarrinho();

 carrinho.adicionarItem('Maçã', 1.99, 25);
 carrinho.adicionarItem('Pão', 0.99, 2);

 console.log(carrinho.listarItens());
 console.log(`Total: R$$${carrinho.calcularTotal().toFixed(2)}`);
 carrinho.removerItem('Pão');
 console.log(carrinho.listarItens());