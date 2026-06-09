function selectionSort(vetor){
    for(let i = 0; i < vetor.length; i++){
        let indiceMenor = i;
        
        for(let j = i + 1; j < vetor.length; j++){
            if (vetor[j] < vetor[indiceMenor]){
                indiceMenor = j;
            }
        }
        let aux = vetor[i]
        vetor[i] = vetor[indiceMenor];
        vetor[indiceMenor] = aux;
    }
    return vetor
}

// PRINCIPAL
let v = [3, 7, 2, 5, 7, 1, 9, 3, 5, 10, 2, 8, 7, 4, 3];

console.log(selectionSort(v))
