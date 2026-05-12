let numero = Number(prompt("Informe um número: "))
if (numero < 5 && numero > 2000) {
    console.log("Valor Inválido")
} else {
    for(let i = 1; i <= numero; i++){
        if (i % 2 == 0){
            console.log("O valor de ",i,"^ 2 é", i ** 2)
        }
    }
}
