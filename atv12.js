let nome = "elvilys"
let anoAtual = 2023
let anoNascimento = 1999
let idade = anoAtual - anoNascimento

if (idade >=18){
    document.write(`O cidadão  ${nome} poderá votar nesse ano.`)
} else {
    document.write(`o cidadão ${nome} não poderá votar nesse ano`)
}