/*
Exercício: Remoção de Duplicatas em uma Lista

O objetivo deste exercício é desenvolver uma função que recebe uma
lista com itens duplicados e retorna uma nova lista sem duplicatas,
utilizando apenas métodos tradicionais de array, como filter.

Descrição do Exercício:

- Criar uma Lista com Duplicatas: Defina uma lista inicial que contenha alguns itens duplicados.

- Função de Remoção de Duplicatas: Implemente uma função que elimina todas as duplicatas da lista
utilizando o método filter em combinação com indexOf.

- Exibir a Lista Limpa: Após a remoção das duplicatas, exiba a nova lista sem duplicatas.*/


// Lista inicial com alguns itens repetidos
// Aqui definimos um array chamado 'listaComRepetidos' que contém várias frutas, 
// incluindo algumas que aparecem mais de uma vez, como 'maçã' e 'banana'.
// let listaComRepetidos = ['maçã', 'banana', 'maçã', 'laranja', 'banana', 'uva'];
let listaComRepetidos = ['A', 'A', 'B', 'C', 'C', 'C', 'D', 'A', 'A', 'E'];

// Função para remover itens repetidos da lista
// 'removerRepetidos' é uma função que recebe uma lista como parâmetro e retorna uma nova lista sem duplicatas.
function removerRepetidos(lista) {

    // Cria um novo array onde cada item é adicionado somente uma vez
    // Usamos o método 'filter' para criar este novo array. 'filter' percorre cada elemento da lista original.
    let listaSemRepetidos = lista.filter((item, indice) => {

        // Dentro do 'filter', verificamos se o índice do item atual é o mesmo do índice
        // de sua primeira ocorrência na lista.
        // 'indexOf' retorna o primeiro índice em que o item é encontrado na lista.
        // Se o índice do elemento durante a iteração for igual ao índice retornado por 'indexOf',
        // significa que é a primeira vez que esse elemento aparece.
        // Assim, evitamos adicionar duplicatas ao novo array 'listaSemRepetidos'.
        return lista.indexOf(item) === indice;
        
    });

    // Retorna a nova lista sem itens repetidos
    // O resultado é um array que contém cada item da lista original, mas sem repetições.
    return listaSemRepetidos;
}

// Chama a função para remover itens repetidos e guarda o resultado
// Aqui chamamos a função 'removerRepetidos' passando 'listaComRepetidos' como argumento.
// O resultado, que é uma lista sem duplicatas, é armazenado na variável 'listaLimpa'.
let listaLimpa = removerRepetidos(listaComRepetidos);

// Mostra a lista limpa no console
// Finalmente, usamos 'console.log' para imprimir a 'listaLimpa', que agora contém as frutas sem repetições.
console.log('Lista sem repetições:', listaLimpa);