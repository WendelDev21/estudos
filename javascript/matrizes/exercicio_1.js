/*
Exercício da Urna Eletrônica

Neste exercício, vamos simular uma urna eletrônica simples
para uma eleição com três candidatos. O usuário poderá entrar
com um número para votar e, no final, vamos computar e mostrar os resultados.

Configuração Inicial:

Três candidatos.
- Opções de voto para cada um e uma opção para voto nulo.
- Coleta de votos até que o usuário decida terminar a entrada.

Processo de Votação:

- Usuários entram votos representados por números (1, 2, 3 para
candidatos, e 4 para nulo).
- Os votos são armazenados em um array.
- Cálculo dos Resultados:

- Contagem de votos para cada candidato e nulos.
- Apresentação dos resultados.
*/

// Importação do módulo 'readline' do Node.js, necessário para criar uma interface de
// entrada e saída via linha de comando.
const readline = require('readline');

// Criação da interface de leitura e escrita, usando o stdin e stdout do processo,
// para interação com o usuário.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Array para armazenar os votos, com índices designados para cada candidato e para votos nulos.
// Índices 0 a 2 são para os candidatos 1 a 3, e o índice 3 é para votos nulos.
let votos = [0, 0, 0, 0];  

// Função para iniciar a votação, explicando as opções de voto ao usuário.
function iniciarVotacao() {
    console.log("\nVote nos candidatos digitando:");
    console.log("1 - Candidato 1");
    console.log("2 - Candidato 2");
    console.log("3 - Candidato 3");
    console.log("4 - Voto Nulo");
    console.log("0 - Encerrar Votação e mostrar resultados");

    // Chama a função para começar a coletar os votos.
    coletarVotos();  
}

// Função para coletar os votos dos usuários.
function coletarVotos() {

    // Solicita ao usuário que digite o número correspondente ao seu voto.
    // A função `rl.question` é usada para interagir com o usuário, pedindo que ele digite o voto.
    rl.question("Digite o número do seu voto: ", function(numero) {

        // Converte a entrada do usuário de string para número inteiro.
        // Isso é necessário porque a entrada é recebida como texto e precisa ser usada em comparações numéricas.
        numero = parseInt(numero);

        // Verifica se o número digitado é igual a 0, o que é usado para encerrar a votação.
        if (numero === 0) {

            // Chama a função para mostrar os resultados da votação.
            // Esta função é responsável por exibir quantos votos cada candidato recebeu.
            mostrarResultados();

            // Chama a função para determinar qual candidato teve mais votos e anunciar o vencedor.
            determinarVencedor();

        // Verifica se o número digitado está entre 1 e 4, que são as opções válidas para votar nos
        // candidatos ou nulo.
        } else if (numero >= 1 && numero <= 4) {

            // Adiciona um voto ao índice apropriado no array `votos`.
            // O índice é ajustado subtraindo 1 do número digitado, porque os arrays em
            // JavaScript são indexados a partir de zero.
            votos[numero - 1] += 1;

            // Informa ao usuário que o voto foi registrado, indicando para qual candidato ou se foi nulo.
            console.log(`Voto registrado para ${numero < 4 ? `Candidato ${numero}` : 'Nulo'}.\n`);
            
            // Chama novamente a `coletarVotos` para continuar o processo de votação até que o usuário
            // decida terminar.
            coletarVotos();

        // Caso o usuário digite um número que não está entre as opções válidas (0, 1, 2, 3, 4).
        } else {

            // Informa ao usuário que a opção digitada é inválida.
            console.log("Opção inválida, tente novamente.");

            // Chama novamente a função `coletarVotos` para permitir que o usuário tente novamente.
            coletarVotos();

        }
    });
}


// Função para mostrar os resultados dos votos coletados na votação.
function mostrarResultados() {

    // Imprime uma linha separadora e o título "Resultados da Votação" para indicar que os
    // resultados serão listados a seguir.
    console.log("\nResultados da Votação:");

    // Loop para percorrer o array de votos dos candidatos (ignorando o índice dos votos nulos por enquanto).
    // A iteração vai de 0 até 2 porque existem três candidatos.
    for (let i = 0; i < 3; i++) {

        // Imprime o número de votos de cada candidato. `i + 1` transforma o índice base-0 em
        // uma etiqueta base-1 para o candidato.
        // Por exemplo, `i = 0` corresponde ao "Candidato 1".
        console.log(`Candidato ${i + 1}: ${votos[i]} votos`);
    }

    // Após listar os votos de todos os candidatos, os votos nulos são exibidos.
    // O índice 3 do array `votos` armazena a contagem de votos nulos.
    console.log(`Votos Nulos: ${votos[3]} votos`);

    // Encerra a interface de linha de comando.
    // Isso é importante para liberar o terminal após a conclusão da execução do script,
    // permitindo que o processo do Node.js termine corretamente sem deixar a linha de comando pendurada.
    rl.close();
}


// Função para determinar o vencedor da votação.
function determinarVencedor() {

    // Inicializa 'maxVotos' como zero, que será usado para comparar e encontrar o maior número
    // de votos recebidos.
    let maxVotos = 0;

    // Inicializa 'vencedor' como -1, um valor sentinela que indica que ainda não foi encontrado um vencedor.
    let vencedor = -1;

    // Loop que percorre os votos dos candidatos (não inclui os votos nulos).
    for (let i = 0; i < 3; i++) {

        // Verifica se o número de votos do candidato atual é maior que o maior número registrado até o momento.
        if (votos[i] > maxVotos) {

            // Se um novo máximo é encontrado, 'maxVotos' é atualizado para este novo valor.
            maxVotos = votos[i];

            // 'vencedor' é atualizado para o índice do candidato atual.
            vencedor = i;
        }
    }

    // Verifica se um vencedor foi determinado (i.e., 'vencedor' não é mais -1).
    if (vencedor !== -1) {

        // Se um vencedor foi encontrado, imprime o candidato e o número de votos que ele recebeu.
        // O número do candidato é ajustado para ser base-1 (mais natural para exibição) adicionando 1 ao índice.
        console.log(`\nO vencedor é o Candidato ${vencedor + 1} com ${maxVotos} votos.`);
    
    } else {
        
        // Se nenhum vencedor foi encontrado, ou seja, todos os candidatos têm zero votos ou há um
        // empate no número máximo de votos,
        // imprime uma mensagem indicando que não houve vencedores.
        console.log("\nNão houve vencedores.");
    }
}

// Chamada para iniciar o processo de votação.
iniciarVotacao();

