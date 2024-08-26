/*
Exercício: Implementação de um Sistema de Notificações

O objetivo deste exercício é implementar um sistema de
notificações simples que utiliza IIFE para encapsular suas
variáveis e funções, evitando assim a poluição do escopo
global. O sistema deverá permitir registrar mensagens de
notificação e exibi-las todas de uma vez.

Requisitos:
Encapsulamento: Utilize uma IIFE para encapsular o código
do sistema de notificações, garantindo que variáveis internas
não sejam acessíveis fora da função imediatamente invocada.

Registro de Notificações: Dentro da IIFE, crie uma função
para registrar mensagens de notificação. Cada mensagem
deve ser armazenada em um array.

Exibição de Notificações: Crie também uma função para
exibir todas as mensagens de notificação registradas.
Ao exibir as notificações, cada mensagem deve ser
mostrada em um console.log separado.

Exposição de API: A IIFE deve expor um objeto com as
funções de registro e exibição de notificações, permitindo
que essas ações sejam realizadas de fora da IIFE.


*/

const sistemaDeNotificacoes = (function () {
    let notificacoes = [];
    function registrar(mensagem) {
        notificacoes.push(mensagem);
        console.log(`Notificação registrada: "${mensagem}"`)
    }
    function exibir() {
        if (notificacoes.length === 0) {
            console.log("Não há notificações.");
            return
        }
        notificacoes.forEach((mensagem, index) => {
        console.log(`${index + 1}: ${mensagem}`);

        });
    }
    return {
        registrar,
        exibir
    }
    
    
})();
sistemaDeNotificacoes.registrar("Bem vindo ao sistema!");
sistemaDeNotificacoes.registrar("Você tem uma nova mensagem.");
sistemaDeNotificacoes.exibir();