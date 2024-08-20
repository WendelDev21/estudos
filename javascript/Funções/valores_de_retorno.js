/*
Valores de retorno são os dados que uma função pode
enviar de volta ao código que a chamou. Isso é feito
usando a palavra-chave return. Uma função pode retornar
qualquer tipo de dado e até mesmo outros objetos ou funções.

Exemplo: Converter Horas em Minutos

Neste exemplo, criaremos uma função que recebe um número
representando horas e retorna o equivalente dessas horas em minutos.
*/

// Declaração da função que converte horas em minutos
function converterHorasEmMinutos(horas) {
    let minutos = horas * 60;
    return minutos;
}

  // Chamando a função com um argumento específico
let minutosDe3Horas = converterHorasEmMinutos(3);

  // Exibindo o resultado no console
  console.log(`3 horas equivalem a ${minutosDe3Horas} minutos.`); // Saída esperada: 3 horas equivalem a 180 minutos.

  // -----------------------------------------------------------


