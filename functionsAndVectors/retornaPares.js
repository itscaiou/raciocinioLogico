function elementosPares(vetor){
    let vetorPar = []
    let j = 0; // Criação de Índice
    for(let i = 0; i < vetor.length; i++){
        if (vetor[i] % 2 === 0){
            vetorPar[j] = vetor[i] // Vetor par recebe o valor par do vetor principal
            j++
        }
    }
    return vetorPar; // Retorna elementos pares dentro de um novo vetor
}

// PRINCIPAL

let v = [1, 2, 3, 4, 5, 6]

console.log(elementosPares(v))
