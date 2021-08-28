// algoritimo para validação
// validação de idade
let idade = 18;

if (idade <18) {
    console.log("idade não permitida para o evento")
} else {
    console.log("cadastro aprovado")
}

// //validação lista de convidados

var numeroDeConvidados= []

if (numeroDeConvidados <= 100) {
    console.log("é possivel cadastrar mais convidados")
} else {
    console.log("Não tem mais espaço nessa lista")
}

//lista de convidados e palestrantes por evento
{
let listaDeParticipantes= ["Junior", "Claudio", "Pedro"]
    console.log(listaDeParticipantes)

let listaDePalestrantes= ["Bruna", "Julia","Rafael"] 
    console.log(listaDePalestrantes)
}

//Validaçãp para Data do evento

var dataAtual= [25/03/2020]

let dataDoEvento= [26/03/2020]

if (dataDoEvento > dataAtual) {
    console.log("Evento marcado! !")
} else {
    console.log("Data invalida")
}