/*Aqui está um exemplo de como criar métodos públicos
em JavaScript usando Programação Orientada a Objetos (POO)*/

// Definição da classe ContaBancaria em JavaScript
class ContaBancaria {

// Construtor da classe é chamado automaticamente ao criar uma nova instância da classe
constructor(titular, saldoInicial) {

    // 'this' refere-se à instância específica da classe que está sendo criada
    this.titular = titular; // Atribui o valor do argumento 'titular' à propriedade 'titular' da instância
    this.saldo = saldoInicial; // Atribui o valor do argumento 'saldoInicial' à propriedade 'saldo' da instância

}

// Método público 'depositar' é usado para adicionar um valor ao saldo da conta
depositar(valor) {

    // 'this.saldo += valor;' adiciona o valor passado ao método ao saldo atual da conta
    // this.saldo = this.saldo + valor
    this.saldo += valor; // 'this.saldo' acessa a propriedade 'saldo' da instância atual da classe
    
    // Imprime uma mensagem no console com o valor depositado e o novo saldo
    console.log(`Depósito de ${valor} realizado. Novo saldo: ${this.saldo}`);

}


// Método público para sacar dinheiro da conta
sacar(valor) {

    // Verifica se o valor solicitado para saque é maior que o saldo disponível na conta
    if (valor > this.saldo) {

    // Caso não haja saldo suficiente, informa ao usuário que o saldo é insuficiente
    console.log(`Saldo insuficiente para sacar ${valor}`);

    } else {

    // Se o saldo for suficiente, realiza a subtração do valor do saldo atual
    this.saldo -= valor;

    // Exibe uma mensagem no console indicando que o saque foi realizado com sucesso e mostra o novo saldo
    console.log(`Saque de ${valor} realizado. Novo saldo: ${this.saldo}`);
    
    }
}


// Método público para verificar o saldo da conta
verificarSaldo() {

    // Imprime no console o saldo atual da conta
    // 'this.saldo' acessa diretamente a propriedade 'saldo' da instância atual da classe,
    // permitindo visualizar o saldo disponível no momento da consulta
    console.log(`Saldo atual: ${this.saldo}`);

}

}

// Criando uma instância da classe ContaBancaria
const minhaConta = new ContaBancaria('João', 1000);

// Realizando algumas operações na conta
minhaConta.verificarSaldo(); // Saldo atual: 1000
minhaConta.depositar(500); // Depósito de 500 realizado. Novo saldo: 1500
minhaConta.sacar(200); // Saque de 200 realizado. Novo saldo: 1300
minhaConta.verificarSaldo(); // Saldo atual: 1300
minhaConta.sacar(2000); // Saldo insuficiente
minhaConta.sacar(400); // Saque de 400 realizado. Novo saldo: 900

/*Neste exemplo, a classe ContaBancaria possui três
métodos públicos: depositar, sacar e verificarSaldo. 

Esses métodos podem ser utilizados externamente para
interagir com objetos da classe ContaBancaria, permitindo
depósitos, saques e verificação do saldo. */

/*
Entender os métodos públicos em programação orientada a objetos (POO) em JavaScript é crucial
para saber como interagir e manipular objetos de uma classe. Vamos explorar esse conceito utilizando o 
exemplo da classe ContaBancaria que fizemos.

O que são Métodos Públicos?
Métodos públicos são funções definidas dentro de uma classe que podem ser acessadas e chamadas em
qualquer instância dessa classe. No contexto de POO, esses métodos são a principal maneira pela qual
os objetos interagem com o mundo externo.

No exemplo da classe ContaBancaria, os métodos depositar, sacar, e verificarSaldo são públicos. Isso
significa que qualquer código externo que cria um objeto do tipo ContaBancaria pode chamar esses métodos
para modificar o estado do objeto ou obter informações sobre ele.

Por que usar Métodos Públicos?

Encapsulamento: Métodos públicos são uma parte fundamental do encapsulamento em POO. Encapsulamento é o
conceito de esconder os detalhes internos do funcionamento de uma classe e expor apenas o necessário
através de métodos públicos. Isso significa que você pode mudar a implementação interna de um método
público sem afetar o código que o utiliza, desde que a interface do método (ou seja, como ele é chamado
e quais parâmetros espera) permaneça a mesma.

Controle de Acesso: Ao utilizar métodos públicos, você define claramente como o estado de um objeto pode
ser alterado ou consultado. Isso evita que o estado interno do objeto seja modificado de maneira
inesperada ou incorreta, pois você pode incluir verificações e lógica específica dentro dos métodos
públicos para lidar com as entradas.

Reusabilidade: Métodos públicos também promovem a reusabilidade do código. Uma vez que você define um
método público em uma classe, qualquer objeto dessa classe pode utilizar esse método sem a necessidade
de reescrever o código.

Manutenção e Legibilidade: Classes com métodos públicos claros e bem definidos são mais fáceis de entender
e manter. Outros desenvolvedores podem facilmente ver o que está disponível para uso em cada objeto e
como interagir com ele.

Exemplo Detalhado da Classe ContaBancaria

Constructor: O constructor é um método especial que é chamado quando um novo objeto da classe é criado.
Ele inicializa as propriedades do objeto, como titular e saldo. Neste caso, titular recebe o nome do
proprietário da conta e saldo o saldo inicial.

depositar(valor): Este método adiciona o valor passado ao saldo atual da conta. Isso é feito através da
operação this.saldo += valor, que é uma forma abreviada de this.saldo = this.saldo + valor. Após
modificar o saldo, ele exibe uma mensagem indicando o valor depositado e o novo saldo.

sacar(valor): Antes de sacar, este método verifica se o saldo disponível é suficiente para o saque. Se
não for, ele informa que o saldo é insuficiente. Caso contrário, ele subtrai o valor do saldo e mostra
uma mensagem com o novo saldo.

verificarSaldo(): Este método simplesmente exibe o saldo atual da conta. É uma forma de consultar o estado
do objeto sem modificá-lo.


Os métodos públicos da ContaBancaria permitem que operações como depósitos, saques e consultas de
saldo sejam realizadas de forma controlada e segura. Eles garantem que as propriedades do objeto só possam
ser alteradas de maneiras pré-definidas, protegendo assim a integridade dos dados.
*/