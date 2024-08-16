/*
Exercício 6: Escolha de menu

Crie um programa que exibe um menu com três opções
diferentes (Ex:

1 para pizza,
2 para hamburguer,
3 para salada).

Solicite ao usuário que escolha uma opção e utilize um switch
para exibir uma mensagem correspondente à escolha feita.

*/

const readline = require('readline');

Menu = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Menu');
console.log('1.Pizza');
console.log('2.Hamburguer');
console.log('3.Salada');

Menu.question('Escolha um número de acordo com sua escolha: ', (resp) => {
    const resposta = parseInt(resp);

    let escolha;

    switch(resposta){
        case 1:
            escolha = 'Pizza';
        break;
        case 2:
            escolha = 'Hamburguer';
        break;
        case 3:
            escolha = 'Salada';
        break;

        default:
            console.log("Opção inválida, escolha de 1 à 3.");
    }
    
    console.log(`Você escolheu ${escolha}.`);

    Menu.close();
});