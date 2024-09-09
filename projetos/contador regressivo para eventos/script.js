// Adiciona um ouvinte de evento ao documento. Este evento 
// 'DOMContentLoaded' é disparado quando todo o conteúdo HTML foi 
// completamente carregado, sem esperar por folhas de estilo, 
// imagens e iframes.
document.addEventListener('DOMContentLoaded', () => {

// Define a data e hora do evento. 'new Date('May 10, 2024 00:00:00')'
// cria um objeto de data representando 10 de maio de 2024 à meia-noite.
const dataEvento = new Date('Dec 25, 2024 00:00:00').getTime();

// Define um intervalo de tempo que executa uma função em um
// loop a cada segundo (1000 milissegundos).
const intervalo = setInterval(() => {

    // Obtém o momento atual em milissegundos desde a meia-noite de
    // 1 de janeiro de 1970 (UTC), conhecido como timestamp.
    const agora = new Date().getTime();

    // Calcula a distância em milissegundos entre a data
    // do evento e o momento atual.
    const distancia = dataEvento - agora;


    // Inicia o cálculo das unidades de tempo restantes até o evento.
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));

    /* Calcula o número de dias inteiros restantes até o evento. 
    - `1000` milissegundos em um segundo,
    - `60` segundos em um minuto,
    - `60` minutos em uma hora,
    - `24` horas em um dia.
    O resultado da divisão da 'distancia' pelo produto desses
            valores dá o total de dias completos restantes. 
    `Math.floor` é usado para arredondar para baixo, garantindo 
            que apenas dias completos sejam contados. */

    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    /* Calcula as horas restantes depois de contar os dias.
    - Usa o operador `%` (módulo) para encontrar o resto da 
            divisão da 'distancia' pelo total de milissegundos em um dia,
    - Divide o resultado pelo total de milissegundos em uma 
            hora para obter as horas totais restantes,
    - `Math.floor` arredonda para baixo para obter um número
            inteiro de horas. */

    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    /* Calcula os minutos restantes de maneira similar:
    - Primeiro, encontra o resto após remover as horas completas,
    - Em seguida, divide pelo número de milissegundos em um minuto 
            para obter os minutos totais restantes. */

    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);
    /* Calcula os segundos restantes:
    - Usa o módulo para remover os minutos completos da 'distancia',
    - Divide por `1000` para converter de milissegundos para segundos. */

    // Atualiza os elementos HTML com os valores calculados, formatando para sempre mostrar dois dígitos.
    document.querySelector('#dias .number').textContent = dias < 10 ? '0' + dias : dias;
    document.querySelector('#horas .number').textContent = horas < 10 ? '0' + horas : horas;
    document.querySelector('#minutos .number').textContent = minutos < 10 ? '0' + minutos : minutos;
    document.querySelector('#segundos .number').textContent = segundos < 10 ? '0' + segundos : segundos;
    /* Essas linhas buscam elementos específicos no DOM pela ID e classe e 
            atualizam seu conteúdo de texto (`textContent`).
    - Se o número é menor que 10, adiciona um '0' na frente para 
            manter o formato de dois dígitos.
    - Por exemplo, se `dias` for `3`, o texto será ajustado para '03'. 
            Essa formatação garante uma aparência uniforme e clara. */


    // Verifica se a contagem até o evento alcançou ou 
    // ultrapassou a data e hora marcada.
    if (distancia < 0) {
    
    // Se a distância é menor que zero, o evento já começou ou passou.
    
    // Interrompe o intervalo que atualiza o contador.
    clearInterval(intervalo);

    /* clearInterval é uma função que para o temporizador 
            setado com setInterval. 
        - `intervalo` é a variável que armazena a referência ao 
            setInterval iniciado anteriormente.
        Isso garante que a função dentro do setInterval pare de 
            executar, já que o contador não é mais necessário. */

    // Atualiza o HTML do elemento com a classe 'contador' para 
    // mostrar uma mensagem indicando que o evento começou.
    document.querySelector('.contador').innerHTML = "<div>O evento começou!</div>";

    /* document.querySelector('.contador') seleciona o primeiro 
            elemento com a classe 'contador' no documento.
        - `innerHTML` modifica o conteúdo HTML desse elemento.
        Aqui, o conteúdo é substituído por um novo <div> com a 
            mensagem "O evento começou!", sinalizando aos usuários 
            que a data do evento foi alcançada. */
            
    }

// Fecha a função setInterval e o listener de evento.
}, 1000); // O intervalo de 1000 milissegundos (1 segundo) 
        // especifica que a função interna é executada a cada segundo.
});