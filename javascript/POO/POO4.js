// Importa o módulo 'readline' do Node.js, que é usado para manipular entrada e saída do terminal.
const readline = require('readline');

// Cria uma interface de leitura e escrita para interagir com o usuário através do terminal.
const rl = readline.createInterface({
    input: process.stdin,  // Configura a entrada padrão do terminal (onde o usuário digita) como a fonte de entrada.
    output: process.stdout // Configura a saída padrão do terminal (onde o texto é exibido) como destino da saída.
});

// Define a classe 'Usuario', uma estrutura para criar objetos que representam usuários.
class Usuario {

// Construtor da classe Usuario que inicializa cada instância com 'nome' e 'email'.
constructor(nome, email) {
    this.nome = nome;   // Atribui o valor do parâmetro 'nome' à propriedade 'nome' do objeto.
    this.email = email; // Atribui o valor do parâmetro 'email' à propriedade 'email' do objeto.
    }

}

// Definição da classe GerenciadorUsuarios
class GerenciadorUsuarios {

    // Construtor da classe, chamado ao criar uma instância de GerenciadorUsuarios
    constructor() {

        // Inicializa uma lista vazia para armazenar usuários
        this.usuarios = [];

    }

    // Método para adicionar um novo usuário ao gerenciador
    adicionarUsuario(nome, email) {

        // Cria uma nova instância da classe Usuario com os dados fornecidos
        const novoUsuario = new Usuario(nome, email);

        // Adiciona o novo usuário ao array de usuários
        this.usuarios.push(novoUsuario);

        // Imprime uma mensagem no console indicando que o usuário foi adicionado com sucesso
        console.log('Usuário adicionado com sucesso!');

    }

    // Método para exibir todos os usuários cadastrados
    exibirUsuarios() {

        // Imprime um cabeçalho para a lista de usuários
        console.log('=== Lista de Usuários ===');

        // Itera sobre o array de usuários, usando forEach para acessar cada usuário e seu índice
        this.usuarios.forEach((usuario, index) => {

        // Imprime o índice (começando de 1) e os detalhes de cada usuário
        console.log(`Usuário ${index + 1}: ${usuario.nome} (${usuario.email})`);
        
        });
        
        // Imprime uma linha de fechamento para a lista de usuários
        console.log('=========================');

    }


    // Método para alterar o email de um usuário específico na lista de usuários
    alterarEmail(indice, novoEmail) {

        // Verifica se o índice fornecido é válido, isto é, se está dentro do intervalo do array de usuários
        if (indice >= 0 && indice < this.usuarios.length) {

            // Se o índice é válido, atualiza o email do usuário nessa posição com o novo email fornecido
            this.usuarios[indice].email = novoEmail;

            // Imprime uma mensagem no console informando que o email foi alterado com sucesso
            console.log('Email do usuário alterado com sucesso!');

        } else {

            // Se o índice não é válido (ou seja, menor que zero ou maior ou igual ao número de usuários),
            // imprime uma mensagem de erro no console indicando que o índice é inválido
            console.log('Índice inválido.');

        }
    }


    // Método para deletar um usuário da lista de usuários
    deletarUsuario(indice) {

        // Verifica se o índice fornecido é válido dentro do intervalo do array de usuários
        if (indice >= 0 && indice < this.usuarios.length) {

            // Se o índice é válido, remove o usuário na posição especificada do array
            this.usuarios.splice(indice, 1);

            // Exibe uma mensagem no console confirmando que o usuário foi deletado com sucesso
            console.log('Usuário deletado com sucesso!');

        } else {

            // Se o índice fornecido é inválido (menor que 0 ou maior ou igual ao tamanho do array),
            // exibe uma mensagem no console indicando que o índice é inválido
            console.log('Índice inválido.');

        }
    }


}


// Função para exibir o menu
function exibirMenu() {
    console.log('=== Menu ===');
    console.log('1. Adicionar Usuário');
    console.log('2. Exibir Usuários');
    console.log('3. Alterar Email de Usuário');
    console.log('4. Deletar Usuário');
    console.log('5. Sair');
}

// Criando uma instância da classe GerenciadorUsuarios
const gerenciador = new GerenciadorUsuarios();

// Função para processar a opção escolhida pelo usuário no menu
function processarOpcao(opcao) {

    // Utiliza uma estrutura de controle switch para direcionar a lógica 
    // com base na opção escolhida
    switch (opcao) {

        case '1': // Opção 1: Adicionar um novo usuário

            // Solicita o nome do usuário via linha de comando
            rl.question('Digite o nome do usuário: ', (nome) => {
        
                // Após obter o nome, solicita o email do usuário
                rl.question('Digite o email do usuário: ', (email) => {
        
                // Adiciona o usuário ao gerenciador e exibe novamente o menu
                gerenciador.adicionarUsuario(nome, email);
                exibirMenu();
            });
        });
        break;
        
        case '2': // Opção 2: Exibir todos os usuários
        
            // Chama o método para exibir todos os usuários cadastrados
            gerenciador.exibirUsuarios();
            
            // Exibe o menu novamente após listar os usuários
            exibirMenu();
            break;
        
        case '3': // Opção 3: Alterar o email de um usuário

            // Solicita o índice do usuário cujo email será alterado
            rl.question('Digite o índice do usuário: ', (indice) => {
            
                // Solicita o novo email para esse usuário
                rl.question('Digite o novo email do usuário: ', (novoEmail) => {
        
                // Converte o índice para um número inteiro, ajusta para índice base-zero e altera o email
                gerenciador.alterarEmail(parseInt(indice) - 1, novoEmail);
        
                // Exibe o menu novamente após a alteração
                exibirMenu();
                
            });
        });
            break;
        
        case '4': // Opção 4: Deletar um usuário
        
            // Solicita o índice do usuário a ser deletado
            rl.question('Digite o índice do usuário a ser deletado: ', (indice) => {
            
                // Deleta o usuário baseado no índice fornecido, ajustado para índice base-zero
                gerenciador.deletarUsuario(parseInt(indice) - 1);
            
                // Exibe o menu novamente após deletar o usuário
                exibirMenu();
            });
            break;


        case '5': // Opção 5: Sair do programa

            // Exibe uma mensagem indicando que o programa será encerrado
            console.log('Saindo...');
            
            // Encerra a interface de leitura de linha, fechando o programa
            rl.close();
            break;
            
        default: // Opção padrão para qualquer entrada inválida
            
            // Informa ao usuário que a opção selecionada é inválida
            console.log('Opção inválida.');
            
            // Exibe o menu novamente para uma nova seleção
            exibirMenu();
    }
}


// Exibir o menu inicial
exibirMenu();

// Configurar um listener para aguardar a entrada do usuário
// 'on' é um método que escuta eventos especificados, neste caso, 'line'.
// O evento 'line' é disparado quando o usuário insere uma linha de texto e pressiona Enter.
rl.on('line', (input) => {

// 'input' contém a linha de texto que o usuário digitou.
// 'trim()' é utilizado para remover espaços extras do início e do fim da entrada, evitando erros de processamento.
// Após limpar a entrada, 'processarOpcao' é chamada para manejar a escolha do usuário baseada no texto inserido.
processarOpcao(input.trim());

});  