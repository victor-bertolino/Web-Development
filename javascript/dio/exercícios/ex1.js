const nota1 = 7.9;
const nota2 = 7.9;
const nota3 = 8.0;
const media = (nota1 + nota2 + nota3) / 3;

if (media < 5){
    console.log("A média do aluno é " + media.toFixed(1) + " e foi reprovado");
} else if (media < 8) {
    console.log("A média do aluno é " + media.toFixed(1) + " e está de recuperação");
} else {
    console.log("A média do aluno é " + media.toFixed(1) + " e foi aprovado");
}
