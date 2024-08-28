// Adiciona um ouvinte de evento ao objeto 'document'. Este evento 'DOMContentLoaded' 
// é disparado quando todo o HTML foi completamente carregado e parseado, sem esperar 
// pelo CSS, imagens e subframes para finalizar o carregamento.
document.addEventListener('DOMContentLoaded', function() {

// Declara uma constante chamada 'vermelho' e usa o método 'document.querySelector'
// para selecionar o primeiro elemento HTML que possui a classe 'vermelho'. 
// Este elemento representa a luz vermelha do semáforo na página.
const vermelho = document.querySelector('.vermelho');

// Declara uma constante chamada 'amarelo' e seleciona o primeiro
// elemento HTML que possui a classe 'amarelo'. Este é o elemento que
// representa a luz amarela do semáforo.
const amarelo = document.querySelector('.amarelo');

// Declara uma constante chamada 'verde' e seleciona o primeiro
// elemento HTML que possui a classe 'verde'. Este é o elemento que
// representa a luz verde do semáforo.
const verde = document.querySelector('.verde');

// Declara uma variável 'estadoAtual' e inicializa-a com o valor 0.
// Esta variável é usada para rastrear qual luz do semáforo está ativa. 
// '0' representa a luz vermelha, '1' representa a luz
// amarela, e '2' representa a luz verde.
let estadoAtual = 0; // 0 para vermelho, 1 para amarelo, 2 para verde


    // Definição da função 'alterarEstado', que gerencia a 
    // troca das cores das luzes do semáforo.
    function alterarEstado() {

        // Primeiro, remove a classe 'ativo' de todas as luzes
        // para desativar as luzes atualmente acesas.
        // O método 'classList.remove' é utilizado para remover a
        // classe 'ativo' dos elementos selecionados,
        // fazendo com que retornem à sua cor original (desativada).
        vermelho.classList.remove('ativo');
        amarelo.classList.remove('ativo');
        verde.classList.remove('ativo');

        // Em seguida, verifica o valor da variável 'estadoAtual' para
        // determinar qual luz deve ser ativada.
        if (estadoAtual === 0) {

            // Se 'estadoAtual' é 0, adiciona a classe 'ativo' à luz
            // vermelha, mudando sua cor para vermelho.
            vermelho.classList.add('ativo');

        } else if (estadoAtual === 1) {

            // Se 'estadoAtual' é 1, adiciona a classe 'ativo' à
            // luz amarela, mudando sua cor para amarelo.
            amarelo.classList.add('ativo');

        } else if (estadoAtual === 2) {

            // Se 'estadoAtual' é 2, adiciona a classe 'ativo' à
            // luz verde, mudando sua cor para verde.
            verde.classList.add('ativo');

        }

        // Atualiza o valor de 'estadoAtual' incrementando-o por 1
        // e utilizando o operador módulo (%) com 3.
        // Isso garante que o valor de 'estadoAtual' esteja sempre entre 0 e 2.
        // O operador módulo retorna o resto da divisão de 'estadoAtual + 1' por 3.
        estadoAtual = (estadoAtual + 1) % 3;

    }

    // 'setInterval' é uma função que executa uma função específica ou
    // bloco de código repetidamente a cada intervalo de tempo fixo.
    // Neste caso, 'alterarEstado' é chamada a cada 2000 milissegundos (ou 2 segundos),
    // fazendo com que as luzes do semáforo mudem automaticamente em um ciclo contínuo.
    setInterval(alterarEstado, 2000);

});


// Esta linha ouve um evento chamado 'DOMContentLoaded' no objeto document.
// 'DOMContentLoaded' é um evento que é disparado quando todo o HTML foi completamente carregado,
// permitindo que você execute scripts que dependem de elementos DOM.
document.addEventListener('DOMContentLoaded', function() {

// 'document.querySelectorAll' seleciona todos os elementos
// que correspondem ao seletor especificado.
// Neste caso, ele seleciona todos os 'div' dentro de
// elementos com a classe 'semaforo'.
// O resultado é armazenado na constante 'lights', que agora é
// uma NodeList (coleção) de elementos 'div'.
const luzes = document.querySelectorAll('.semaforo div');

// 'forEach' é um método que executa uma função para
// cada elemento de um array ou NodeList.
// Aqui, ele itera sobre cada 'light' dentro de 'lights'.
luzes.forEach(luz => {

    // Para cada 'light', um ouvinte de evento 'click' é adicionado.
    // Quando o 'light' é clicado, a função fornecida é executada.
    luz.addEventListener('click', () => {

        // Dentro deste ouvinte de eventos, outra iteração é iniciada sobre 'lights'.
        // Esta iteração serve para remover a classe 'ativo' de cada 'light' na NodeList,
        // garantindo que todas as luzes sejam desativadas antes de uma nova ser ativada.
        luzes.forEach(l => l.classList.remove('ativo')); // Remove 'ativo' de todas as luzes

        // Adiciona a classe 'ativo' à 'light' que foi clicada.
        // 'classList.add' é usado para adicionar uma classe a um elemento.
        // Isso altera a cor da 'light' clicada para o estado "ativo" (geralmente ligado ou iluminado).
        luz.classList.add('ativo'); // Adiciona 'ativo' apenas à luz clicada
        
        });
    });
});

