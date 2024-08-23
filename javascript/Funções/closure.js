function criarContador() {

    let count = 0;

    return {

        incrementar: function() {

            count += 1;

            console.log(`Contagem aual: ${count}`);
        },

        mostrar: function() {

            console.log(`Contagem: ${count}`);
        }
    }    
}

const meuContador = criarContador();

meuContador.mostrar();

meuContador.incrementar();
meuContador.incrementar();

meuContador.mostrar();

// ----------------

function criarAplicadorDeDesconto(valorDesconto) {

    return function (preco) {

        const desconto = preco * valorDesconto;

        const precoFinal = preco - desconto;

        return precoFinal;
    };
}

const aplicarDesconto20 = criarAplicadorDeDesconto(0.20);

const aplicarDesconto10 = criarAplicadorDeDesconto(0.10);

console.log(aplicarDesconto20(100));

console.log(aplicarDesconto10(50));

