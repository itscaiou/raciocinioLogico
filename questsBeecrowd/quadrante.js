let coordenadaX = 1
let coordenadaY = 1

while(coordenadaX != 0 && coordenadaY != 0){
    coordenadaX = Number(prompt("Digite a coordenada X: "))
    coordenadaY = Number(prompt("Digite a coordenada Y: "))
    if (coordenadaX > 0 && coordenadaY > 0){
        console.log("Primeiro quadrante")
    } if (coordenadaX < 0 && coordenadaY > 0){
        console.log("Segundo quadrante")
    } if (coordenadaX < 0 && coordenadaY < 0){
        console.log("Terceiro quadrante")
    } if (coordenadaX > 0 && coordenadaY < 0){
        console.log("Quarto quadrante")
    }
}
