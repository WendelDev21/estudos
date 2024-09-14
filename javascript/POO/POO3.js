// Definindo a classe 'Pessoa'
class Pessoa {

// Construtor da classe é chamado automaticamente quando um novo objeto desta classe é criado.
constructor(nome) {
    
    // 'this.nome' é uma propriedade do objeto Pessoa. Aqui, 'this' refere-se ao objeto que está sendo criado.
    // O valor passado para o parâmetro 'nome' no momento da criação do objeto é atribuído à propriedade 'nome'.
    this.nome = nome;  // Armazena o nome da pessoa como uma string dentro do objeto.

    // 'this.acordado' é uma propriedade do objeto que indica se a pessoa está acordada ou não.
    // Inicialmente, toda nova pessoa é criada como não acordada, então 'this.acordado' é definido como 'false'.
    this.acordado = false;  // Armazena um valor booleano (verdadeiro ou falso).

    // 'this.comendo' é uma propriedade do objeto que indica se a pessoa está comendo ou não.
    // Assim como 'acordado', cada pessoa nova não está comendo quando criada, então isso é definido como 'false'.
    this.comendo = false;  // Armazena um valor booleano.

    // 'this.dirigindo' é uma propriedade do objeto que indica se a pessoa está dirigindo ou não.
    // Inicialmente, presume-se que a pessoa não está dirigindo, então 'this.dirigindo' é definido como 'false'.
    this.dirigindo = false;  // Armazena um valor booleano.

    // Resumindo, o construtor inicializa um objeto Pessoa com as propriedades nome, acordado, comendo e dirigindo.
    // Isso prepara o objeto para representar diferentes estados e ações de uma pessoa na vida real.
}


// Método para acordar
acordar() {

    // A condição 'if (!this.acordado)' verifica se a propriedade 'acordado' do objeto é falsa (ou seja, se a pessoa não está acordada).
    if (!this.acordado) {

    // Se a condição for verdadeira (a pessoa não está acordada), esta linha será executada.
    console.log(`${this.nome} acordou.`); // Imprime uma mensagem no console informando que a pessoa acordou.
    this.acordado = true; // Altera a propriedade 'acordado' do objeto para true, indicando que agora a pessoa está acordada.
    
    } else {
    
    // Se a condição for falsa (a pessoa já está acordada), esta linha será executada.
    console.log(`${this.nome} já está acordado.`); // Imprime uma mensagem no console informando que a pessoa já está acordada.
    
    }
}


// Método para dormir
dormir() {

    // Verifica se a pessoa está acordada e simultaneamente não está comendo nem dirigindo.
    if (this.acordado && !this.comendo && !this.dirigindo) {

    // Se todas as condições forem verdadeiras, ou seja, a pessoa está acordada e não está nem comendo nem dirigindo:
    console.log(`${this.nome} dormiu.`); // Exibe no console que a pessoa dormiu.
    this.acordado = false; // Altera a propriedade 'acordado' para false, indicando que agora a pessoa está dormindo.
    
    } else if (!this.acordado) {

    // Se a pessoa já não estiver acordada:
    console.log(`${this.nome} já está dormindo.`); // Exibe no console que a pessoa já está dormindo.
    
    } else {

    // Se a pessoa está acordada mas está comendo ou dirigindo:
    console.log(`${this.nome} não pode dormir enquanto está comendo ou dirigindo.`); // Exibe no console que a pessoa não pode dormir enquanto realiza essas atividades.
    }

}


// Método para comer
comer() {

    // Primeira condição: Verifica se a pessoa não está comendo, está acordada, e não está dirigindo.
    // Cada parte da condição é avaliada para garantir que a ação de comer só pode ser iniciada sob condições apropriadas.
    if (!this.comendo && this.acordado && !this.dirigindo) {

    // Se a pessoa não está comendo, está acordada e não está dirigindo:
    console.log(`${this.nome} começou a comer.`); // Exibe uma mensagem no console indicando que a pessoa começou a comer.
    this.comendo = true; // Muda o estado de 'comendo' para true, indicando que agora a pessoa está comendo.
    
    } else if (this.comendo) {

    // Segunda condição: Verifica se a pessoa já está comendo.
    console.log(`${this.nome} já está comendo.`); // Se já estiver comendo, exibe uma mensagem no console reiterando isso.
    
    } else {

    // Terceira condição: Se nenhuma das condições acima for verdadeira, a pessoa deve estar dormindo ou dirigindo.
    console.log(`${this.nome} não pode comer dormindo ou enquanto dirige.`); // Exibe uma mensagem no console explicando que não é possível comer nessas condições.
    
    }
}


// Método para parar de comer
pararDeComer() {

    // Verifica se a propriedade 'comendo' do objeto é verdadeira, o que indica que a pessoa está comendo.
    if (this.comendo) {
    
    // Se a pessoa está comendo:
    console.log(`${this.nome} parou de comer.`); // Exibe uma mensagem no console informando que a pessoa parou de comer.
    this.comendo = false; // Altera o estado de 'comendo' para false, indicando que a pessoa não está mais comendo.
    
    } else {
    
    // Se a propriedade 'comendo' é falsa, ou seja, a pessoa não estava comendo:
    console.log(`${this.nome} não estava comendo.`); // Exibe uma mensagem no console informando que a pessoa não estava comendo.
    
    }
}


// Método para dirigir
dirigir() {

    // Verifica se a pessoa não está dirigindo, está acordada e não está comendo simultaneamente.
    // Esta condição assegura que a pessoa só possa dirigir se estiver ativa e não ocupada com outras atividades.
    if (!this.dirigindo && this.acordado && !this.comendo) {
    
    // Se a pessoa atende aos critérios para dirigir:
    console.log(`${this.nome} começou a dirigir.`); // Exibe no console que a pessoa iniciou a condução.
    this.dirigindo = true; // Altera o estado de 'dirigindo' para true, marcando que a pessoa está agora dirigindo.
    
    } else if (this.dirigindo) {
    
    // Se a pessoa já está dirigindo e tenta iniciar novamente:
    console.log(`${this.nome} já está dirigindo.`); // Informa no console que a pessoa já está dirigindo, prevenindo a reativação.
    
    } else {
    
    // Se a pessoa está tentando dirigir mas está dormindo ou comendo:
    console.log(`${this.nome} não pode dirigir dormindo ou enquanto come.`); // Alerta no console que não é possível dirigir nestas condições.
    
    }
}


// Método para parar de dirigir
pararDeDirigir() {

    // Verifica se a propriedade 'dirigindo' do objeto é verdadeira, ou seja, se a pessoa está atualmente dirigindo.
    if (this.dirigindo) {
    
    // Se a pessoa está realmente dirigindo:
    console.log(`${this.nome} parou de dirigir.`); // Exibe uma mensagem no console informando que a pessoa parou de dirigir.
    this.dirigindo = false; // Altera o estado da propriedade 'dirigindo' para false, indicando que a pessoa não está mais dirigindo.
    
    } else {
    
    // Se a propriedade 'dirigindo' é falsa, significa que a pessoa não estava dirigindo no momento.
    console.log(`${this.nome} não estava dirigindo.`); // Exibe uma mensagem no console informando que a pessoa não estava dirigindo.
    
    }
}

}


