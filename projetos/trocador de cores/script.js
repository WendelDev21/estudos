// Acessa o elemento HTML pelo seu 'id' e adiciona um ouvinte de eventos para 'click'.
document.getElementById('mudarCor').addEventListener('click', function() {
/* 
    A função `getElementById` é um método do objeto `document`
            (que representa todo o documento HTML).
    Ele busca no documento um elemento que tenha o atributo `id` 
        especificado, neste caso, 'mudarCor'.
    O `addEventListener` é um método que permite configurar funções 
        para serem chamadas sempre que o
    evento especificado acontece no elemento. Aqui, ele está 
        configurado para escutar o evento de 'click'.
*/

// Gera uma cor aleatória em formato hexadecimal.
const corAleatoria = Math.floor(Math.random() * 16777215).toString(16);
/*
    `Math.random()` gera um número aleatório entre 0 (inclusive) e 1 (exclusivo).
    `Math.random() * 16777215` multiplica esse número aleatório pelo número 16777215,
    que é o máximo valor para uma cor em hexadecimal (cor branca - ffffff em hex).
    
    `Math.floor()` é usado para arredondar o número resultante para o inteiro mais próximo
    menor ou igual a ele, garantindo que não tenhamos casas decimais.
    
    `.toString(16)` converte o número inteiro para uma string em base hexadecimal (base 16).
    Isso é necessário porque as cores em CSS que usam valores hexadecimais precisam ser strings.
*/

// Muda a cor de fundo do corpo da página.
document.body.style.backgroundColor = "#" + corAleatoria;
/*
    `document.body` acessa o elemento <body> do documento HTML.
    `.style` permite modificar o estilo CSS do elemento.
    `.backgroundColor` é uma propriedade de estilo que define a cor de fundo de um elemento.
    Ao definir `backgroundColor` para "#" seguido pela `corAleatoria`, estamos mudando a cor de fundo
    do corpo da página para a cor hexadecimal que foi gerada aleatoriamente.
*/
});

/*
Esse script é ativado quando o usuário clica no botão com o ID "mudarCor". 
A função anônima (aquela que é passada como segundo argumento para addEventListener) é
chamada sempre que esse evento de clique ocorre, alterando a cor de fundo
do corpo da página para uma cor aleatória. Esta é uma maneira eficaz e
interativa de aplicar conceitos de JavaScript para manipular elementos
da página e responder a eventos de usuário.
*/
