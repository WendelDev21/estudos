// Seleciona o elemento botão com o ID 'botaoGerar' e
// adiciona um ouvinte de evento para reagir a cliques.
document.getElementById('botaoGerar').addEventListener('click', function() {

    // Obtém o valor atual do elemento de entrada de
            // texto com o ID 'entradaTexto' e o armazena na variável 'texto'.
    var texto = document.getElementById('entradaTexto').value;

    // Verifica se a variável 'texto' não está vazia.
    if (texto) {

        // Seleciona o elemento com o ID 'qrcode' e armazena a
                // referência na variável 'contenedorQrCode'.
        var contenedorQrCode = document.getElementById('qrcode');

        // Limpa qualquer conteúdo HTML anterior dentro do
                // elemento 'qrcode', preparando-o para um novo QR Code.
        contenedorQrCode.innerHTML = ''; // Limpa o QR Code anterior, se existir

        // Cria uma nova instância do QRCode dentro do 'contenedorQrCode'
                // usando a biblioteca QRCodeJS.
        var qrCode = new QRCode(contenedorQrCode, {
            text: texto, // Define o texto que será transformado em QR Code
            width: 256, // Define a largura do QR Code como 256 pixels
            height: 256, // Define a altura do QR Code como 256 pixels
        });

        // Seleciona o botão de download com o ID 'botaoBaixar' e
                // muda o estilo de 'display' para 'block', tornando-o visível.
        document.getElementById('botaoBaixar').style.display = 'block';

    } else {

        // Exibe um alerta para o usuário se nenhum texto ou URL
                // foi inserido, solicitando que ele forneça
                // algum conteúdo para gerar o QR Code.
        alert('Por favor, digite algum texto ou URL para gerar o QR Code.');

    }
});


// Adiciona um ouvinte de evento de clique ao
                // elemento botão com o ID 'botaoBaixar'.
document.getElementById('botaoBaixar').addEventListener('click', function() {

    // Obtém o primeiro elemento <canvas> dentro do contêiner
                // de QR Code, que contém a representação
                // visual do QR Code.
    var contenedorQrCode = document.getElementById('qrcode').getElementsByTagName('canvas')[0];

    // Cria um novo elemento de âncora (<a>) no documento.
                // Esse elemento será usado para facilitar o
                // download do QR Code.
    var link = document.createElement('a');

    // Define o atributo 'href' do elemento de âncora para a
                // representação em formato de dados URL da
                // imagem do QR Code, que é gerada pelo método 'toDataURL'.
    link.href = contenedorQrCode.toDataURL("image/png");
    // O método 'toDataURL' é chamado sobre o elemento <canvas> para
                // obter a imagem em formato PNG como uma string
                // de URL codificada em base64.

    // Define o atributo 'download' do elemento de âncora,
                // especificando o nome do arquivo que será
                // usado quando o usuário salvar o download.
    link.download = 'qrcode.png';
    // O valor 'qrcode.png' é o nome de arquivo proposto para o
                // arquivo baixado, indicando ao navegador que o
                // recurso deve ser baixado ao invés de navegado.

    // Dispara um clique programaticamente no elemento de âncora.
                // Isso inicia o download do arquivo
                // definido no atributo 'href'.
    link.click();
    // Esse método 'click' simula um clique do usuário, que é o
                // que efetivamente inicia o processo de download.
                
});