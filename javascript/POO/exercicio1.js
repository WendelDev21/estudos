/*
Exercício: Sistema de Cadastro de Alunos
Crie uma classe Aluno que tenha os seguintes atributos:

nome: o nome do aluno
idade: a idade do aluno
curso: o curso que o aluno está matriculado
notas: um array contendo as notas do aluno em diferentes disciplinas
Além disso, a classe Aluno deve ter os seguintes métodos:

adicionarNota(nota): método que recebe uma nota como parâmetro e a adiciona ao array de notas do aluno
calcularMedia(): método que calcula a média das notas do aluno e retorna o resultado
aprovado(): método que verifica se o aluno está aprovado, ou seja, se a média das notas é maior ou igual a 7

Depois de criar a classe Aluno, crie instâncias dessa classe para representar diferentes alunos,
adicione notas a eles e verifique se estão aprovados.*/

// Definindo a classe 'Aluno'
class Aluno {

// O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.
constructor(nome, idade, curso) {

    // 'this' refere-se à instância do objeto em que o método ou construtor é chamado.
    this.nome = nome; // Propriedade 'nome' do objeto, inicializada com o valor passado no construtor.
    this.idade = idade; // Propriedade 'idade' do objeto, inicializada com o valor passado no construtor.
    this.curso = curso; // Propriedade 'curso' do objeto, inicializada com o valor passado no construtor.
    this.notas = []; // Propriedade 'notas', inicializada como um array vazio para armazenar futuras notas.
}

// Método para adicionar uma nota ao array de notas do aluno.
adicionarNota(nota) {

    this.notas.push(nota); // 'push' é um método de array que adiciona um elemento ao final do array.

}

// Método para calcular a média das notas do aluno.
calcularMedia() {

    // 'reduce' é um método de array que aplica uma função acumuladora sobre o array, resultando em um único valor de retorno.
    const totalNotas = this.notas.reduce((total, nota) => total + nota, 0); // Soma todas as notas do array 'notas'.
    return totalNotas / this.notas.length; // Divide a soma total pelo número de notas para calcular a média.

}

// Método para determinar se o aluno está aprovado.
aprovado() {

    // Retorna true se a média for maior ou igual a 7, caso contrário retorna false.
    return this.calcularMedia() >= 7; 
    
}
}

// Criando instâncias da classe Aluno
const aluno1 = new Aluno('Ana', 20, 'Engenharia'); // Cria um novo objeto 'aluno1' da classe 'Aluno'.
const aluno2 = new Aluno('João', 22, 'Medicina'); // Cria um novo objeto 'aluno2' da classe 'Aluno'.
const aluno3 = new Aluno('Leonardo', 22, 'Ciencia da Computação'); // Cria um novo objeto 'aluno3' da classe 'Aluno'.

// Adicionando notas aos alunos
aluno1.adicionarNota(8); // Adiciona a nota 8 ao array de notas de 'aluno1'.
aluno1.adicionarNota(7); // Adiciona a nota 7 ao array de notas de 'aluno1'.
aluno1.adicionarNota(2); // Adiciona a nota 2 ao array de notas de 'aluno1'.

// Exibe no console se 'aluno1' está aprovado, usando uma operação ternária para imprimir 'Sim' ou 'Não'.
console.log(`${aluno1.nome} está aprovado? ${aluno1.aprovado() ? 'Sim' : 'Não'}`);

aluno2.adicionarNota(6); // Adiciona a nota 6 ao array de notas de 'aluno2'.
aluno2.adicionarNota(5); // Adiciona a nota 5 ao array de notas de 'aluno2'.
aluno2.adicionarNota(10); // Adiciona a nota 10 ao array de notas de 'aluno2'.
aluno2.adicionarNota(10); // Adiciona a nota 10 ao array de notas de 'aluno2'.

// Exibe no console se 'aluno2' está aprovado, usando uma operação ternária para imprimir 'Sim' ou 'Não'.
console.log(`${aluno2.nome} está aprovado? ${aluno2.aprovado() ? 'Sim' : 'Não'}`);


// ------------------------------------------

aluno3.adicionarNota(10); // Adiciona a nota 10 ao array de notas de 'aluno3'.
aluno3.adicionarNota(8); // Adiciona a nota 8 ao array de notas de 'aluno3'.
aluno3.adicionarNota(6); // Adiciona a nota 6 ao array de notas de 'aluno3'.
aluno3.adicionarNota(10); // Adiciona a nota 10 ao array de notas de 'aluno3'.

// Exibe no console se 'aluno3' está aprovado, usando uma operação ternária para imprimir 'Sim' ou 'Não'.
console.log(`${aluno3.nome} está aprovado? ${aluno3.aprovado() ? 'Sim' : 'Não'}`);
