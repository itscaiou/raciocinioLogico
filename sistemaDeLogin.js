let emailUsuario = "caiov.272@gmail.com"
let cpf = "042.822.273-03"
let senha = "2400"
let validacao1, validacao2

console.log("Bem vindo ao nosso sistema! Digite o seu usuário e senha.\n")
validacao1 = prompt("Usuário: ")
validacao2 = prompt("Senha: ")

if (validacao1 == emailUsuario && validacao2 == senha){
    console.log("Pode entrar.")
}
else if (validacao1 == cpf && validacao2 == senha){
    console.log("Pode entrar.")
}
else{
    console.log("Usuário e senha incorretos ou não cadastrados.")
}
