const pesoKg = 59;
const altura = 1.78;
const IMC = pesoKg / Math.pow(altura , 2); 

if (IMC < 18.5) {
    console.log("O seu IMC é de " + IMC.toFixed(2) + " e você está abaixo do peso");
} else if (IMC.toFixed(2) < 26) {
    console.log("O seu IMC é de " + IMC.toFixed(2) + " e você está com o peso normal");
} else if (IMC.toFixed(2) < 31) {
    console.log("O seu IMC é de " + IMC.toFixed(2) + " e você está acima do peso");
} else if (IMC.toFixed(2) < 41) {
    console.log("O seu IMC é de " + IMC.toFixed(2) + " e você está obeso");
} else {
    console.log("O seu IMC é de " + IMC.toFixed(2) + " e você está com obesidade grave");
}