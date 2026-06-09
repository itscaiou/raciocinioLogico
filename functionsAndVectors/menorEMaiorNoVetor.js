function menorEMaiorNoVetor(vetor){
    let menor = vetor[0];
    let maior = vetor[0];
    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] < menor){
            menor = vetor[i]
            console.log("Menor recebe", vetor[i])
        }
        else if (vetor[i] > maior){
            maior = vetor[i]
            console.log("Maior recebe", vetor[i])
        }
    }
    console.log("Menor Valor: ", menor)
    console.log("Maior Valor: ", maior)
    let valores = ["Menor Valor:", menor, "Maior Valor: ", maior]
    return valores
}

// PRINCIPAL

let v = [2, 3, 1, 4, 5, 10, 9, 3, 10]

console.log(menorEMaiorNoVetor(v))
