function calcularImc(pesoKg, altura) {
    return pesoKg / Math.pow(altura , 2);
}

function classificarImc (IMC) {
    if (IMC < 18.5) {
        return "O seu IMC é de " + IMC.toFixed(2) + " e você está abaixo do peso";
    } else if (IMC.toFixed(2) < 26) {
        return "O seu IMC é de " + IMC.toFixed(2) + " e você está com o peso normal";
    } else if (IMC.toFixed(2) < 31) {
        return "O seu IMC é de " + IMC.toFixed(2) + " e você está acima do peso";
    } else if (IMC.toFixed(2) < 41) {
        return "O seu IMC é de " + IMC.toFixed(2) + " e você está obeso";
    } else {
        return "O seu IMC é de " + IMC.toFixed(2) + " e você está com obesidade grave";
    }
}

// Main
(function () {
    const pesoKg = 59;
    const altura = 1.78;
    const IMC = calcularImc(pesoKg, altura); 
    console.log(classificarImc(IMC))    
})();