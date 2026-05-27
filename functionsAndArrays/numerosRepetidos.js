function valorRepetido(vec, n){
    let cont = 0
    for (let i = 0; i < vec.length; i++){
        if (vec[i] === n){
            cont = cont + 1
        }
    }
    console.log(cont)
    return cont;
}

let valor = Number(prompt("Digite um valor: "))
let v = [1, 2, 3, 4, 5, 6, 7, 6, 4, 3, 4, 5, 2, 3, 4, 5, 6, 2, 1, 2, 1];

valorRepetido(v, valor);
