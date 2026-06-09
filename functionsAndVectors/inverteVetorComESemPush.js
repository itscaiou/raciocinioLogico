function inverteVetor(vetor){
    let vetInv = []
    let j = 0
    for (let i = vetor.length - 1; i >= 0; i--){
        vetInv[j] = vetor[i]
        j++
    }
    
    return vetInv
}

function inverteVetorComPush(vetor){
    let vetInv = []
    for (let i = vetor.length - 1; i >= 0; i--){
        vetInv.push(vetor[i]);
    }
    
    return vetInv
}

// PRINCIPAL

let v = [2, 3, 1, 4, 5, 10, 9, 3, 10]

console.log(inverteVetor(v))
console.log(inverteVetorComPush(v))
