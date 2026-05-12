let x = 1, y = 0

while(x != y){
    x = Number(prompt("Digite um valor para X: "))
    y = Number(prompt("Digite um valor para Y: "))
    
    if (x > y){
        console.log("Decrescente.")
    } else if(x < y){
        console.log("Crescente.")
    }
}

console.log("Valores iguais, programa encerrado.")
