/*
Exercício de Objetos em JavaScript

Você deve criar um programa em JavaScript que permita ao
usuário inserir informações sobre um aluno, incluindo
nome, idade, curso e notas em diferentes matérias. 

Em seguida, o programa deve calcular a média das notas do
aluno e exibir todas as informações fornecidas, juntamente
com a média calculada.

O programa deve seguir as seguintes etapas:

Solicitar ao usuário que insira o nome do aluno.
Solicitar ao usuário que insira a idade do aluno.
Solicitar ao usuário que insira o curso do aluno.
Solicitar ao usuário que insira as notas do aluno em três matérias: Matemática, Física e Química.
Calcular a média das notas do aluno.
Exibir todas as informações fornecidas pelo usuário, incluindo nome, idade, curso, notas em cada matéria e média das notas.
Certifique-se de que o programa esteja devidamente estruturado, utilizando 
objetos para representar as informações do aluno e funções para calcular 
a média das notas e exibir as informações.*/

// Importa o módulo 'readline' do Node.js, que permite a leitura de dados do terminal.
const readline = require('readline');

// Cria uma interface de leitura e escrita usando o módulo 'readline'.
// Especifica 'process.stdin' como entrada (input) para capturar o que é digitado pelo usuário.
// Especifica 'process.stdout' como saída (output) para exibir mensagens ao usuário.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Declara e inicializa um objeto vazio chamado 'aluno'.
// Este objeto será usado para armazenar informações como '
// nome, idade, curso e notas do aluno.
let aluno = {};

// Declara uma função assíncrona chamada 'solicitarInformacao'.
// Recebe uma string 'pergunta' que será exibida ao usuário.
// Retorna uma Promise que resolve com a resposta do usuário.
function solicitarInformacao(pergunta) {

    return new Promise((resolve, reject) => {

    // Exibe a pergunta no terminal e espera pela resposta.
    // Quando o usuário responde, a função resolve a Promise com a resposta.
    rl.question(pergunta, (resposta) => {
        resolve(resposta);
        });
    });
}

// Função assíncrona autoinvocável para realizar a interação com o usuário.
(async () => {

    // Solicita o nome do aluno utilizando a função 'solicitarInformacao' e
    // armazena no objeto 'aluno'.
    aluno.nome = await solicitarInformacao("Digite o nome do aluno: ");

    // Solicita a idade, converte para inteiro e armazena no objeto 'aluno'.
    aluno.idade = parseInt(await solicitarInformacao("Digite a idade do aluno: "));
    
    // Solicita o curso do aluno e armazena no objeto 'aluno'.
    aluno.curso = await solicitarInformacao("Digite o curso do aluno: ");

    // Inicializa o subobjeto 'notas' dentro do objeto 'aluno'.
    aluno.notas = {};

    // Solicita a nota de Matemática, converte para float e armazena no subobjeto 'notas'.
    aluno.notas.matematica = parseFloat(await solicitarInformacao("Digite a nota de Matemática: "));
    
    // Repete o processo para as notas de Física.
    aluno.notas.fisica = parseFloat(await solicitarInformacao("Digite a nota de Física: "));
    
    // Repete o processo para as notas de Química.
    aluno.notas.quimica = parseFloat(await solicitarInformacao("Digite a nota de Química: "));


// Declara uma função chamada 'calcularMedia' que recebe um parâmetro 'aluno'.
// Esta função é responsável por calcular a média aritmética das notas do aluno.
function calcularMedia(aluno) {

    // Inicializa uma variável 'totalNotas' com 0. Esta variável 
    // acumulará a soma de todas as notas do aluno.
    let totalNotas = 0;

    // Inicializa uma variável 'numNotas' com 0. Esta variável 
    // contará o número de notas fornecidas.
    let numNotas = 0;

    // Utiliza um laço 'for...in' para iterar sobre cada 
    // propriedade dentro do objeto 'notas' que faz parte do objeto 'aluno'.
    // A variável 'materia' armazenará o nome da chave durante 
    // cada iteração (por exemplo, 'matematica', 'fisica', etc.).
    for (let materia in aluno.notas) {
    
      // Adiciona o valor da nota (aluno.notas[materia]) ao 'totalNotas'.
        totalNotas += aluno.notas[materia];
    
      // Incrementa 'numNotas' em um a cada iteração, indicando 
      // que uma nota foi processada.
        numNotas++;
    
    }

    // Calcula a média aritmética das notas. Divide o total 
    // acumulado das notas pelo número de notas.
    let media = totalNotas / numNotas;

    // Retorna o valor da média calculada.
    return media;

}


// Utiliza o console.log para exibir informações sobre o aluno diretamente no terminal.
// Exibe o nome do aluno.
console.log(`Nome: ${aluno.nome}`);

// Exibe a idade do aluno.
console.log(`Idade: ${aluno.idade}`);

// Exibe o curso do aluno.
console.log(`Curso: ${aluno.curso}`);

// Introduz a exibição das notas com um cabeçalho 'Notas:'.
console.log(`Notas:`);

// Novamente, utiliza um laço 'for...in' para iterar sobre cada nota no objeto 'notas'.
// A cada iteração, exibe a matéria e a nota correspondente formatada.
for (let materia in aluno.notas) {
    console.log(`${materia}: ${aluno.notas[materia]}`);
}

// Calcula a média das notas utilizando a função 'calcularMedia',
// formata o resultado para duas casas decimais com o
// método 'toFixed(2)' e exibe o resultado.
console.log(`Média: ${calcularMedia(aluno).toFixed(2)}`);

// Fecha a interface de leitura 'rl'. Isso é feito
// chamando o método 'close' sobre a interface 'rl'.
// Essa ação é necessária para terminar o programa
// corretamente, liberando recursos que a interface pode estar utilizando.
rl.close();

})();