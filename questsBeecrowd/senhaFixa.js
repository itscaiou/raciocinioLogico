let senhaUsuario
let senhaSistema = 2002

while(senhaUsuario != senhaSistema){
    senhaUsuario = Number(prompt("Digite a senha: "))
    if (senhaUsuario != senhaSistema){
        console.log("Senha inválida.")
    }
}

console.log("Acesso permitido, programa encerrado.")
