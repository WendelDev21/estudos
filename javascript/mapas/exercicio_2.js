/*
Exercício: Sistema de Reservas de Salas

Desenvolva um sistema de reservas de salas utilizando JavaScript
com a estrutura de dados Map. O sistema deve permitir ao usuário
realizar as seguintes operações:

Reservar Sala: O usuário pode reservar uma sala para um
determinado evento em um horário específico. Se a sala estiver
disponível, a reserva é efetuada com sucesso. Caso contrário, o
sistema informa que já existe uma reserva para a sala no mesmo horário.

Verificar Disponibilidade: O usuário pode verificar se uma sala
está disponível em um horário específico. O sistema informa se a
sala está livre ou ocupada naquele horário.

Cancelar Reserva: O usuário pode cancelar a reserva de um evento em
um horário específico. Se o evento for encontrado, a reserva é
cancelada com sucesso. Caso contrário, o sistema informa que o evento
não foi encontrado.

Exibir Reservas: O usuário pode visualizar a lista de todas as reservas
feitas, mostrando o evento, a sala e o horário da reserva.

Sair: Encerra o programa.

Para implementar o sistema, você pode utilizar o objeto Map do
JavaScript para armazenar as reservas. Cada chave do Map será o
horário da reserva, e o valor associado será um array contendo objetos
com informações do evento e da sala reservada.

Ao iniciar o programa, exiba uma mensagem de boas-vindas e apresente o
menu de opções. Após a realização de cada operação, o sistema deve
retornar ao menu para que o usuário possa escolher uma nova opção ou
sair do programa.

Certifique-se de tratar todas as entradas do usuário de forma adequada,
fornecendo mensagens informativas e garantindo a integridade dos dados
no sistema. */


// Importação do módulo 'readline' para criar uma interface de entrada e saída.
const readline = require('readline');

// Criação da interface 'rl' para interagir com o usuário via linha de comando.
const rl = readline.createInterface({
    input: process.stdin,  // Define o stream de entrada como o padrão do sistema (teclado).
    output: process.stdout // Define o stream de saída como o padrão do sistema (tela).
});

// Criação de um mapa 'reservas' para armazenar as reservas de salas.
let reservas = new Map();

// Define a função 'reservarSala', responsável por criar reservas de salas para eventos.
function reservarSala() {

    // Primeiro, solicita ao usuário que insira o nome do evento que ele deseja reservar uma sala.
    rl.question('Nome do evento: ', (evento) => {

        // Após obter o nome do evento, solicita que o usuário especifique qual sala deseja reservar.
        rl.question('Sala desejada: ', (sala) => {

            // Após escolher a sala, solicita que o usuário forneça o horário para a reserva.
            rl.question('Horário da reserva: ', (horario) => {

                // Verifica se já existe alguma reserva para o horário especificado.
                if (!reservas.has(horario)) {

                    // Se não houver reservas para esse horário, cria uma nova entrada no mapa de reservas.
                    // A chave é o 'horário' e o valor é um array contendo um objeto com detalhes
                    // do evento e da sala.
                    reservas.set(horario, [{ evento, sala }]);

                    // Informa ao usuário que a reserva foi efetuada com sucesso.
                    console.log(`Reserva para "${evento}" na sala ${sala} às ${horario} efetuada com sucesso.`);
                
                } else {

                    // Se já existir uma reserva para esse horário, obtém o array de reservas para esse horário.
                    const reservasHorario = reservas.get(horario);

                    // Procura no array se há alguma reserva para a mesma sala no mesmo horário.
                    const reservaExistente = reservasHorario.find(reserva => reserva.sala === sala);
                    
                    // Se não houver uma reserva para a mesma sala no horário especificado, permite a reserva.
                    if (!reservaExistente) {

                        // Adiciona a nova reserva no array de reservas para esse horário.
                        reservasHorario.push({ evento, sala });

                        // Confirma ao usuário que a reserva foi efetuada com sucesso.
                        console.log(`Reserva para "${evento}" na sala ${sala} às ${horario} efetuada com sucesso.`);
                    
                    } else {

                        // Se já existir uma reserva para a sala no mesmo horário, informa ao usuário
                        // que não é possível fazer a reserva.
                        console.log(`Já existe uma reserva para "${evento}" na sala ${sala} às ${horario}.`);
                    }
                }

                // Após processar a reserva, retorna ao menu principal.
                exibirMenu();

            });
        });
    });
}


// Define a função 'verificarDisponibilidade', que verifica se uma sala específica está
// disponível em um determinado horário.
function verificarDisponibilidade() {

    // Solicita ao usuário que especifique a sala que deseja verificar.
    rl.question('Sala desejada: ', (sala) => {

        // Após receber a sala, solicita ao usuário que especifique o horário em que deseja
        // verificar a disponibilidade.
        rl.question('Horário desejado: ', (horario) => {

            // Verifica se existe alguma reserva para o horário especificado.
            if (!reservas.has(horario)) {

                // Se não existirem reservas para esse horário, a sala está automaticamente disponível.
                console.log(`A sala ${sala} está disponível às ${horario}.`);
            
            } else {
            
                // Se existirem reservas para esse horário, obtém todas as reservas para aquele
                // horário específico.
                const reservasHorario = reservas.get(horario);
            
                // Procura no array de reservas se existe alguma que corresponde à sala especificada.
                const reservaSala = reservasHorario.find(reserva => reserva.sala === sala);
            
                // Verifica se foi encontrada uma reserva para a sala no horário especificado.
                if (!reservaSala) {
            
                    // Se não houver reserva para a sala, ela está disponível.
                    console.log(`A sala ${sala} está disponível às ${horario}.`);
            
                } else {
            
                    // Se houver uma reserva para a sala, indica que a sala está ocupada.
                    console.log(`A sala ${sala} está ocupada às ${horario}.`);
            
                }
            }
            
            // Após verificar a disponibilidade, retorna ao menu principal para mais ações.
            exibirMenu();

        });
    });
}

