class Carros {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDeViagem(distanciaKm, precoCombust) {
        return distanciaKm * this.gastoMedioPorKm * precoCombust;

    }

    }

    const uno = new Carros('Fiat', 'Prata', 1/12);

    console.log(uno.calcularGastoDeViagem(70, 5))

    const palio = new Carros ('Fiat', 'Preto', 1/10);

    console.log(palio.calcularGastoDeViagem(70, 5))