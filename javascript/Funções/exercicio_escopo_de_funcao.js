/*
Exercício: Controle de estoque

Escrever uma função que ajuste o estoque de um produto. 
A função deve receber dois parâmetros: O nome do produto 
e a quantidade (positiva para adicionar ao estoque, negativa
para remover). O estoque inicial de produtos é armazenado em 
um objeto no escopo global. A função deve ajustar o estoque
com base na quantidade fornecida e retornar o estoque 
atualizado do produto específico.

*/

let estoque = {
    canetas: 10,
    cadernos: 5,
    borrachas: 7
};

function ajustarEstoque(nomeDoProduto, quantidade) {
    if(estoque[nomeDoProduto] !== undefined) {
        estoque[nomeDoProduto] += quantidade;
        return estoque[nomeDoProduto];
    }else {
        console.log("Produto não encontrado no estoque.");
        return null;
    }
}

console.log(`Estoque de canetas antes do ajuste: ${estoque.canetas}`);
console.log(`Estoque de cadernos antes do ajuste: ${estoque.cadernos}`);
console.log(`Estoque de borrachas antes do ajuste: ${estoque.borrachas}`);

let estoqueCanetasAtualizado = ajustarEstoque('canetas', 5);

console.log(`Estoque de canetas após do ajuste: ${estoqueCanetasAtualizado}`);

let estoqueCadernosAtualizado = ajustarEstoque('cadernos', -3);
console.log(`Estoque de cadernos após do ajuste: ${estoqueCadernosAtualizado}`);

let estoqueBorrachasAtualizado = ajustarEstoque('borrachas', -6);
console.log(`Estoque de borrachas após do ajuste: ${estoqueBorrachasAtualizado}`);