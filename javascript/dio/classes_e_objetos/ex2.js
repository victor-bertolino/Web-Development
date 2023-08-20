class Pessoas {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    };

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    };

    classificarImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return ('Abaixo do Peso')
        } else if (imc.toFixed(2) < 26) {
            return ('Peso Normal')
        } else if (imc.toFixed(2) < 31) {
            return ('Acima do Peso')
        } else if (imc.toFixed(2) < 41) {
            return ('Obesidade')
        } else {
            return ('Obesidade Grave')
        }
    };

};

const jose = new Pessoas('José', 92, 1.79);
console.log(jose.classificarImc())