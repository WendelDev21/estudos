/*
Mapas em JavaScript

Em JavaScript, o objeto Map é uma estrutura de dados que
permite armazenar pares chave-valor, onde cada chave pode
ser de qualquer tipo de dado, incluindo objetos ou funções,
e cada valor pode ser qualquer valor válido em JavaScript.

Principais Características:

Chaves Únicas: Cada chave em um mapa é única. Isso significa
que você não pode ter chaves duplicadas dentro de um mesmo mapa.
Se tentar definir uma chave que já existe, o valor associado a
essa chave será substituído pelo novo valor.

Iterável: O objeto Map é iterável, o que significa que você
pode percorrer os pares chave-valor usando loops, como for...of ou forEach.

Flexibilidade de Chaves e Valores: As chaves e valores de
um mapa podem ser de qualquer tipo de dado, o que oferece
grande flexibilidade na estruturação e armazenamento de dados.

Exemplo Prático:

Vamos criar um exemplo prático de uso do objeto Map para
armazenar informações sobre alunos e suas notas em uma turma.*/

// Criando um objeto 'Map' para armazenar as notas dos alunos.
// 'Map' é uma estrutura de dados que armazena pares chave-valor, onde cada chave é única.
let notasDosAlunos = new Map();

// Adicionando notas dos alunos ao mapa usando o método 'set'.
// Cada chamada ao método 'set' adiciona um novo par de
// chave (nome do aluno) e valor (nota) ao mapa.
notasDosAlunos.set('João', 8.5);
notasDosAlunos.set('Maria', 9.0);
notasDosAlunos.set('Pedro', 7.5);
notasDosAlunos.set('Ana', 6.0);

// Exibindo as notas dos alunos.
// 'console.log' é usado para imprimir mensagens no console.
// 'forEach' é um método do objeto Map que itera sobre cada par chave-valor no mapa.
// A função callback passada para 'forEach' recebe a nota (valor) e o nome do aluno (chave) como parâmetros.
console.log('Notas dos Alunos:');
notasDosAlunos.forEach((nota, aluno) => {
    console.log(`${aluno}: ${nota}`);
});


// Atualizando a nota de um aluno específico, Ana, no mapa.
// O método 'set' é usado novamente para substituir o valor
// associado a uma chave existente.
notasDosAlunos.set('Ana', 8.0);

// Exibindo a nova nota de Ana usando o método 'get' para
// recuperar o valor associado à chave 'Ana'.
console.log('\nNova nota de Ana:', notasDosAlunos.get('Ana'));

// Declara uma variável 'aluno' e atribui a ela o nome 'Pedro', que será usado para verificar se
// o aluno está presente no mapa.
let aluno = 'Pedro';

// Utiliza o método 'has' do objeto 'Map' para verificar se a chave (nome do aluno) 'Pedro'
// existe no mapa 'notasDosAlunos'.
// O método 'has' retorna um valor booleano: 'true' se a chave existir no mapa e 'false' caso contrário.
if (notasDosAlunos.has(aluno)) {

    // Se o método 'has' retornar 'true', significa que o aluno 'Pedro' está registrado no mapa.
    // Imprime uma mensagem no console confirmando a presença do aluno.
    console.log(`\n${aluno} está no mapa de notas.`);

} else {

    // Se o método 'has' retornar 'false', significa que o aluno 'Pedro' não está registrado no mapa.
    // Imprime uma mensagem no console indicando que o aluno não está presente.
    console.log(`\n${aluno} não está no mapa de notas.`);
}

// Removendo um aluno, João, do mapa.
// O método 'delete' é usado para remover um par chave-valor baseado na chave.
notasDosAlunos.delete('João');

// Imprime uma mensagem de cabeçalho no console para indicar que as notas dos alunos serão
// listadas após a remoção de 'João'.
console.log('\nNotas dos Alunos (após remoção de João):');

// Utiliza o método 'forEach' do objeto 'Map' para iterar sobre cada par chave-valor restante no mapa.
// Para cada par, o método 'forEach' executa a função callback fornecida, que recebe a nota (valor) e
// o nome do aluno (chave).
notasDosAlunos.forEach((nota, aluno) => {

    // Imprime no console o nome do aluno e a nota correspondente.
    // Essa listagem confirmará visualmente se 'João' foi removido, pois seu nome e nota não
    // aparecerão na listagem.
    console.log(`${aluno}: ${nota}`);
    
});



// Verificando o tamanho do mapa após as operações, que indica o
// número de pares chave-valor presentes.
console.log('\nNúmero de alunos:', notasDosAlunos.size);

// Limpando todos os elementos do mapa.
// O método 'clear' remove todos os pares chave-valor do mapa,
// deixando-o vazio.
notasDosAlunos.clear();

// Verificando se o mapa está vazio após a operação de limpar.
// Compara se o tamanho do mapa é igual a zero para determinar se
// está vazio.
console.log('O mapa está vazio?', notasDosAlunos.size === 0);