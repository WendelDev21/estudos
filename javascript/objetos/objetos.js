/*
Objetos em JavaScript

Os objetos em JavaScript são coleções de pares chave-valor.
Eles são usados para armazenar dados de forma estruturada e
acessá-los de maneira mais intuitiva, através dessas chaves.

Cada chave de um objeto é única e associada a um valor, que pode
ser um número, string, booleano, array, outro objeto, ou até mesmo funções.


Características dos Objetos:

Chaves Únicas: Cada propriedade (ou "chave") é única dentro de
um objeto. Isso significa que não pode haver duas propriedades com o
mesmo nome em um objeto. Se você tentar definir uma propriedade com
o mesmo nome de uma existente, ela simplesmente substituirá a
propriedade anterior.

Flexibilidade de Dados: As chaves são geralmente strings (ou símbolos),
e os valores podem ser de qualquer tipo, inclusive outros objetos ou
funções. Isso oferece grande flexibilidade na estruturação dos dados
dentro de um objeto.

Capacidade de Adicionar, Alterar e Remover Dados: Os objetos em
JavaScript permitem adicionar, alterar e remover propriedades
dinamicamente. Isso significa que você pode adicionar novas
propriedades conforme necessário, alterar o valor de propriedades
existentes e remover propriedades que não são mais necessárias.

Exibição de Dados: Os dados armazenados em objetos podem ser
facilmente exibidos ou manipulados. Você pode iterar sobre as
propriedades de um objeto para exibir seus dados, ou acessar
propriedades específicas diretamente usando a notação de ponto ou colchetes.

Os objetos são fundamentais para a programação em JavaScript e
são amplamente utilizados para representar dados e estruturas
complexas de forma organizada e acessível.
*/

// Adicionar Propriedades a um Objeto
// Para adicionar uma nova propriedade a um objeto, você simplesmente
// atribui um valor a uma nova chave no objeto. Se a chave já existir, 
// o valor será atualizado; se não, uma nova chave-valor será 
// adicionada ao objeto.

// Aqui, declaramos uma constante chamada 'pessoa'. Em JavaScript, objetos são coleções de propriedades,
// e uma propriedade é uma associação entre um nome (ou chave) e um valor.
// Neste caso, o objeto 'pessoa' é inicializado com duas propriedades: 'nome' e 'idade'.
// A propriedade 'nome' tem o valor "João", e a propriedade 'idade' tem o valor 30.
const pessoa = {
nome: "João",
idade: 30
};

// Agora, adicionamos uma nova propriedade ao objeto 'pessoa'.
// A sintaxe 'pessoa.profissao = "Desenvolvedor Web";' cria uma nova propriedade chamada 'profissao'
// no objeto 'pessoa' e atribui a ela o valor "Desenvolvedor Web".
// Este passo demonstra como objetos em JavaScript são dinâmicos, permitindo adicionar
// novas propriedades após sua criação inicial.
pessoa.profissao = "Desenvolvedor Web";

// Por fim, utilizamos 'console.log' para imprimir o objeto 'pessoa' no console.
// Quando você imprime um objeto no console, ele mostra todas as suas propriedades atuais e
// respectivos valores.
// Neste ponto, o objeto 'pessoa' terá três propriedades: 'nome', 'idade' e 'profissao'.
console.log(pessoa);

// Saída: { nome: 'João', idade: 30, profissao: 'Desenvolvedor Web' }

// -----------------------------------------------------

/*
Remover Propriedades de um Objeto

Para remover uma propriedade de um objeto, você pode usar o
operador delete, seguido do objeto e da chave que deseja remover.

*/


// Declara uma constante chamada 'pessoa2' e atribui a ela um objeto como valor.
// Este objeto inicialmente contém três propriedades: 'nome', 'idade' e 'profissao',
// com os valores "João", 30 e "Desenvolvedor Web", respectivamente.
// Objetos em JavaScript são coleções de pares chave-valor, onde cada chave é
// única dentro do objeto e associada a um valor.
const pessoa2 = {
nome: "João",
idade: 30,
profissao: "Desenvolvedor Web"
};

// A palavra-chave 'delete' é usada para remover propriedades de um objeto.
// Neste caso, 'delete pessoa2.idade;' remove a propriedade 'idade' do objeto 'pessoa2'.
// Após a execução desta linha, 'pessoa2' não terá mais a propriedade 'idade',
// e o objeto será composto apenas pelas propriedades 'nome' e 'profissao'.
delete pessoa2.idade;

