let numero = Number(prompt("Informe um número: "))

if (numero % 2 == 0 && numero > 0){
    console.log("EVEN POSITIVE")
} else if (numero % 2 == 1 && numero > 0){
    console.log("ODD POSITIVE")
} else if (numero === 0){
    console.log("NULL")
} else if (numero % 2 == 0 && numero < 0){
    console.log("EVEN NEGATIVE")
} else {
    console.log("ODD NEGATIVE")
}
