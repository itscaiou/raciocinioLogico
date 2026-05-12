let numero = Number(prompt("Informe um número: "))

for (let i = 1; i <=10000; i++){
    if (i % numero == 2){
        console.log(i)
    }
}
