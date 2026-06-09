function bubbleSort(vetor){
    for (let j = 0; j < vetor.length - 1; j++){ // loop externo para controle de passagens
        let cont = 0
        let flag = false;
        for(let i = 0; i < vetor.length-1-j; i++){ // loop interno, percorre os elementos comparando os pares vizinhos.
            cont++
            if(vetor[i] > vetor[i+1]){
                let aux = vetor[i+1]
                vetor[i+1] = vetor[i]
                vetor[i] = aux
                flag = true
            }
        }
        if (flag == false){
            console.log(cont)
            return vetor
        }
    }
}

// PRINCIPAL
let v = [3, 7, 2, 5, 7, 1, 9, 3, 5, 10, 2, 8, 7, 4, 3];

console.log(bubbleSort(v))
