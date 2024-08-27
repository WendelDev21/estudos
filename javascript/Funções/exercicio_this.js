/*
Exercício: Implementação de um Relógio

Descrição do Exercício

Imagine que você precisa criar um objeto Relogio que mantém o
tempo (horas, minutos, segundos) e oferece funcionalidades
para ajustar o tempo, adicionar minutos, adicionar segundos e
exibir o tempo atual no formato HH:MM:SS. Use métodos de
função e o operador this para interagir com as propriedades
do objeto Relogio.

Requisitos

Construtor Relogio: Crie uma função construtora Relogio
que inicializa o relógio com horas, minutos e segundos
dados como argumentos.

Método ajustarTempo: Este método aceita horas, minutos e
segundos como argumentos e ajusta o tempo do relógio de acordo.

Método adicionarMinutos: Adiciona uma certa quantidade de
minutos ao tempo atual do relógio. Certifique-se de atualizar
as horas se necessário.

Método adicionarSegundos: Similar ao método anterior, mas
para adicionar segundos. Atualize minutos e horas quando necessário.

Método exibirTempo: Exibe o tempo atual no formato HH:MM:SS.


*/

function Relogio(horas, minutos, segundos) {

    this.horas = horas;
    this.minutos = minutos;
    this.segundos = segundos;

    this.ajustarTempo = function(horas, minutos, segundos) {

        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;

    };

    this.adicionarMinutos = function(minutos) {
        
        this.minutos += minutos;

        while (this.minutos >= 60) {
            
            this.minutos -= 60;
            this.horas +=1;
        }
    };

    this.adicionarSegundos = function() {
        
        this.segundos += segundos;

        while (this.segundos >= 60) {

            this.segundos -= 60;
            this.adicionarMinutos(1)
        }
    };

    this.exibirTempo = function() {

        console.log(`${this.horas.toString().padStart(2, '0')}:${this.minutos.toString().padStart(2, '0')}:${this.segundos.toString().padStart(2, '0')}`);
    };
}

var meuRelogio = new Relogio(10, 45, 25);

meuRelogio.exibirTempo();

meuRelogio.adicionarMinutos(20);

meuRelogio.exibirTempo();

meuRelogio.adicionarSegundos(4700);

meuRelogio.exibirTempo();

meuRelogio.adicionarMinutos(20);

meuRelogio.exibirTempo();
