/*
Vamos criar um exemplo prático onde utilizaremos um Map
para armazenar informações sobre filmes e suas respectivas
avaliações. Neste exemplo, vamos implementar as funcionalidades
de: 

- Adicionar um novo filme,
- Excluir um filme,
- Exibir a lista de filmes e suas avaliações,
- Verificar se um filme está na lista.*/

// Inicializa um novo objeto Map para armazenar pares de filmes e suas avaliações.
let filmesAvaliacoes = new Map();

// Define uma função para adicionar um filme e sua avaliação ao mapa.
function adicionarFilme(nome, avaliacao) {

    // Usa o método 'set' para adicionar ou atualizar o nome do filme com a avaliação correspondente no mapa.
    filmesAvaliacoes.set(nome, avaliacao);

    // Exibe uma mensagem no console confirmando a adição do filme com sua avaliação.
    console.log(`Filme "${nome}" adicionado com avaliação ${avaliacao}.`);

}

// Define uma função para excluir um filme do mapa.
function excluirFilme(nome) {

    // Verifica se o filme existe no mapa usando o método 'has'.
    if (filmesAvaliacoes.has(nome)) {

        // Se o filme existe, usa o método 'delete' para remover o filme do mapa.
        filmesAvaliacoes.delete(nome);

        // Exibe uma mensagem no console confirmando a exclusão do filme.
        console.log(`Filme "${nome}" excluído.`);

    } else {

        // Se o filme não for encontrado, exibe uma mensagem no console informando que o filme não foi encontrado.
        console.log(`Filme "${nome}" não encontrado.`);

    }
}

// Define uma função para exibir todos os filmes e suas avaliações.
function exibirListaFilmes() {

    // Exibe um cabeçalho no console antes de listar os filmes.
    console.log('Lista de Filmes e Avaliações:');

    // Itera sobre cada entrada no mapa de filmes usando o método 'forEach'.
    filmesAvaliacoes.forEach((avaliacao, nome) => {
        
        // Exibe o nome de cada filme e sua avaliação no console.
        console.log(`${nome}: ${avaliacao}`);

    });
}

// Define uma função para verificar se um filme específico está na lista.
function verificarFilme(nome) {

    // Verifica se o filme está no mapa usando o método 'has'.
    if (filmesAvaliacoes.has(nome)) {

        // Se o filme estiver na lista, exibe uma mensagem no console confirmando sua presença.
        console.log(`O filme "${nome}" está na lista.`);

    } else {

        // Se o filme não estiver na lista, exibe uma mensagem no console informando sua ausência.
        console.log(`O filme "${nome}" não está na lista.`);
        
    }
}

// Chama a função 'adicionarFilme' para adicionar alguns filmes e suas avaliações ao mapa.
adicionarFilme('Matrix', 9.0);
adicionarFilme('Senhor dos Anéis', 8.5);
adicionarFilme('Harry Potter', 8.0);

// Chama a função 'exibirListaFilmes' para exibir todos os filmes e suas avaliações.
exibirListaFilmes();

// Chama a função 'verificarFilme' para verificar se certos filmes estão na lista.
verificarFilme('Matrix');
verificarFilme('Batman');

// Chama a função 'excluirFilme' para remover um filme específico da lista.
excluirFilme('Senhor dos Anéis');

// Chama a função 'exibirListaFilmes' novamente para mostrar a lista de filmes após a exclusão de um filme.
exibirListaFilmes();