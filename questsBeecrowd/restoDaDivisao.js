let num1 = Number(prompt("Digite um número: "))
let num2 = Number(prompt("Digite um segundo número: "))

for(let i = num1; i < num2; i++){
    if (i % 5 == 2 || i % 5 == 3){
        console.log(i)
    }
}
