const {gets, print} = require("./exercícios/funcaoAux")

const N = gets();
let maiorNumeroPar = 0;
let menorNumeroImpar = 1;

for (let i = 0; i < N; i++) {
  const numero = parseInt(gets());
}

  if (numero % 2 == 0) {
    if (numero > maiorNumeroPar) {
      maiorNumeroPar = numero;
    } else {
        if (menorNumeroImpar === 0) {
            menorNumeroImpar = numero
        } else if (numero < menorNumeroImpar) {
            menorNumeroImpar = numero;
        }
  }
  
}