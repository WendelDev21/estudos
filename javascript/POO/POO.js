/*
POO significa Programação Orientada a Objetos, uma metodologia de 
programação que utiliza objetos para representar e gerenciar dados e 
operações. Essa abordagem permite a criação de sistemas mais modulares, 
reutilizáveis e fáceis de manter. Em JavaScript, a POO é implementada de 
uma maneira um pouco diferente quando comparada com linguagens como Java ou 
C++, que usam classes de forma mais explícita. 

*/

// Define a classe 'Pessoa' que é uma estrutura para criar objetos que representam pessoas.
class Pessoa {

// Construtor da classe é chamado automaticamente ao criar uma nova instância.
// 'nome' e 'idade' são parâmetros que inicializam as propriedades do objeto.
constructor(nome, idade) {
    this.nome = nome;  // Define a propriedade 'nome' do objeto.
    this.idade = idade;  // Define a propriedade 'idade' do objeto.
}

// Método 'exibirDetalhes' é usado para imprimir detalhes do objeto pessoa.
// Este método não aceita parâmetros e usa as propriedades do objeto para mostrar informações no console.
exibirDetalhes() {
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
}

// Método 'cumprimentar' permite ao objeto pessoa emitir uma saudação.
// Este método também não aceita parâmetros e utiliza a propriedade 'nome' para a saudação.
cumprimentar() {
    console.log(`Olá, eu sou ${this.nome}!`);
}
}


// Cria uma instância da classe 'Pessoa' chamada 'pessoa1' com nome 'João' e idade 30.
const pessoa1 = new Pessoa('João', 30);

// Utiliza o método 'exibirDetalhes' para mostrar o nome e a idade de 'pessoa1' no console.
pessoa1.exibirDetalhes(); // Saída: "Nome: João, Idade: 30"

// Utiliza o método 'cumprimentar' para que 'pessoa1' se apresente.
pessoa1.cumprimentar(); // Saída: "Olá, eu sou João!"


// Repete o processo para outras quatro instâncias, cada uma com nomes e idades diferentes:
// Criação da segunda instância 'pessoa2' com nome 'Maria' e idade 25.
const pessoa2 = new Pessoa('Maria', 25);

// Exibe os detalhes de 'pessoa2'.
pessoa2.exibirDetalhes(); // Saída: "Nome: Maria, Idade: 25"

// 'pessoa2' se apresenta.
pessoa2.cumprimentar(); // Saída: "Olá, eu sou Maria!"


// Criação da terceira instância 'pessoa3' com nome 'Carlos' e idade 40.
const pessoa3 = new Pessoa('Carlos', 40);

// Exibe os detalhes de 'pessoa3'.
pessoa3.exibirDetalhes(); // Saída: "Nome: Carlos, Idade: 40"

// 'pessoa3' se apresenta.
pessoa3.cumprimentar(); // Saída: "Olá, eu sou Carlos!"

// Criação da quarta instância 'pessoa4' com nome 'Ana' e idade 35.
const pessoa4 = new Pessoa('Ana', 35);

// Exibe os detalhes de 'pessoa4'.
pessoa4.exibirDetalhes(); // Saída: "Nome: Ana, Idade: 35"

// 'pessoa4' se apresenta.
pessoa4.cumprimentar(); // Saída: "Olá, eu sou Ana!"

// Criação da quinta instância 'pessoa5' com nome 'Pedro' e idade 28.
const pessoa5 = new Pessoa('Pedro', 28);

// Exibe os detalhes de 'pessoa5'.
pessoa5.exibirDetalhes(); // Saída: "Nome: Pedro, Idade: 28"

// 'pessoa5' se apresenta.
pessoa5.cumprimentar(); // Saída: "Olá, eu sou Pedro!"


