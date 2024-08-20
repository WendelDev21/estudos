/*
Parâmetros são variáveis listadas como parte
da definição de uma função, enquanto argumentos
são os valores reais passados para essas variáveis
quando a função é chamada.

Exemplo: Função para Personalizar Saudações

Criaremos uma função que recebe dois parâmetros: o
nome de uma pessoa e uma mensagem de saudação. A função
irá retornar uma saudação personalizada, combinando a
mensagem com o nome da pessoa.
*/

// Declaração da função com dois parâmetros: 'nome' e 'mensagem'
function saudacaoPersonalizada(nome, mensagem) {
    return `${mensagem}, ${nome}!`;
}

  // Chamando a função com dois argumentos: 'Alice' para 'nome' e 'Bom dia' para 'mensagem'
let saudacaoParaAlice = saudacaoPersonalizada('Alice', 'Bom dia');

  // Chamando a função novamente com diferentes argumentos: 'Bob' e 'Boa noite'
let saudacaoParaBob = saudacaoPersonalizada('Bob', 'Boa noite');

  // Exibindo as saudações personalizadas no console
  console.log(saudacaoParaAlice); // Saída esperada: "Bom dia, Alice!"
  console.log(saudacaoParaBob); // Saída esperada: "Boa noite, Bob!"

  // -------------------------------------


/*
Vamos criar uma função que simula o cálculo de descontos
para compras em uma loja. A função receberá dois parâmetros: o
valor total da compra e a porcentagem do desconto a ser
aplicada. Ela retornará o valor final após a aplicação do desconto.

Exemplo: Função para Calcular Desconto
*/

// Declaração da função com dois parâmetros: 'valorTotal' e 'porcentagemDesconto'
function calcularDesconto(valorTotal, porcentagemDesconto) {
    let valorDesconto = (valorTotal * porcentagemDesconto) / 100;
    let valorFinal = valorTotal - valorDesconto;
    return valorFinal;
}

  // Chamando a função com argumentos específicos
  let valorCompra1 = calcularDesconto(200, 10); // 10% de desconto em uma compra de R$200
  let valorCompra2 = calcularDesconto(500, 15); // 15% de desconto em uma compra de R$500

  // Exibindo os valores finais após descontos no console
  console.log(`Valor final após desconto: R$${valorCompra1}`); // Saída esperada: Valor final após desconto: R$180
  console.log(`Valor final após desconto: R$${valorCompra2}`); // Saída esperada: Valor final após desconto: R$425