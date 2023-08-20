const numero = 4;

const isNumeroPar = numero % 2 === 0;

if (numero === 0 ) {
console.log("Número Inválido");
} else if (isNumeroPar) {
    console.log("Número Par");
} else {
    console.log("Número Impar");
}