/*
Vamos simplificar os conceitos de Programação Orientada a Objetos (POO) em 
JavaScript.

O Que é uma Classe?
Uma classe é uma espécie de molde ou template para criar objetos que 
compartilham características e comportamentos comuns. Pense na classe 
como uma receita de bolo: cada bolo feito com essa receita terá os mesmos 
ingredientes básicos, mas você pode alterar sabores ou adicionar 
coberturas.

Construtor
O construtor é um método especial dentro de uma classe que é chamado 
automaticamente quando você cria um novo objeto dessa classe. Ele é 
geralmente usado para inicializar as propriedades do objeto com valores 
específicos passados ao criar o objeto.

Propriedades
As propriedades são características de um objeto, como nome, idade, cor, 
etc. No exemplo do código, as propriedades são nome e idade. Elas são como 
variáveis associadas a um objeto específico.

Métodos
Os métodos são funções que estão dentro de uma classe. Eles definem o que 
um objeto dessa classe pode fazer. No exemplo, exibirDetalhes() e 
cumprimentar() são métodos que permitem ao objeto exibir informações 
sobre si mesmo e cumprimentar, respectivamente.

Instâncias
Uma instância é um objeto específico criado a partir de uma classe. Cada 
instância tem propriedades que podem ter valores únicos. Por exemplo, 
criando várias instâncias da classe Pessoa, cada uma pode ter diferentes 
nomes e idades.

Utilizando Classes
Veja como usamos esses conceitos no código:

Definindo a Classe: Primeiro, definimos a classe Pessoa com o construtor e 
seus métodos.

Criando Objetos: Depois, criamos objetos (instâncias) usando a palavra-chave 
new e passando os valores específicos (como nome e idade) para o construtor.

Usando Métodos: Em seguida, utilizamos os métodos definidos na classe para 
fazer algo útil, como exibir informações do objeto ou cumprimentar.

Exemplo Prático
*/


/*
// Define uma classe chamada 'Pessoa'.
class Pessoa {

// O método construtor é um método especial que é chamado quando um novo objeto é criado.
constructor(nome, idade) {

    // 'this.nome' refere-se à propriedade 'nome' do objeto que será criado.
    // Atribui o valor do parâmetro 'nome' à propriedade 'nome' do novo objeto.
    this.nome = nome;

    // 'this.idade' refere-se à propriedade 'idade' do objeto que será criado.
    // Atribui o valor do parâmetro 'idade' à propriedade 'idade' do novo objeto.
    this.idade = idade;

}

// Define o método 'exibirDetalhes' para a classe 'Pessoa'.
// Este método não recebe parâmetros e é usado para imprimir informações sobre o objeto.
exibirDetalhes() {

    // Utiliza 'console.log' para imprimir no console os valores das propriedades 'nome' e 'idade'.
    // Usa template strings para incluir as propriedades do objeto dentro do texto.
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);

}

// Define o método 'cumprimentar' para a classe 'Pessoa'.
// Este método não recebe parâmetros e é usado para o objeto cumprimentar usando seu nome.
cumprimentar() {

    // Utiliza 'console.log' para imprimir uma saudação que inclui o nome do objeto.
    // Usa template strings para incorporar a propriedade 'nome' do objeto no texto da saudação.
    console.log(`Olá, eu sou ${this.nome}!`);

}
}
*/

// Cria uma nova instância da classe 'Pessoa', passando 'João' como nome e '30' como idade.
// 'pessoa6' é o nome da variável que armazena a referência para o novo objeto 'Pessoa'.
const pessoa6 = new Pessoa('João', 30);

// Chama o método 'exibirDetalhes' do objeto 'pessoa6'.
// Este método imprime os detalhes do objeto no console.
pessoa6.exibirDetalhes(); // Saída esperada: "Nome: João, Idade: 30"

// Chama o método 'cumprimentar' do objeto 'pessoa6'.
// Este método permite que o objeto cumprimente, usando seu nome.
pessoa6.cumprimentar(); // Saída esperada: "Olá, eu sou João!"  

/*
Neste código:

Pessoa é a classe.
- constructor inicializa cada nova Pessoa com um nome e uma idade.
- exibirDetalhes e cumprimentar são métodos para mostrar informações e 
saudações.
- pessoa6 é uma instância da classe Pessoa.
*/
