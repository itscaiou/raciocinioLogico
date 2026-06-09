function numeroAlvo(alvo, vetor){
    let numAlvo = 0
    for(let i = 0; i < vetor.length; i++){
        if (vetor[i] === alvo){
            numAlvo = numAlvo + 1
        }
    }
    return numAlvo;
}

// PRINCIPAL
let n = Number(prompt("Digite um Número Alvo: "))
let v = [3, 7, 2, 5, 7, 1, 9, 3, 5, 10, 2, 8, 7, 4, 3];

console.log("A quantidade de números", n, "que aparece no array é:", numeroAlvo(n, v))
