function diagonalPrincipalMatriz(matriz){
    let diagonal = []
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz.length; j++){
            if (i === j){
                diagonal.push(matriz[i][j]);
            }
        }
    }
    return diagonal
}

// PRINCIPAL
let m = [[3, 7, 2], [5, 7, 1], [9, 3, 5]];

console.log(diagonalPrincipalMatriz(m))
