let numero = Number(prompt("Informe um número: "))
if (numero < 0) {
    console.log("Valor Inválido")
} else {
    for(let i = numero; i <= numero+11; i++){
        if (i % 2 == 1){
            console.log(i)
        }
    }
}
