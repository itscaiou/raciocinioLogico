// FUNÇÃO
function somaElementosVetor(vetor){
    let soma = 0
    for(let i = 0; i < vetor.length; i++){
        soma = soma + vetor[i];
    }
    return soma;
}

// PRINCIPAL

let v = [2, 2]

console.log(somaElementosVetor(v))