// Criando uma instância da classe Pessoa com o nome 'João'.
const pessoa = new Pessoa('João');


// Testes de diferentes situações para demonstrar as capacidades do objeto 'pessoa'.
pessoa.acordar();   // Acorda a pessoa, fazendo com que o estado 'acordado' seja verdadeiro.
pessoa.comer();     // Faz a pessoa comer
pessoa.pararDeComer();    // Faz a pessoa parar de comer
pessoa.dirigir();   // Fazer a pessoa dirigir
pessoa.pararDeDirigir();     // Faz a pessoa parar de dirigir.
pessoa.comer();   // Faz a pessoa comer.
pessoa.pararDeComer();    // Faz a pessoa parar de comer
pessoa.dormir(); // Faz a pessoa dormir

// Testes das condiçoes para demonstrar as capacidades do objeto 'pessoa'.
pessoa.acordar();   // Acorda a pessoa, fazendo com que o estado 'acordado' seja verdadeiro.
pessoa.comer();     // Tenta fazer a pessoa comer, o que só é possível se ela estiver acordada e não dirigindo.
pessoa.dormir();    // Tenta fazer a pessoa dormir, o que só é possível se ela não estiver comendo ou dirigindo.
pessoa.comer();     // Tenta fazer a pessoa comer novamente, para testar as condições de validação.
pessoa.dirigir();   // Tenta fazer a pessoa dirigir, o que só é possível se ela estiver acordada e não comendo.
pessoa.comer();     // Tenta fazer a pessoa comer enquanto dirigindo para testar a restrição.
pessoa.acordar();   // Tenta acordar a pessoa novamente, mesmo que ela já esteja acordada.
pessoa.pararDeComer(); // Faz a pessoa parar de comer, mudando o estado de 'comendo' para falso.
pessoa.dirigir();   // Tenta fazer a pessoa dirigir novamente, testando mudanças de estado.

// Inserindo quebra de linha para separar os testes
console.log("----- Dirigir -----\n");
pessoa.acordar();   // Acorda a pessoa, garantindo que ela possa realizar ações subsequentes.
pessoa.comer();     // A pessoa começa a comer.
pessoa.dormir();    // Tenta dormir, deve falhar se estiver comendo.
pessoa.comer();     // Tenta comer novamente.
pessoa.dirigir();   // Inicia a direção, deve falhar se estiver comendo.
pessoa.comer();     // Tenta comer enquanto dirige para testar a validação.
pessoa.acordar();   // Confirma que a pessoa está acordada para dirigir.
pessoa.pararDeComer(); // Faz a pessoa parar de comer.
pessoa.dirigir();   // A pessoa começa a dirigir.
pessoa.pararDeDirigir(); // A pessoa para de dirigir.

// Inserindo outra quebra de linha para organizar visualmente os testes
console.log("----- Dormir ------\n");
pessoa.dormir();    // A pessoa tenta dormir, verificando se todas as condições são atendidas.
pessoa.comer();     // Tenta comer, falhará se a pessoa estiver dormindo.
pessoa.dormir();    // Tenta dormir novamente para verificar consistência.
pessoa.comer();     // Tenta comer após acordar.
pessoa.dirigir();   // Tenta dirigir após acordar.
pessoa.comer();     // Tenta comer enquanto dirige para testar restrições.
pessoa.dormir();    // Tenta dormir, deve falhar se estiver comendo ou dirigindo.
pessoa.pararDeComer(); // Faz a pessoa parar de comer para permitir dormir.
pessoa.dirigir();   // Tenta dirigir.
pessoa.pararDeDirigir(); // Faz a pessoa parar de dirigir.
pessoa.acordar();   // Acorda a pessoa para mais atividades.