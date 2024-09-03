/*
Sistema de Registro de Produtos com Objetos

Você foi contratado para desenvolver um sistema de registro
de produtos em JavaScript utilizando objetos. O sistema deve
permitir que o usuário realize as seguintes operações:

Adicionar Produto: O usuário pode adicionar um novo produto informando
o nome, preço e quantidade em estoque.

Atualizar Preço: Ele pode atualizar o preço de um produto
existente no registro, fornecendo o nome do produto e o novo preço.

Atualizar Quantidade: Também pode atualizar a quantidade
em estoque de um produto existente, informando o nome
do produto e a nova quantidade.

Remover Produto: O usuário pode remover um produto do
registro, especificando o nome do produto a ser removido.

Exibir Produtos: Exibe todos os produtos registrados,
mostrando nome, preço e quantidade em estoque.

Sair: Encerra o programa.

O sistema deve armazenar os produtos utilizando objetos JavaScript.
Cada produto será representado por um objeto com propriedades
para nome, preço e quantidade em estoque.

Implemente esse sistema utilizando JavaScript e o módulo
readline para entrada e saída de dados.*/

// Importa o módulo 'readline' do Node.js, que é usado para interagir com o terminal de comando (input/output).
const readline = require('readline');

// Cria uma interface de leitura e escrita usando o módulo 'readline'.
// Configura 'process.stdin' como a entrada (input) para capturar os dados inseridos pelo usuário.
// Configura 'process.stdout' como a saída (output) para enviar dados ao terminal.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Inicializa um array 'registroProdutos' que armazenará objetos representando os produtos.
// Cada produto será um objeto com propriedades como nome, preço e quantidade.
let registroProdutos = [];

// Declara a função 'adicionarProduto' para adicionar novos produtos ao registro.
function adicionarProduto() {

    // Inicia uma série de perguntas ao usuário, começando pelo nome do produto.
    rl.question("Digite o nome do produto: ", (nome) => {
        
        // Após receber o nome, pergunta pelo preço do produto.
        rl.question("Digite o preço do produto: ", (preco) => {
        
            // Após receber o preço, pergunta pela quantidade do produto em estoque.
            rl.question("Digite a quantidade em estoque do produto: ", (quantidade) => {
        
                // Converte o preço recebido para um número decimal (float).
                preco = parseFloat(preco);
        
                // Converte a quantidade recebida para um número inteiro.
                quantidade = parseInt(quantidade);

                // Cria um objeto 'produto' com as propriedades nome, preco e quantidade.
                // Adiciona esse objeto ao array 'registroProdutos'.
                let produto = { nome, preco, quantidade };
                registroProdutos.push(produto);

                // Imprime uma mensagem de confirmação no terminal.
                console.log(`Produto "${nome}" adicionado ao registro.`);

                // Chama a função 'menu' para voltar ao menu principal após a adição do produto.
                menu();
            });
        });
    });
}

// Função para atualizar o preço de um produto existente
function atualizarPreco() {

    // Solicita ao usuário para inserir o nome do produto cujo preço ele deseja atualizar.
    // A função 'rl.question' exibe uma mensagem no terminal e aguarda uma entrada do usuário.
    rl.question("Digite o nome do produto que deseja atualizar o preço: ", (nome) => {
        
        // Procura no array 'registroProdutos' por um produto cujo nome corresponda ao fornecido pelo usuário.
        // O método 'find' retorna o primeiro elemento que satisfaz a condição especificada na
        // função de callback, aqui comparando o 'nome' de cada 'item' com o 'nome' fornecido.
        let produto = registroProdutos.find(item => item.nome === nome);

        // Verifica se um produto com o nome especificado foi encontrado no registro.
        if (produto) {

            // Se o produto for encontrado, solicita ao usuário que digite o novo preço para esse produto.
            rl.question("Digite o novo preço do produto: ", (novoPreco) => {
                
                // Converte a entrada do usuário, que é uma string, para um número decimal (float).
                // Esta conversão é necessária porque o preço precisa ser armazenado como um número
                // para permitir cálculos futuros ou comparações.
                novoPreco = parseFloat(novoPreco);

                // Atualiza o preço do produto com o novo valor fornecido pelo usuário.
                // Esta operação modifica diretamente o objeto encontrado no array 'registroProdutos'.
                produto.preco = novoPreco;

                // Exibe uma mensagem no terminal confirmando que o preço foi atualizado.
                // Utiliza 'toFixed(2)' para formatar o preço para duas casas decimais, garantindo
                // que o preço seja exibido de forma padrão como valor monetário.
                console.log(`Preço do produto "${nome}" atualizado para R$ ${novoPreco.toFixed(2)}.`);

                // Chama a função 'menu' para retornar ao menu principal, permitindo ao
                // usuário escolher outra operação ou sair do programa.
                menu();

            });
        } else {

            // Se nenhum produto com o nome especificado for encontrado, informa o usuário sobre a situação.
            console.log(`Produto "${nome}" não encontrado.`);

            // Retorna ao menu principal para que o usuário possa tentar novamente ou realizar outras operações.
            menu();

        }
    });
}


