/*
Funções de alta ordem são funções que recebem outras
funções como argumentos ou as retornam como resultado. 

Esse conceito é fundamental na programação funcional, permitindo
a criação de códigos mais abstratos, flexíveis e reutilizáveis. 

Vamos ver um exemplo que demonstra o uso de uma função de alta
ordem para processar dados.

Exemplo: Filtro Personalizado

Objetivo: Criar uma função de alta ordem que aplica um
filtro personalizado a um array. A função de alta ordem recebe
um array e uma função de filtro como argumentos. A função de
filtro decide se um elemento do array deve ser incluído no resultado final.
*/

// Define uma função de alta ordem chamada 'filtrarArray'.
// Esta função é projetada para filtrar elementos de um array baseado em um critério
// definido por uma função de filtro passada como argumento.
// Recebe dois argumentos: um array 'array' e uma função 'funcaoFiltro' que
// determina se um elemento deve ser incluído no array filtrado.
function filtrarArray(array, funcaoFiltro) {

    // Cria um array vazio 'arrayFiltrado' para armazenar os elementos que passam pelo filtro.
    let arrayFiltrado = [];
  
    // Utiliza um loop 'for...of' para iterar sobre cada elemento do array fornecido.
    for (let elemento of array) {
  
      // Aplica a função de filtro 'funcaoFiltro' a cada elemento do array.
      // Se 'funcaoFiltro' retornar verdadeiro ('true') para o elemento, significa que
      // ele satisfaz o critério de filtro.
      if (funcaoFiltro(elemento)) {
  
        // Adiciona o elemento ao array 'arrayFiltrado' caso ele passe pelo filtro.
        arrayFiltrado.push(elemento);
  
      }
    }
    
    // Retorna o array 'arrayFiltrado' contendo todos os elementos que passaram pelo filtro.
    return arrayFiltrado;
  }
  
  // Define a função 'ePar'.
  // Esta função verifica se um número fornecido é par.
  // Recebe um único argumento 'numero' e retorna verdadeiro se 'numero' for par,
  // caso contrário, retorna falso.
  function ePar(numero) {
    return numero % 2 === 0;
  }
  
  // Define a função 'maiorQueDez'.
  // Esta função verifica se um número fornecido é maior que 10.
  // Recebe um único argumento 'numero' e retorna verdadeiro se 'numero' for maior que 10,
  // caso contrário, retorna falso.
  function maiorQueDez(numero) {
    return numero > 10;
  }
  
  // Demonstra o uso da função de alta ordem 'filtrarArray' com diferentes funções de filtro.
  
  // Cria um array 'numeros' contendo uma série de valores numéricos para serem filtrados.
  let numeros = [1, 2, 3, 4, 5, 11, 12, 13, 14];
  
  // Filtra o array 'numeros' usando a função 'ePar' como critério de filtro.
  // Armazena o resultado no array 'numerosPares', que conterá apenas os números pares de 'numeros'.
  let numerosPares = filtrarArray(numeros, ePar);  


// Filtra o array 'numeros' usando a função 'maiorQueDez' como critério de filtro.
// Armazena o resultado no array 'numerosMaioresQueDez', que conterá apenas os números maiores
// que 10 de 'numeros'.
let numerosMaioresQueDez = filtrarArray(numeros, maiorQueDez);

// Imprime o array 'numerosPares' no console, mostrando os números pares encontrados.
console.log(numerosPares); // Saída esperada: [2, 4, 12, 14]

// Imprime o array 'numerosMaioresQueDez' no console, mostrando os números maiores que 10 encontrados.
console.log(numerosMaioresQueDez); // Saída esperada: [11, 12, 13, 14]
  

  // -----------------------------------


/*
  Exemplo que demonstra o uso de uma função de alta ordem para
  executar uma operação matemática específica, como soma ou multiplicação,
  em todos os elementos de um array. Este exemplo ilustra como funções
  de alta ordem podem ser flexíveis e poderosas, permitindo que a lógica
  específica da operação seja passada como um argumento para a função geral.

Exemplo: Aplicar Operação Matemática em Array

Objetivo: Criar uma função de alta ordem chamada aplicarOperacao que
recebe um array de números e uma função que representa uma operação
matemática. A função de alta ordem deve aplicar a operação matemática
a cada elemento do array e retornar um novo array com os resultados.
  */

// Define uma função de alta ordem chamada 'aplicarOperacao'.
// Uma função de alta ordem é uma função que recebe outra função como argumento ou retorna uma função.
// Esta função particular aplica uma operação matemática (passada como argumento 'operacao')
// a todos os elementos de um array 'numeros'.
function aplicarOperacao(numeros, operacao) {

    // Inicializa um array vazio 'resultado'. Este array armazenará os resultados das
    // operações aplicadas a cada elemento do array 'numeros'.
    let resultado = [];
  
    // Utiliza um loop 'for...of' para iterar sobre cada elemento do array 'numeros'.
    // A variável 'numero' representa o elemento atual do array durante a iteração.
    for (let numero of numeros) {
  
      // Chama a função 'operacao', passando o 'numero' atual como argumento.
      // A função 'operacao' é uma função de callback que realiza uma operação matemática específica.
      // O resultado dessa operação é então adicionado ao array 'resultado' usando o método 'push'.
      resultado.push(operacao(numero));
  
    }
  
    // Após iterar sobre todos os elementos e aplicar a 'operacao', retorna o array 'resultado' preenchido.
    return resultado;
  }
  
  // Define uma função chamada 'dobrar'.
  // Esta função recebe um parâmetro 'valor' e retorna o dobro desse valor.
  // É uma das funções de operação que pode ser passada para 'aplicarOperacao'.
  function dobrar(valor) {
    return valor * 2;
  }
  
  // Define uma função chamada 'incrementar'.
  // Similar à função 'dobrar', mas esta função adiciona 1 ao 'valor' passado e retorna o resultado.
  // Também pode ser usada como argumento para 'aplicarOperacao'.
  function incrementar(valor) {
    return valor + 1;
  }
  
  // Cria um array de números chamado 'array_numeros'.
  // Este array contém os números de 1 a 5 e servirá como dado de entrada para as operações
  // de dobrar e incrementar.
  let array_numeros = [1, 2, 3, 4, 5];
  
  // Chama a função 'aplicarOperacao', passando 'array_numeros' e a função 'dobrar' como argumentos.
  // Isso resulta em um novo array onde cada elemento de 'array_numeros' é dobrado.
  // O resultado é armazenado na variável 'numerosDobrados'.
  let numerosDobrados = aplicarOperacao(array_numeros, dobrar);
  
  // Chama a função 'aplicarOperacao' novamente, mas desta vez com a função 'incrementar' como
  // o segundo argumento.
  // Cada elemento de 'array_numeros' é incrementado em 1, e o resultado é armazenado em 'numerosIncrementados'.
  let numerosIncrementados = aplicarOperacao(array_numeros, incrementar);
  
  // Imprime os resultados no console.
  // 'numerosDobrados' deve conter [2, 4, 6, 8, 10], que são os valores de 'array_numeros' dobrados.
  console.log(numerosDobrados);
  
  // 'numerosIncrementados' deve conter [2, 3, 4, 5, 6], que são os valores de 'array_numeros'
  // incrementados por 1.
  console.log(numerosIncrementados);  