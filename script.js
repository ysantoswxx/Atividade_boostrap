
// ADICIONAR PRODUTO AO CARRINHO

let carrinho = [];

function adicionarCarrinho(produto) {

    carrinho.push(produto);

    alert(
        produto + " foi adicionado ao carrinho! ♡\n" +
        "Total de produtos: " + carrinho.length
    );

}


// BOTÃO DE CONTATO

function mostrarContato() {

    alert(
        "Obrigada por visitar a Pink Beauty! ♡\n" +
        "Entre em contato pelo nosso Instagram: @pinkbeauty"
    );

}
