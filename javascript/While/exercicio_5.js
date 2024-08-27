/*
Faça um programa que implemente o jogo "Pedra, Papel e Tesoura".
Permita que o usuário jogue contra o computador. Continue solicitando
jogadas até que o usuário decida parar usando um loop while. 

*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function jogarComComputador() {
    const escolhas = ['pedra', 'papel', 'tesoura'];
    const indice = Math.floor(Math.random() * 3);
    return escolhas [indice];
}

function determinarVencedor(jogadaUsuario, jogadaPc) {
    
    if (jogadaUsuario === jogadaPc) {
        return 'Empate';
    }

    if ((jogadaUsuario === 'pedra' && jogadaPc === 'tesoura') ||
        (jogadaUsuario === 'tesoura' && jogadaPc === 'papel') ||
        (jogadaUsuario === 'papel' && jogadaPc === 'pedra')) {
        return 'Você venceu!';
    }

    return 'Computador venceu!';

}

function jogar() {

    readline.question('Escolha pedra, papel ou tesoura (digite "sair" para encerrar): ', jogadaUsuario => {

        jogadaUsuario = jogadaUsuario.toLowerCase();

        if (jogadaUsuario === 'sair') {

            console.log('Jogo encerrado.');
            readline.close();
            return;

        }

        const jogadaPc = jogarComComputador();

        console.log(`Computador escolher: ${jogadaPc}`);

        console.log(determinarVencedor(jogadaUsuario, jogadaPc));

        jogar();

    });

} jogar();


