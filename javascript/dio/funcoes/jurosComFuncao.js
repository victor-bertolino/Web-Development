function aplicarDesconto(valor, desconto) {
    return valor - (valor * (desconto / 100))
}

function aplicarJuros(valor, juros) {
    return valor + (valor * (juros / 100))
}

let preco = 7;
let formaPagamento = 1;

    if (formaPagamento === 1) {
        console.log(aplicarDesconto(7,10))
    } else if (formaPagamento === 2) {
        console.log(preco)
    } else {
        console.log(aplicarJuros(7,10))
    }

