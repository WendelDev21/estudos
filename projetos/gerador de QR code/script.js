document.getElementById('botaoGerar').addEventListener('click', function() {
    var texto = document.getElementById('entradaTexto').value;

    if (texto) {
        var contenedorQrcode = document.getElementById('qrcode');
        contenedorQrcode.innerHTML = '';

        var qrCode = new QRcode(contenedorQrcode, {
            text: texto,
            with:256,
            height: 256,
        });

        document.getElementById('botaoBaixar').style.display = 'block';
    } else {
        alert('Por favor, digite algum texto ou URL para gerar o QR code.');
    }
});

document.getElementById('botaoBaixar').addEventListener('click', function() {
    var contenedorQrcode = document.getElementById('qrcode').getElementsByTagName('canvas')[0];

    var link = document.createElement('a');

    link.href = contenedorQrcode.toDataURL("image/png");

    link.download = 'qrcode.png';

    link.click();
});