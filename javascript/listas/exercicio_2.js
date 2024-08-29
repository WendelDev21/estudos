let listaDeNomes = ['Alice', 'Bruno', 'Ana', 'Alexandre', 'Carla', 'Antônio', 'Amanda'];

function extrairNomesComA(nomes) {
    let nomesComA = nomes.filter(nome => {
        return nome.startsWith('A');
    });
    
    return nomesComA;
}

let nomesFiltardos = extrairNomesComA(listaDeNomes);

console.log('Nomes que começam com a: ', nomesFiltardos);