// Define a função 'atualizarQuantidade' para alterar a quantidade em estoque de um produto específico.
function atualizarQuantidade() {

    // Solicita ao usuário que digite o nome do produto para o qual deseja atualizar a quantidade em estoque.
    // 'rl.question' é um método que exibe uma mensagem (primeiro argumento) e aguarda uma entrada do
    // usuário (segundo argumento é uma função callback que processa a resposta).
    rl.question("Digite o nome do produto que deseja atualizar a quantidade em estoque: ", (nome) => {
        
        // Busca no array 'registroProdutos' por um produto que tenha um nome correspondente ao fornecido.
        // O método 'find' percorre o array e retorna o primeiro elemento que satisfaz a condição
        // especificada na função callback.
        let produto = registroProdutos.find(item => item.nome === nome);

        // Verifica se o produto foi encontrado.
        if (produto) {

            // Se o produto for encontrado, solicita ao usuário que digite a nova quantidade em
            // estoque desse produto.
            rl.question("Digite a nova quantidade em estoque do produto: ", (novaQuantidade) => {
                
                // Converte a entrada do usuário para um número inteiro usando 'parseInt'.
                // É importante converter porque a quantidade em estoque deve ser um valor numérico
                // inteiro para manter a consistência dos dados.
                novaQuantidade = parseInt(novaQuantidade);

                // Atualiza a propriedade 'quantidade' do produto encontrado com o novo valor fornecido
                // pelo usuário.
                produto.quantidade = novaQuantidade;

                // Exibe uma mensagem no console confirmando que a quantidade em estoque foi atualizada.
                console.log(`Quantidade em estoque do produto "${nome}" atualizada para ${novaQuantidade}.`);

                // Chama a função 'menu' para retornar ao menu principal, permitindo ao usuário
                // escolher outras opções ou encerrar o programa.
                menu();
            });

        } else {

            // Se o produto com o nome especificado não for encontrado, informa ao usuário.
            console.log(`Produto "${nome}" não encontrado.`);

            // Retorna ao menu principal para oferecer ao usuário outras opções ou a possibilidade
            // de tentar novamente.
            menu();
        }
    });
}

// Define a função 'removerProduto' para deletar um produto existente no registro de produtos.
function removerProduto() {

    // Solicita ao usuário que insira o nome do produto que deseja remover.
    // O método 'rl.question' mostra uma pergunta ao usuário e espera por uma entrada, que é
    // processada pela função callback fornecida.
    rl.question("Digite o nome do produto que deseja remover: ", (nome) => {
        
        // Utiliza o método 'filter' para criar um novo array excluindo o produto com o nome especificado.
        // O método 'filter' percorre o array 'registroProdutos' e inclui apenas os elementos que
        // não correspondem ao nome fornecido.
        // Isso efetivamente remove o produto do registro se ele existir.
        registroProdutos = registroProdutos.filter(item => item.nome !== nome);

        // Imprime uma mensagem no console confirmando a remoção do produto.
        console.log(`Produto "${nome}" removido do registro.`);

        // Após a operação de remoção, retorna ao menu principal chamando a função 'menu'.
        menu();

    });
}


// Define a função 'exibirProdutos' para listar todos os produtos atualmente registrados.
function exibirProdutos() {

    // Exibe um cabeçalho no console para indicar que a listagem de produtos registrados começará.
    console.log("Produtos registrados:");

    // Utiliza o método 'forEach' para iterar sobre cada produto no array 'registroProdutos'.
    // O método 'forEach' executa uma função fornecida uma vez para cada elemento do array.
    registroProdutos.forEach(produto => {

        // Para cada produto, imprime no console o nome, preço formatado com duas casas decimais, e a quantidade em estoque.
        // O método 'toFixed(2)' é usado para formatar o preço para garantir que seja exibido como um valor monetário padrão.
        console.log(`Nome: ${produto.nome}, Preço: R$ ${produto.preco.toFixed(2)}, Quantidade em estoque: ${produto.quantidade}`);
    
    });

    // Após listar todos os produtos, retorna ao menu principal chamando a função 'menu'.
    menu();
}


// Define a função 'menu' para exibir um menu de opções e processar a escolha do usuário.
function menu() {

    // Exibe uma lista de opções para o usuário e solicita que ele escolha uma digitando o
    // número correspondente.
    // 'rl.question' é utilizado para exibir a mensagem e capturar a entrada do usuário, que
    // será processada pela função callback fornecida.
    rl.question(`Escolha uma opção:
    1. Adicionar Produto
    2. Atualizar Preço
    3. Atualizar Quantidade
    4. Remover Produto
    5. Exibir Produtos
    6. Sair
    `, (escolha) => {

        // Utiliza a estrutura 'switch' para direcionar o fluxo do programa com base na entrada do usuário.
        // Cada 'case' corresponde a uma opção do menu e chama a função apropriada.
        switch (escolha) {
            
            case '1':  // Se o usuário escolher a opção 1, chama a função 'adicionarProduto'.
                adicionarProduto();
                break;
            case '2':  // Se a opção 2 for escolhida, chama a função 'atualizarPreço'.
                atualizarPreco();
                break;
            case '3':  // Para a opção 3, chama a função 'atualizarQuantidade'.
                atualizarQuantidade();
                break;
            case '4':  // Se a opção 4 for selecionada, chama a função 'removerProduto'.
                removerProduto();
                break;
            case '5':  // A opção 5 chama a função 'exibirProdutos' para listar todos os produtos.
                exibirProdutos();
                break;
            case '6':  // A opção 6 encerra o programa, fechando a interface de leitura.
                rl.close();  // Chama 'rl.close' para fechar a interface de linha de comando, finalizando o programa.
                break;
            default:  // Se nenhuma das opções válidas for escolhida, informa ao usuário e exibe o menu novamente.
                console.log("Opção inválida. Tente novamente.");
                menu();
        }
    });
}

// Inicia o programa chamando a função 'menu', que exibe o menu inicial e permite ao usuário começar a interagir com o programa.
menu();