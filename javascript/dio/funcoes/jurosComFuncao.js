function aplicarDesconto(desconto, valor) {
return (valor -( valor * desconto));
}

const precoProduto = 10;
const formaPagamento = "Débito"
const parcelas = 2

if (formaPagamento === "Débito" && parcelas === 1) {
const precoFinal = precoProduto * 0.90
console.log("O valor a pagar é R$" + precoFinal.toFixed(2))
} 
else if (formaPagamento === "Dinheiro" && parcelas === 1) {
    const precoFinal = precoProduto * 0.85
    console.log("O valor a pagar é R$" + precoFinal.toFixed(2))
} 
else if (formaPagamento === "PIX" && parcelas === 1) {
    const precoFinal = precoProduto * 0.85
    console.log("O valor a pagar é R$" + precoFinal.toFixed(2))
} 
else if (parcelas === 2) {
    const precoFinal = precoProduto
    console.log("O valor a pagar é R$" + precoFinal.toFixed(2))
} 
else {
    const precoFinal = precoProduto * 1.10
    console.log("O valor a pagar é R$" + precoFinal.toFixed(2))
}