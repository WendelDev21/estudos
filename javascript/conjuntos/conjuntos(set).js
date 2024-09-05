/*
Os conjuntos (Sets) em JavaScript são estruturas de
dados que permitem armazenar coleções de valores únicos.

Eles são úteis quando você precisa armazenar um conjunto de
elementos distintos sem preocupação com duplicatas. Aqui
estão algumas características e métodos importantes dos conjuntos:

- Valores Únicos: Um conjunto não permite elementos duplicados.
Se você tentar adicionar um valor que já existe no conjunto, ele será ignorado.

Sem Ordenação: Os conjuntos não mantêm uma ordem específica
dos elementos. Os elementos são armazenados de forma desordenada.

Métodos Principais:

add(valor): Adiciona um novo valor ao conjunto.
delete(valor): Remove um valor específico do conjunto, se existir.
has(valor): Verifica se um valor está presente no conjunto.
clear(): Remove todos os elementos do conjunto.
size: Retorna o número de elementos no conjunto.

Aqui está um exemplo prático de como usar conjuntos em JavaScript:*/

// Inicia um novo conjunto vazio usando a estrutura de dados Set, que armazena elementos únicos.
let conjunto = new Set();

// Adiciona valores ao conjunto. O método 'add' insere cada novo elemento, garantindo que não haja duplicatas.
conjunto.add('A');
conjunto.add('B');
conjunto.add('C');
conjunto.add('D');

// Utiliza o método 'has' para verificar a presença de elementos específicos no conjunto.
// Retorna 'true' se o elemento está presente, e 'false' caso contrário.
console.log("O conjunto tem o valor 'B'?", conjunto.has('B')); // Retorna true
console.log("O conjunto tem o valor 'Z'?", conjunto.has('Z')); // Retorna false


// Remove um elemento específico do conjunto usando o método 'delete'.
conjunto.delete('B');

// Verifica o tamanho do conjunto usando a propriedade 'size' após a remoção de um elemento.
console.log("Tamanho do conjunto após remover 'B':", conjunto.size); // Retorna 3

// Limpa todos os elementos do conjunto usando o método 'clear', resultando em um conjunto vazio.
conjunto.clear();
console.log("Tamanho do conjunto após limpar:", conjunto.size); // Retorna 0

// Adiciona novos valores ao conjunto após ter sido limpo.
conjunto.add('X');
conjunto.add('Y');
conjunto.add('Z');

// Itera sobre os elementos do conjunto usando o método 'forEach'. Este método executa uma
// função para cada elemento.
console.log("Elementos do conjunto:");
conjunto.forEach(valor => console.log(valor));


// Converte o conjunto em um array usando o operador de espalhamento (spread operator).
// O operador de espalhamento '...' é usado para extrair todos os elementos do conjunto 'conjunto'.
let arrayConjunto = [...conjunto];

// Exibe no console o array resultante, mostrando os elementos que foram no conjunto.
console.log("Conjunto convertido para array:", arrayConjunto);

// Cria outro conjunto com alguns valores diferentes para demonstração de operações de conjunto.
// Inicializa 'outroConjunto' com três elementos: 'Y', 'Z', 'W'.
let outroConjunto = new Set(['Y', 'Z', 'W']);

// Realiza a união de dois conjuntos, combinando elementos de ambos os conjuntos
// sem duplicatas, usando o operador spread.
// O operador '...' é usado para expandir ambos os conjuntos dentro de um novo conjunto,
// garantindo que apenas elementos únicos sejam mantidos.
let uniao = new Set([...conjunto, ...outroConjunto]);

// Exibe no console o resultado da união dos conjuntos, mostrando todos os elementos únicos presentes
// em ambos os conjuntos.
console.log("União dos conjuntos:", uniao);

// Realiza a interseção de dois conjuntos, encontrando elementos comuns aos dois conjuntos.
// Cria um novo conjunto 'intersecao' para armazenar os resultados da interseção.
let intersecao = new Set();

// Usa 'forEach' para iterar sobre cada elemento do conjunto 'conjunto'.
conjunto.forEach(valor => {

    // Verifica se 'outroConjunto' contém o elemento atual usando 'has'.
    if (outroConjunto.has(valor)) {
        
        // Se 'outroConjunto' contém o elemento, ele é adicionado ao conjunto 'intersecao'.
        intersecao.add(valor);
    }
});

// Exibe no console os elementos que são comuns a ambos os conjuntos.
console.log("Interseção dos conjuntos:", intersecao);


// Inicializa um novo conjunto chamado 'diferenca' como uma cópia do conjunto original 'conjunto'.
// O novo conjunto é criado usando o operador de espalhamento (spread operator) para incluir
// todos os elementos do 'conjunto'.
let diferenca = new Set(conjunto);

// Itera sobre cada elemento do 'outroConjunto' para determinar se algum desses elementos também
// está presente no conjunto 'diferenca'.
outroConjunto.forEach(valor => {

    // Verifica se o conjunto 'diferenca' contém o elemento atual.
    // O método 'has' é usado para checar a presença de um elemento no conjunto.
    if (diferenca.has(valor)) {
        
        // Se o elemento está presente, ele é removido do conjunto 'diferenca'.
        // O método 'delete' é usado para remover o elemento especificado do conjunto.
        diferenca.delete(valor);
    }
});

// Após concluir a iteração e a remoção de elementos comuns, o conjunto 'diferenca' contém apenas
// os elementos que estão no 'conjunto' original, mas não no 'outroConjunto'.
// Exibe no console os elementos restantes no conjunto 'diferenca', representando a
// diferença entre os dois conjuntos.
console.log("Diferença dos conjuntos:", diferenca);