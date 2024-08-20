/*
Exercício: Formatar Endereço Completo

Objetivo: Escrever uma função em JavaScript chamada
formatarEndereco que recebe cinco parâmetros representando
diferentes partes de um endereço: rua, numero, bairro, cidade, e estado. 

A função deve retornar uma string formatada com o endereço completo.

Descrição do Exercício:

Defina uma Função: Crie uma função formatarEndereco que
aceite cinco parâmetros: rua, numero, bairro, cidade, e estado.

-  Formate o Endereço: Dentro da função, combine os parâmetros
em uma única string formatada que representa o endereço completo.

- Retorne o Endereço Formatado: A função deve retornar a
string do endereço completo.

- Teste a Função: Chame a função com diferentes valores para
cada parâmetro e verifique se a saída está corretamente formatada.

- Exiba os Resultados: Use console.log para mostrar o endereço
formatado para cada conjunto de testes.

Exemplo de Dados para Teste:
Rua: "Av. Brasil", Número: "1000", Bairro: "Centro", Cidade: "Rio de Janeiro", Estado: "RJ".

*/

function formatarEndereco(rua, numero, bairro, cidade, estado){
    let enderecoCompleto = `${rua}, ${numero} - ${bairro}, ${cidade} - ${estado}`;
    return enderecoCompleto;
}
let enderecoFormatado = formatarEndereco("Av. Brasil", "1000", "Centro", "Rio de Janeiro", "RJ");
console.log(`Endereço: ${enderecoFormatado}`);