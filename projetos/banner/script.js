// A função a seguir define um ouvinte de
// eventos no documento HTML.
document.getElementById('botaoFecharPrincipal').addEventListener('click', function() {
    // Esta linha busca o botão com o ID 'botaoFecharPrincipal'
            // dentro do documento. Esse botão é especificamente
            // responsável por fechar o banner principal. 

    // O método 'addEventListener' é então chamado sobre o
            // elemento retornado. Ele está sendo usado aqui
            // para registrar uma função que será chamada
            // sempre que o evento 'click' ocorrer no botão.
    // 'click' é o evento que representa um clique de usuário,
            // sendo um dos eventos mais comuns para interação
            // com elementos na página web.

    // Dentro da função anônima vinculada ao evento 'click', a
            // seguinte linha é executada:
    document.getElementById('bannerPrincipal').style.display = 'none';
    // Aqui, o método 'getElementById' busca novamente no
            // documento, desta vez pelo elemento com ID 'bannerPrincipal',
            // que é o container do banner que desejamos ocultar.

    // Uma vez que o elemento é encontrado, seu estilo é diretamente
            // manipulado através da propriedade 'style', mais
            // especificamente a propriedade 'display' dentro de 'style'.
    // A propriedade 'display' é usada para controlar a exibição de
            // elementos na página. Ao definir 'display' como 'none', o
            // elemento 'bannerPrincipal' é completamente ocultado da página.
    // Isso efetivamente "desliga" a visualização do banner, removendo-o
            // do fluxo da página sem deletá-lo do documento. O banner
            // ainda existe no DOM, mas não é mais visível.

}); // Termina a definição do evento listener.


// Esta linha seleciona todos os elementos do documento que
            // têm a classe 'botaoFechar'. Isso é feito
            // usando o método 'document.querySelectorAll', que
            // retorna todos os elementos que correspondem ao
            // seletor CSS fornecido. Neste caso, todos os
            // botões destinados a fechar banners são selecionados.
document.querySelectorAll('.botaoFechar').forEach(botao => {
    // 'forEach' é um método de array que executa uma função
            // para cada elemento no array. Aqui, cada botão
            // obtido pelo 'querySelectorAll' é passado
            // como 'botao' para a função de callback.
    
    // Para cada 'botao', um ouvinte de evento é adicionado.
    // Especificamente, estamos adicionando um ouvinte para o
            // evento 'click', que é disparado sempre que
            // um usuário clica no botão.
    botao.addEventListener('click', function(event) {
        // 'event' é o objeto evento que contém informações sobre o
                // evento que foi disparado. Aqui, ele é usado
                // principalmente para acessar a funcionalidade de
                // parar a propagação do evento.
        
        // 'event.stopPropagation()' é chamado para prevenir que o
                // evento de clique se propague mais adiante na
                // cadeia de eventos do DOM. Isso é útil para
                // evitar que eventos pai sejam notificados do
                // clique, o que pode ser importante quando o
                // clique no botão não deve desencadear outros
                // eventos que estão configurados para responder
                // ao mesmo clique em elementos superiores.
        event.stopPropagation();  // Impede o redirecionamento quando o botão fechar é clicado
        
        // 'this' dentro do manipulador de eventos refere-se ao
                // elemento que recebeu o evento, ou seja, o botão
                // que foi clicado. 'this.parentElement' acessa o
                // elemento pai do botão, que no contexto é o
                // container do banner que o botão está designado a fechar.
        this.parentElement.style.display = 'none';
        // 'style.display = 'none'' define a propriedade CSS 'display' do
                // elemento pai para 'none', efetivamente escondendo o
                // banner da visualização. Isso não remove o elemento
                // do documento, apenas o torna invisível e não ocupando
                // espaço na renderização da página.

    });
});


// Esta linha de código começa selecionando todos os
        // elementos na página que possuem a classe 'banner'.
document.querySelectorAll('.banner').forEach(banner => {
    // O método 'querySelectorAll' retorna uma NodeList de
            // todos os elementos que correspondem ao
            // seletor especificado.
    // 'forEach' é um método que itera sobre cada item na
            // NodeList. Cada item, que é um elemento DOM com a
            // classe 'banner', é passado para a função como 'banner'.

    // Para cada 'banner', o código adiciona um
            // ouvinte de evento de clique.
    banner.addEventListener('click', function() {
        // 'addEventListener' é um método que registra uma
                // função a ser chamada sempre que o evento
                // especificado (neste caso, 'click') é
                // disparado no elemento.
        // Dentro do manipulador de evento, definimos o que
                // acontecerá quando o usuário clicar em um banner.

        // 'window.open' é uma função que abre uma nova janela do
                // navegador ou uma nova aba, dependendo das
                // configurações do navegador do usuário e de
                // possíveis bloqueadores de pop-ups.
        window.open('https://www.youtube.com', '_blank');
        // 'https://www.udemy.com/course/python-rpa-e-excel-aprenda-automatizar-processos-e-planilhas/?referralCode=75F06FB2C5443C0A1FBF&couponCode=LETSLEARNNOWPP' é a URL que será aberta na
                // nova janela ou aba. Neste exemplo, está configurado
                // para abrir a página inicial do Curso de Python.
        // '_blank' é o target do link, que instrui o navegador a
                // abrir a URL em uma nova aba ou janela, garantindo
                // que a página atual não seja substituída pela nova página.
                
    });
});