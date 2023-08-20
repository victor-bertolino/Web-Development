/**
 * Faça um programa para calcular o valor de uma viagem.
 * 
 * Você terá 5 variáveis. Sendo elas:
 * 1 - Preço do etanol;
 * 2 - Preço da gasolina;
 * 3 - O tipo de combustível que está no seu carro;
 * 4 - Gasto médio de combustível do carro por KM;
 * 5 - Distância em KM da viagem;
 * 
 * Imprimma no console o valor que será gasto para realizar esta viagem.
 */

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const gastoMedioPorKm = 10;
const distanciaKm = 120;
const tipoDeCombustivel = "Etanol";

const consumoViagem = distanciaKm / gastoMedioPorKm 

if (tipoDeCombustivel === "Etanol") {
valorViagem = consumoViagem * precoEtanol;
console.log("O valor da viagem é " + valorViagem); 
} else if (tipoDeCombustivel === "Gasolina") {
   valorViagem = consumoViagem * precoGasolina;
   console.log("O valor da viagem é " + valorViagem);
} else {
   console.log("Combustível Inválido")
}