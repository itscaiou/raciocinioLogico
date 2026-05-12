function fibonacci(N){
    let x = 0
    let y = 1
    let aux
    
    for(i = 0; i < N; i++){
        console.log(x)
        aux = x + y
        x = y
        y = aux
    }
}

let numero = Number(prompt("Digite um valor para mostrar a sequência de fibonacci: "))

fibonacci(numero)
