let nota1 = -1
let nota2 = -1
let codigo
let media

do{
    
    console.log("Digite a primeira nota: ")
    nota1 = Number(prompt("Nota 1: "))
    console.log("Digite a segunda nota: ")
    nota2 = Number(prompt("Nota 2: "))
        
    if(nota1 < 0 || nota2 < 0 || nota1 > 10 || nota2 > 10){
        console.log("Notas Inválidas")
    } else {
        media = (nota1 + nota2) / 2
        console.log("Média =", media)
    }
    
    console.log("Novo calculo?\n 1 - Sim\n 2 - Não")
    codigo = Number(prompt(""))
}while(codigo == 1)

console.log("Programa Encerrado!")