// Define a função 'cancelarReserva', que cancela uma reserva existente com base no nome do evento.
function cancelarReserva() {

    // Solicita ao usuário que insira o nome do evento cuja reserva ele deseja cancelar.
    rl.question('Nome do evento a ser cancelado: ', (evento) => {
        
        // Define uma variável de controle para verificar se algum evento foi realmente removido.
        let removido = false;

        // Itera sobre todas as reservas armazenadas no mapa 'reservas'.
        reservas.forEach((reservasHorario, horario) => {
        
            // Busca no array de reservas para cada horário o índice da reserva que corresponde ao
            // nome do evento.
            const index = reservasHorario.findIndex(reserva => reserva.evento === evento);

            // Verifica se uma reserva com o evento especificado foi encontrada.
            if (index !== -1) {
                
                // Se uma reserva é encontrada, ela é removida usando o método 'splice' do array.
                reservasHorario.splice(index, 1);
                
                // Atualiza a variável 'removido' para 'true', indicando que uma operação de remoção
                // foi realizada.
                removido = true;
                
                // Informa ao usuário que a reserva foi cancelada.
                console.log(`Reserva para "${evento}" cancelada.`);

                // Verifica se o array de reservas para esse horário está agora vazio após a remoção.
                if (reservasHorario.length === 0) {
                
                    // Se o array está vazio, remove a entrada correspondente a esse horário do mapa.
                    reservas.delete(horario);

                }
            }
        });

        // Após a iteração, verifica se a flag 'removido' ainda é false, o que indica que nenhuma
        // reserva foi encontrada e cancelada.
        if (!removido) {

            // Se nenhuma reserva foi encontrada para o evento, informa ao usuário.
            console.log(`Evento "${evento}" não encontrado.`);

        }

        // Retorna ao menu principal independentemente do resultado.
        exibirMenu();
    });
}


// Define a função 'exibirReservas', que é responsável por listar todas as reservas feitas.
function exibirReservas() {

    // Exibe um cabeçalho no console para indicar que a lista das reservas será mostrada a seguir.
    console.log('Lista de reservas:');

    // Itera sobre o mapa 'reservas', que armazena as reservas organizadas por horário.
    reservas.forEach((reservasHorario, horario) => {

        // Para cada horário no mapa, itera sobre o array de reservas associado.
        reservasHorario.forEach(reserva => {

            // Exibe os detalhes de cada reserva, incluindo o nome do evento, a sala reservada e o horário.
            // Utiliza-se template strings para inserir as variáveis diretamente na string de
            // saída, facilitando a leitura e formatação.
            console.log(`Evento: ${reserva.evento}, Sala: ${reserva.sala}, Horário: ${horario}`);
        
        });
    });

    // Após listar todas as reservas, chama a função 'exibirMenu' para retornar ao menu
    // principal e permitir mais interações.
    exibirMenu();

}


// Define a função 'exibirMenu', que mostra as opções disponíveis no sistema de reservas de
// salas e processa a escolha do usuário.
function exibirMenu() {

    // Exibe um cabeçalho seguido de uma lista de opções para o usuário.
    console.log('\nEscolha uma opção:');
    console.log('1. Reservar Sala');           // Opção para reservar uma sala.
    console.log('2. Verificar Disponibilidade');// Opção para verificar a disponibilidade de uma sala.
    console.log('3. Cancelar Reserva');        // Opção para cancelar uma reserva existente.
    console.log('4. Exibir Reservas');         // Opção para visualizar todas as reservas feitas.
    console.log('5. Sair');                    // Opção para sair do programa.

    // Solicita ao usuário que escolha uma das opções acima. A escolha é lida do teclado.
    rl.question('Opção: ', (opcao) => {
        
        // Utiliza uma estrutura de controle 'switch' para determinar o fluxo do programa baseado na
        // entrada do usuário.
        switch (opcao) {
            
            case '1':  // Se o usuário escolher a opção 1, chama a função 'reservarSala'.
                reservarSala();
                break;
            case '2':  // Se o usuário escolher a opção 2, chama a função 'verificarDisponibilidade'.
                verificarDisponibilidade();
                break;
            case '3':  // Se o usuário escolher a opção 3, chama a função 'cancelarReserva'.
                cancelarReserva();
                break;
            case '4':  // Se o usuário escolher a opção 4, chama a função 'exibirReservas' para mostrar todas as reservas.
                exibirReservas();
                break;
            case '5':  // Se o usuário escolher a opção 5, finaliza o programa.
                console.log('Encerrando o programa.');
                rl.close();  // Encerra a interface de linha de comando, terminando a interação com o usuário.
                break;
            default:   // Se o usuário digitar uma opção que não está listada, informa que é inválida e mostra o menu novamente.
                console.log('Opção inválida. Tente novamente.');
                exibirMenu();
        }
    });
}

// Exibe uma mensagem de boas-vindas ao iniciar o sistema.
console.log('Bem-vindo ao Sistema de Reservas de Salas!');

// Chama a função 'exibirMenu' para iniciar a interação com o usuário.
exibirMenu();