// 'console.log(pessoa2);' é usado para imprimir o objeto 'pessoa2' no console.
// Como a propriedade 'idade' foi removida, a saída mostrará apenas as propriedades 'nome' e 'profissao'
// e seus valores correspondentes. Portanto, o resultado exibido no console será algo como:
// { nome: 'João', profissao: 'Desenvolvedor Web' }
console.log(pessoa2);

// Saída: { nome: 'João', profissao: 'Desenvolvedor Web' }

// ---------------------------------

/*
Acessar e Modificar Propriedades

Podemos acessar propriedades de um objeto usando a
notação de ponto ou a notação de colchetes. A modificação
de propriedades funciona de maneira similar à adição.

*/


// Aqui, 'console.log(pessoa2.nome);' é utilizado para acessar e imprimir o valor da
// propriedade 'nome' do objeto 'pessoa2'.
// Isso é feito usando a notação de ponto, onde 'pessoa2.nome' refere-se à propriedade 'nome'
// dentro do objeto 'pessoa2'.
// Neste caso, como 'pessoa2.nome' tem o valor "João", "João" será exibido no console.
console.log(pessoa2.nome); // Saída: João

// Este comando imprime o valor da propriedade 'profissao' do objeto 'pessoa2', mas usando a
// notação de colchetes em vez da notação de ponto.
// A notação de colchetes é útil especialmente quando o nome da propriedade é dinâmico ou contém
// caracteres que não são permitidos na notação de ponto.
// Aqui, 'pessoa2['profissao']' acessa o valor da propriedade 'profissao', que é "Desenvolvedor Web",
// e o imprime no console.
console.log(pessoa2['profissao']); // Saída: Desenvolvedor Web

// Neste ponto, o valor da propriedade 'nome' no objeto 'pessoa2' é modificado de "João" para "Maria".
// A notação de ponto é usada novamente para referenciar a propriedade 'nome' do objeto 'pessoa2', e
// o operador de atribuição '=' é usado para atribuir um novo valor a essa propriedade.
pessoa2.nome = "Maria";

// Após a modificação, 'console.log(pessoa2.nome);' é utilizado para acessar e imprimir o novo
// valor da propriedade 'nome'.
// Como o valor foi alterado para "Maria", "Maria" será exibido no console, confirmando que a
// propriedade foi modificada com sucesso.
console.log(pessoa2.nome); // Saída: Maria

// ----------------------------

/*
Juntar Objetos
Para juntar dois ou mais objetos, você pode usar o método
Object.assign() ou o operador de espalhamento (spread operator) ....

Usando Object.assign():

*/

// Declara 'obj1' e inicializa com duas propriedades: 'a' e 'b', atribuindo-lhes os
// valores 1 e 2, respectivamente.
const obj1 = { a: 1, b: 2 };

// Declara 'obj2' e inicializa com duas propriedades: 'b' e 'c', atribuindo-lhes os valores 3 e 4,
// respectivamente.
// Note que 'obj2' tem uma propriedade 'b' assim como 'obj1', mas com um valor diferente (3).
const obj2 = { b: 3, c: 4 };

// Utiliza a função 'Object.assign()' para combinar as propriedades de 'obj1' e 'obj2' em
// um novo objeto chamado 'combinado'.
// O primeiro argumento de 'Object.assign()' é o objeto destino, que neste caso é um novo objeto vazio ({}).
// Os objetos de origem 'obj1' e 'obj2' são passados como segundo e terceiro argumentos, respectivamente.
// As propriedades de 'obj1' e 'obj2' são copiadas para o objeto destino (novo objeto vazio), e em
// caso de propriedades com o mesmo nome,
// o valor da última propriedade (no caso de 'obj2.b') sobrescreve o valor da mesma propriedade
// nos objetos anteriores ('obj1.b').
const combinado = Object.assign({}, obj1, obj2);

// Imprime o objeto 'combinado' no console.
// Como 'obj2' foi passado por último para 'Object.assign()', o valor de 'b' em 'obj2' (3)
// sobrescreve o valor de 'b' em 'obj1' (2).
// Portanto, o objeto 'combinado' contém as propriedades 'a' e 'b' de 'obj1', e 'b' (com o novo valor)
// e 'c' de 'obj2',
// resultando em { a: 1, b: 3, c: 4 }.
console.log(combinado); // Saída: { a: 1, b: 3, c: 4 }


