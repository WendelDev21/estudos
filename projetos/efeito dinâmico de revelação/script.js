// Adiciona um ouvinte de evento que aguarda o
// carregamento completo do conteúdo do DOM.
document.addEventListener('DOMContentLoaded', function() {

    // Obtém o elemento <canvas> pelo ID 'tela' e o
            // armazena na variável 'tela'.
    const tela = document.getElementById('tela');
    
    // Acessa o contexto de renderização 2D do canvas, que
            // permite desenhar sobre ele, e o armazena
            // na variável 'contexto'.
    const contexto = tela.getContext('2d');

    // Cria dois novos objetos de imagem para 'imagemTopo' e 'imagemFundo'.
    const imagemTopo = new Image();
    const imagemFundo = new Image();

    // Define o caminho do arquivo de imagem para 'imagemTopo',
            // que será usada como a camada superior.
    imagemTopo.src = 'imagem-superior.jpg'; // Caminho para a imagem de cima
    
    // Define o caminho do arquivo de imagem para 'imagemFundo',
            // que será usada como a camada de fundo.
    imagemFundo.src = 'imagem-inferior.jpg'; // Caminho para a imagem de baixo

    // Declara e inicializa as variáveis para
            // armazenar a posição atual do mouse no canvas.
    let posicaoMouseX = 0, posicaoMouseY = 0;
    
    // Define o raio do círculo que será usado para o
            // efeito de "raspadinha" como 100 pixels.
    let raio = 100; // Raio aumentado para 100

    function desenharImagens() {

        // Limpa o conteúdo inteiro do canvas. Isso é útil para
                // garantir que não haja resíduos gráficos anteriores
                // cada vez que a função é chamada.
        contexto.clearRect(0, 0, tela.width, tela.height);
    
        // Desenha a imagem de fundo no canvas. A imagem é escalada
                // para preencher completamente o canvas, utilizando
                // as dimensões do mesmo.
        contexto.drawImage(imagemFundo, 0, 0, tela.width, tela.height);
    
        // Salva o estado atual do contexto antes de começar a
                // fazer alterações. Isso permite restaurar esse
                // estado mais tarde, garantindo que alterações
                // como clippings não afetem desenhos futuros.
        contexto.save();
    
        // Começa um novo caminho ou reinicia o caminho atual.
                // É necessário para começar a desenhar
                // formas como arcos.
        contexto.beginPath();
    
        // Desenha um arco (parte de um círculo) no canvas,
                // que será usado para criar um efeito de 'raspadinha'. 
        // 'posicaoMouseX' e 'posicaoMouseY' definem o centro do arco.
        // 'raio' é o raio do arco.
        // '0' e 'Math.PI * 2' são os ângulos inicial e final,
                // respectivamente, desenhando um círculo completo.
        // 'true' define a direção do desenho do arco como
                // anti-horária (não faz diferença aqui pois o
                // arco é um círculo completo).
        contexto.arc(posicaoMouseX, posicaoMouseY, raio, 0, Math.PI * 2, true);
    
        // Aplica um clipping path. O clipping path é o
                // contorno do último caminho começado com beginPath().
                // Tudo que é desenhado após 'clip()' será visível
                // apenas dentro deste caminho.
        contexto.clip();
    
        // Desenha a imagem superior no canvas. Esta imagem será
                // visível apenas dentro do clipping path definido
                // pelo arco, criando o efeito de revelar partes da
                // imagem superior ao interagir com o canvas.
        contexto.drawImage(imagemTopo, 0, 0, tela.width, tela.height);
    
        // Restaura o estado anteriormente salvo do contexto. Isso
                // remove o clipping path e qualquer outra configuração
                // que poderia afetar desenhos futuros.
        contexto.restore();

    }
    

    // Define o mesmo manipulador de evento 'onload' para as
                // imagens de fundo e topo. Este evento é acionado
                // quando as imagens são completamente carregadas.
    imagemFundo.onload = imagemTopo.onload = function() {

        // Chama a função 'desenharImagens()' assim que as imagens
                // estão carregadas, garantindo que o canvas seja
                // inicializado com as imagens visíveis antes de
                // qualquer interação.
        desenharImagens();

    };

    // Adiciona um ouvinte de eventos de movimento do
                // mouse sobre o elemento canvas.
    tela.addEventListener('mousemove', function(e) {

        // Obtém o retângulo que delimita o canvas no documento.
                // Esse método fornece informações como a posição do
                // elemento na tela e suas dimensões.
        const retangulo = tela.getBoundingClientRect();
        
        // Calcula a posição do mouse em relação ao canto
                // superior esquerdo do canvas.
        // 'e.clientX' é a posição horizontal do mouse
                // enquanto 'retangulo.left' é a distância horizontal do
                // elemento em relação ao canto esquerdo da janela.
        posicaoMouseX = e.clientX - retangulo.left;
        
        // 'e.clientY' é a posição vertical do mouse
                // enquanto 'retangulo.top' é a distância vertical do
                // elemento em relação ao topo da janela.
        posicaoMouseY = e.clientY - retangulo.top;
        
        // Chama a função 'desenharImagens()' cada vez que o
                // mouse se move sobre o canvas. Isso atualiza o
                // efeito de "raspadinha" baseado na posição
                // atual do mouse.
        desenharImagens();

    });


    // Adiciona um ouvinte de evento 'mouseout' ao elemento
                // canvas. Esse evento é acionado quando o cursor
                // do mouse deixa a área do elemento canvas.
    tela.addEventListener('mouseout', function() {

        // Limpa o canvas inteiro. Esta função remove qualquer
                // conteúdo desenhado anteriormente no canvas,
                // incluindo linhas, textos, imagens, etc.
        // O primeiro argumento (0) e o segundo argumento (0) definem as
                // coordenadas do canto superior esquerdo do retângulo a
                // limpar, que neste caso é o início do canvas.
        // 'tela.width' e 'tela.height' são a largura e a altura do
                // canvas, respectivamente, especificando que o
                // retângulo a limpar é o canvas inteiro.
        contexto.clearRect(0, 0, tela.width, tela.height);

        // Desenha a imagem de fundo no canvas novamente.
        // Essa ação repinta a imagem original de fundo
                // após o canvas ter sido limpo.
        // O primeiro argumento (0) e o segundo argumento (0)
                // definem as coordenadas do canto superior
                // esquerdo onde a imagem será colocada.
        // 'tela.width' e 'tela.height' são usados para definir o
                // tamanho com que a imagem será desenhada,
                // cobrindo todo o canvas.
        contexto.drawImage(imagemFundo, 0, 0, tela.width, tela.height);
        
    });

});