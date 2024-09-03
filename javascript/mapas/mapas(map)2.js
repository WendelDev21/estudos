let filmesAvaliacoes = new Map();

function adicionarFilme(nome, avaliacao) {
    
    filmesAvaliacoes.set(nome, avaliacao);

    console.log(`Filme "${nome}" adicionado com avaliação ${avaliacao}.`);
}

function excluirFilme(nome) {
    
    if (filmesAvaliacoes.has(nome)) {

        filmesAvaliacoes.delete(nome);

        console.log(`Filme "${nome}" excluído.`);

    }else {

        console.log(`Filme "${nome}" não encontrado.`);

    }    
}

function exibirListaFilmes() {
    
    console.log('Lista de filmes e vavliações: ');

    filmesAvaliacoes.forEach((avaliacao, nome) => {

        console.log(`${nome}: ${avaliacao}`);

    });
}

function verificarFilme(nome) {
    
    if (filmesAvaliacoes.has(nome)) {

        console.log(`O filme "${nome}" está na lista.`);

    } else {

        console.log(`O filme "${nome}" não está na lista.`);
    }
}

adicionarFilme('Matrix', 9.0);
adicionarFilme('Senhor dos Anéis', 8.5);
adicionarFilme('Harry Potter', 8.0);

exibirListaFilmes();

verificarFilme('Matrix');
verificarFilme('Batman');

excluirFilme('Senhor dos Anéis');

exibirListaFilmes();