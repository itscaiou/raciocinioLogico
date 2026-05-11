let cont = 0
let sapo, pato, iguana
let contSapo = 0
let contPato = 0
let contIguana = 0
let percentualPatos, percentualSapos, percentualIguana
let menu

do {
    console.log("Qual animal você gostaria de cadastrar?\n 1. Sapo\n 2. Pato\n 3. Iguana\n 4. Sair")
    menu = Number(prompt("Escolha uma opção: "));
    if (menu === 1){
        sapo = Number(prompt("Quantos Sapos você quer contar? "))
        contSapo = sapo + contSapo
    } if (menu === 2){
        pato = Number(prompt("Quantos Patos você quer contar? "))
        contPato = pato + contPato
    } if (menu === 3){
        iguana = Number(prompt("Quantas Iguanas você quer contar? "))
        contIguana = iguana + contIguana
    } else if (menu === 4){
        console.log("Saindo...")
    }
    
} while(menu != 4)

cont = contPato + contSapo + contIguana
percentualSapos = (contSapo / cont) * 100
percentualPatos = (contPato / cont) * 100
percentualIguana = (contIguana / cont) * 100


console.log("Quntidade total: ", cont)
console.log("Percentual: ", percentualSapos.toFixed(1),"% de Sapos")
console.log("Percentual: ", percentualPatos.toFixed(1),"% de PaTos")
console.log("Percentual: ", percentualIguana.toFixed(1),"% de Iguanas")
console.log("Quantidade de Sapos: ", contSapo)
console.log("Quantidade de Patos: ", contPato)
console.log("Quantidade de Iguanas: ", contIguana)
console.log("Programa Encerrado!")