/*
Usando o operador de espalhamento ...:
*/


// Utiliza o operador spread para combinar os objetos 'obj1' e 'obj2' em um novo objeto chamado 'combinadoSpread'.
// O operador spread '...' é usado para "espalhar" ou "extrair" as propriedades de cada objeto dentro
// do novo objeto literal.
// Primeiro, as propriedades de 'obj1' são espalhadas, adicionando 'a' e 'b' ao novo objeto.
// Em seguida, as propriedades de 'obj2' são espalhadas, adicionando 'b' e 'c' ao novo objeto.
// Quando uma propriedade já existe no objeto (como 'b'), o valor da propriedade no último objeto
// espalhado ('obj2') sobrescreve o valor anterior.
const combinadoSpread = { ...obj1, ...obj2 };

// Imprime o objeto resultante 'combinadoSpread' no console.
// Assim como no exemplo com 'Object.assign()', a propriedade 'b' de 'obj2' sobrescreve a
// propriedade 'b' de 'obj1' no objeto resultante,
// devido à ordem em que os objetos são combinados.
// Portanto, o objeto 'combinadoSpread' terá as propriedades e valores: 'a' de 'obj1', 'b' de 'obj2'
// (sobrescrevendo 'b' de 'obj1'), e 'c' de 'obj2',
// resultando em { a: 1, b: 3, c: 4 }.
console.log(combinadoSpread); // Saída: { a: 1, b: 3, c: 4 }

/*
Note que, em ambos os casos, propriedades com o mesmo nome
serão sobrepostas pelos valores do último objeto fornecido.

No exemplo, a propriedade b é sobrescrita pelo valor em obj2.
*/

// ---------------


/*

Iteração sobre Propriedades

Podemos iterar sobre as propriedades de um objeto 
usando loops, como o for...in ou combinando Object.keys(), 
Object.values(), e Object.entries() com o loop for...of.

Exemplo com for...in:

*/

// Aqui, um novo objeto chamado 'perfilUsuario' é definido com três propriedades: 'usuario', 'anos' e 'funcao'.
// Cada propriedade é atribuída um valor específico: "Ana" para 'usuario', 25 para 'anos', e "Designer Gráfico" para 'funcao'.
// Objetos em JavaScript são coleções de pares chave-valor, onde cada chave é única dentro do
// objeto e mapeada para um valor.
const perfilUsuario = {
usuario: "Ana",
anos: 25,
funcao: "Designer Gráfico"
};

// Inicia um loop 'for...of', uma estrutura de repetição que percorre elementos iteráveis, como arrays.
// 'Object.keys(perfilUsuario)' retorna um array contendo as chaves (ou nomes das propriedades) do
// objeto 'perfilUsuario'.
// Portanto, este loop irá iterar sobre cada chave do objeto 'perfilUsuario'.
for (const propriedade of Object.keys(perfilUsuario)) {

// Dentro do loop, 'console.log' é usado para imprimir cada par chave-valor do objeto 'perfilUsuario'.
// '${propriedade}' é substituído pelo nome da propriedade atual na iteração, e 'perfilUsuario[propriedade]' acessa o valor associado a essa chave.
// O acesso ao valor é feito usando a notação de colchetes, onde o nome da propriedade é passado
// como uma string para acessar seu valor correspondente.
// Este comando irá imprimir no console uma linha para cada propriedade do objeto, mostrando seu nome
// e valor no formato "chave: valor".
console.log(`${propriedade}: ${perfilUsuario[propriedade]}`);

}


/*
Neste exemplo, perfilUsuario é um objeto que contém
informações sobre um usuário. Usamos Object.keys(perfilUsuario)
para obter um array contendo as chaves (nomes das propriedades)
do objeto perfilUsuario. Então, iteramos sobre esse array com o
loop for...of, onde propriedade representa cada chave do objeto
durante as iterações do loop. Dentro do loop, acessamos o valor
associado a cada chave usando a notação de colchetes
(perfilUsuario[propriedade]) e imprimimos a chave junto com
seu valor correspondente.

Essa abordagem é útil quando você precisa percorrer
todas as chaves de um objeto e trabalhar com seus valores,
seja para exibição, processamento adicional ou qualquer
outra finalidade. A escolha de perfilUsuario e propriedade
como nomes de variáveis ajuda a tornar o código mais descritivo
e fácil de entender, especialmente em contextos onde a clareza
sobre o tipo de dados sendo manipulados é importante.
*/
