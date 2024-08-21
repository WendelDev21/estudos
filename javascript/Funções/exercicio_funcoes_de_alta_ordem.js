/*
Exercício: Filtrar e Transformar Dados de Produtos

Objetivo: Implementar uma solução que filtre um array de
objetos representando produtos e, em seguida, transforme os
dados filtrados. O filtro deve selecionar apenas os produtos
com preço acima de um certo valor. Após o filtro, uma
transformação deve ser aplicada para aumentar o preço dos
produtos filtrados por uma porcentagem específica.

Dados de Entrada:

Um array de objetos produtos, onde cada objeto tem nome, categoria e preco.
Um valor mínimo de preço para o filtro.
Uma porcentagem para aumentar o preço dos produtos filtrados.
*/

// Define um array de objetos chamado 'produtos'. Cada objeto representa um produto,
// contendo propriedades para 'nome', 'categoria', e 'preco'.

const produtos = [
    { nome: "Caderno", categoria: "Papelaria", preco: 10 },
    { nome: "Lápis", categoria: "Papelaria", preco: 2 },
    { nome: "Teclado", categoria: "Eletrônicos", preco: 100 },
    { nome: "Mouse", categoria: "Eletrônicos", preco: 50 }
];

function filtrarProdutos(produtos, valorMinimo) {
    return produtos.filter(produto => produto.preco > valorMinimo);
}
function aumentarPreco(produtos, porcentagem) {
    return produtos.map(produto => ({
        ...produto,
        preco: produto.preco * (1 + porcentagem / 100)
    }))
}

const produtosFiltrados = filtrarProdutos(produtos, 20);

const produtosComPrecoAumentado = aumentarPreco(produtosFiltrados, 10);

console.log(produtosComPrecoAumentado)
