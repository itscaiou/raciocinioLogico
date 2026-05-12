let numero = Number(prompt("Informe um número: "))
if (numero > 1000) {
    console.log("Valor Inválido")
} else {
    for(let i = 0; i <= numero; i++){
        if (i % 2 == 1){
            console.log(i)
        }
    }
}
