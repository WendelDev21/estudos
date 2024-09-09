// Define a classe 'Carro' com uma estrutura que modela o comportamento e
// as características de um carro.
class Carro {

    // O método 'constructor' é um método especial que é chamado automaticamente quando um
    // novo objeto 'Carro' é criado.
    constructor(marca, modelo, ano, cor) {
  
      // 'this.marca' associa a marca do carro fornecida como argumento ao criar uma instância à
      // propriedade 'marca' do novo objeto.
      this.marca = marca; // 'marca' deve ser uma string que representa a fabricante do carro.
  
      // 'this.modelo' associa o modelo do carro fornecido como argumento ao criar
      // uma instância à propriedade 'modelo' do novo objeto.
      this.modelo = modelo; // 'modelo' deve ser uma string que identifica o modelo específico do carro.
      
      // 'this.ano' associa o ano de fabricação do carro fornecido como argumento
      // ao criar uma instância à propriedade 'ano' do novo objeto.
      this.ano = ano; // 'ano' deve ser um número inteiro que representa o ano em que o carro foi fabricado.
      
      // 'this.cor' associa a cor do carro fornecida como argumento ao criar uma
      // instância à propriedade 'cor' do novo objeto.
      this.cor = cor; // 'cor' deve ser uma string que descreve a cor do carro.
      
      // 'this.velocidade' inicializa a propriedade 'velocidade' do novo objeto com zero,
      // indicando que o carro está parado inicialmente.
      this.velocidade = 0; // A velocidade é medida em quilômetros por hora (km/h) e começa em 0.
    
    }
  
    // Método 'acelerar' é usado para aumentar a velocidade do carro.
    acelerar(velocidade) {
  
      // Incrementa a propriedade 'velocidade' do objeto com o valor passado como argumento.
      // velocidade = velocidade + velocidade
      // 0 = 0 = 100;
      this.velocidade += velocidade; // O valor 'velocidade' deve ser um número representando quantos km/h serão adicionados à velocidade atual.
      
      // Exibe a nova velocidade do carro no console.
      console.log(`Você acelerou. Velocidade atual: ${this.velocidade} km/h`);
    
    }

    // Método 'desacelerar' é usado para diminuir a velocidade do carro.
    desacelerar(velocidade) {

        // Verifica se a velocidade atual do carro é suficiente para ser reduzida
        // pelo valor passado como argumento.
        if (this.velocidade >= velocidade) {

            // Diminui a propriedade 'velocidade' do objeto com o valor passado como argumento se for possível.
            // velocidade = velocidade - velocidade
            this.velocidade -= velocidade;

        } else {

            // Se a velocidade a diminuir for maior que a velocidade atual, a velocidade é ajustada para zero.
            this.velocidade = 0;

        }
        
        // Exibe a nova velocidade do carro no console após a desaceleração.
        console.log(`Você desacelerou. Velocidade atual: ${this.velocidade} km/h`);
    }

    // Método 'frear' é usado para parar o carro completamente.
    frear() {

        // Ajusta a propriedade 'velocidade' do carro para zero, indicando uma parada completa.
        this.velocidade = 0;
        
        // Exibe uma mensagem no console indicando que o carro parou.
        console.log('Você freou. O carro parou.');

    }

    // Método 'exibirDetalhes' é usado para mostrar as informações detalhadas do carro.
    exibirDetalhes() {

        // Exibe as propriedades 'marca', 'modelo', 'ano', 'cor' e 'velocidade' do carro no console.
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}, Velocidade: ${this.velocidade} km/h`);
    
    }


}  


// Criando uma nova instância da classe 'Carro' chamada 'meuCarro'.
const meuCarro = new Carro('Toyota', 'Corolla', 2020, 'Prata');

// Chamando o método 'exibirDetalhes' para mostrar as informações iniciais do carro.
meuCarro.exibirDetalhes(); // Exibe: Marca: Toyota, Modelo: Corolla, Ano: 2020, Cor: Prata, Velocidade: 0 km/h

// Chamando o método 'acelerar' para aumentar a velocidade do carro em 50 km/h.
meuCarro.acelerar(50); // Exibe: Você acelerou. Velocidade atual: 50 km/h

// Chamando novamente o método 'acelerar' para aumentar mais 20 km/h.
meuCarro.acelerar(20); // Exibe: Você acelerou. Velocidade atual: 70 km/h

// Chamando o método 'desacelerar' para reduzir a velocidade em 30 km/h.
meuCarro.desacelerar(30); // Exibe: Você desacelerou. Velocidade atual: 40 km/h

// Chamando o método 'acelerar' para aumentar mais 60 km/h.
meuCarro.acelerar(60); // Exibe: Você acelerou. Velocidade atual: 100 km/h

// Chamando o método 'desacelerar' para reduzir a velocidade em 40 km/h.
meuCarro.desacelerar(40); // Exibe: Você desacelerou. Velocidade atual: 60 km/h

// Chamando o método 'frear' para parar o carro completamente.
meuCarro.frear(); // Exibe: Você freou. O carro parou.

// Chamando o método 'exibirDetalhes' para mostrar as informações iniciais do carro.
meuCarro.exibirDetalhes(); // Exibe: Marca: Toyota, Modelo: Corolla, Ano: 2020, Cor: Prata, Velocidade: 0 km/h
