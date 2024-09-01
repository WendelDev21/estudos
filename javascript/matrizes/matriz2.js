// Importação do módulo 'readline' do Node.js para manipulação
// de entrada e saída via linha de comando.
const readline = require('readline');

// Criação de uma interface de leitura e escrita, configurando o
// processo padrão de entrada e saída.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Inicializando um array para armazenar dados dos alunos.
const alunos = [];

// Definição da quantidade de alunos a serem inseridos no sistema.
const numeroAlunos = 3;

// Índice para controlar o aluno atual no processo de entrada de dados.
let alunoIndex = 0;

// Função para perguntar o nome de cada aluno.
function perguntarNome() {

    // Verifica se o índice do aluno atual (alunoIndex) é menor
    // que o número total de alunos (numeroAlunos) a serem processados.
    // Isso é usado para determinar se todos os alunos necessários
    // já foram inseridos.
    if (alunoIndex < numeroAlunos) {

        // Solicita o nome do aluno. A interpolação de string é usada
        // para inserir o número do aluno atual na pergunta.
        // O número do aluno é calculado adicionando 1 ao índice
        // atual (alunoIndex) porque os índices começam em 0, mas
        // queremos mostrar a contagem a partir de 1 para o usuário.
        rl.question(`Digite o nome do aluno ${alunoIndex + 1}: `, function(nome) {

            // Cria um array vazio chamado 'notas'. Este array será usado
            // para armazenar as notas do aluno atual.
            // A variável 'notas' é local à função callback e só existe dentro deste contexto.
            const notas = [];

            // Adiciona um novo objeto ao array 'alunos'. Este objeto
            // contém o 'nome' do aluno, obtido através do input do usuário,
            // e o array 'notas', que inicialmente está vazio.
            // O array 'alunos' armazena objetos representando cada
            // aluno, permitindo acesso posterior a esses dados.
            alunos.push({ nome: nome, notas: notas });

            // Após inserir o aluno no array 'alunos' com seu nome e um array de notas vazio,
            // a função 'perguntarNotas' é chamada, passando o array 'notas' como argumento.
            // Esta chamada inicia o processo de coleta das notas para o aluno recém-adicionado.
            perguntarNotas(notas);

        });

    } else {

        // Se o índice do aluno atual é igual ou superior ao número total de alunos,
        // isso significa que todos os alunos já foram processados e seus nomes coletados.
        // Nesse caso, a função 'imprimirResultados' é chamada para processar e exibir os resultados finais,
        // como a média das notas e a situação de aprovação ou reprovação de cada aluno.
        imprimirResultados();
    }
}


// Função para perguntar as notas de cada aluno.
function perguntarNotas(notas) {

    // Verifica se já foram inseridas 3 notas para o aluno atual.
    // A condição verifica o tamanho do array 'notas'. Se menos de 3 notas foram inseridas, a
    // função continua a pedir mais notas.
    if (notas.length < 3) {

        // Solicita ao usuário que insira a próxima nota. O número da nota é determinado pelo
        // tamanho atual do array 'notas',
        // acrescido de um, pois o índice do array começa em 0 mas a contagem de notas para o usuário
        // deve começar em 1.
        rl.question(`Digite a nota ${notas.length + 1}: `, function(nota) {

            // Adiciona a nota fornecida pelo usuário ao array 'notas'.
            // A função parseFloat converte a entrada do usuário (que é recebida como uma string) para
            // um número de ponto flutuante.
            // Isso é necessário porque as notas geralmente precisam ser calculadas numericamente, por
            // exemplo, para calcular médias.
            notas.push(parseFloat(nota));

            // Chama a função `perguntarNotas` recursivamente com o array 'notas' atualizado.
            // Isso permite que o processo de inserção de notas continue até que o total de 3 notas
            // seja alcançado.
            perguntarNotas(notas);

        });

    } else {

        // Uma vez que 3 notas foram inseridas, o índice do aluno é incrementado para
        // mudar para o próximo aluno.
        alunoIndex++;

        // Chama a função `perguntarNome` para continuar o processo com o próximo aluno.
        // Isso reinicia o ciclo de coleta de nomes e notas para um novo aluno.
        perguntarNome();
    }
}


// Função para imprimir os resultados dos alunos.
function imprimirResultados() {

    // Imprime um cabeçalho para indicar que os resultados serão listados a seguir.
    console.log("\nResultados:");

    // Loop para processar cada aluno armazenado no array de alunos.
    // O array 'alunos' contém objetos, cada um representando um aluno com seu nome e notas.
    for (let i = 0; i < alunos.length; i++) {

        // Acessa o aluno na posição 'i' do array.
        let aluno = alunos[i];

        // Inicializa uma variável para somar as notas do aluno.
        let somaNotas = 0;

        // Loop para somar todas as notas do aluno.
        // Percorre o array de notas de cada aluno.
        for (let j = 0; j < aluno.notas.length; j++) {

            // Soma cada nota ao total acumulado em 'somaNotas'.
            somaNotas += aluno.notas[j];

        }

        // Calcula a média das notas do aluno.
        // Divide a soma total das notas pela quantidade de notas para obter a média.
        let media = somaNotas / aluno.notas.length;

        // Determina a situação do aluno com base na média.
        // Se a média for igual ou superior a 7, o aluno é considerado 'Aprovado'. Caso contrário, 'Reprovado'.
        let situacao = media >= 7 ? 'Aprovado' : 'Reprovado';

        // Imprime o nome do aluno, a média calculada e a situação.
        // A função 'toFixed(2)' é usada para formatar a média com duas casas decimais.
        console.log(`Nome: ${aluno.nome}, Média: ${media.toFixed(2)}, Situação: ${situacao}`);

    }

    // Encerra a interface de linha de comando após imprimir todos os resultados.
    // Essa ação é importante para liberar o terminal e terminar a execução do programa corretamente.
    rl.close();
    
}


// Inicia o processo perguntando o nome do primeiro aluno.
perguntarNome();