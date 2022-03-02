/*              Exercícios de Interpretação

1-
a) o que será impresso no console?
    "Matheus Narchtergaele"
    "Virginia Cavendish"]
    {canal: "Globo", horario: "14h"}

2-
a) o que vai ser impresso no console?
nome: "Juca",
idade: 3,
raca: "SRD"

nome: "Juba"
idade: 3,
raca "SRD"

nome: "Jubo"
idade: 3,
raca: "SRD"

b)os três pontos , tambem conhecido pelo nome de "Spread", tem por função copiar algo já existente permitindo realizar alterações desejadas.


3-
a)False
  aparecerá undefined, pois não existe no objeto pessoa altura , e para ser criado deveria ter em seguida algum número atribuido.

 */



  /*            Exercícios de Escrita de Código
   
 /*  a)
  const meuPet = {
      nome: "Peter",
      apelidos: ["Levado","Cezar","Brincalhão"],
  }
function apresentarPet () {
    console.log(`Meu gato se chama ${meuPet.nome}, e seus apelidos são, ${meuPet.apelidos[0]}, ${meuPet.apelidos[1]} e ${meuPet.apelidos[2]}.`)

}

apresentarPet()

const novoPet ={
    ...meuPet,
    nome: "Peter",
    apelidos: ["Fujão","Magrelo","branquinho"]
}

function apresentarPet2 (){
    console.log(`Meu gato se chama ${novoPet.nome}, e seus apelidos são, ${novoPet.apelidos[0]}, ${novoPet.apelidos[1]} e ${novoPet.apelidos[2]}`)
}
apresentarPet2()
 

2-
a)
/*  */
/* 
const dadosUsuario1 = {
    nome:'Patrick',
    idade: 27,
    profissao: 'programador'
}






retorno: ['Patrick', 7 ,27,'Programador' ,11]

function informacoesUsuario (usuario) {
    return [
        usuario.nome,
        usuario.nome.length,
        usuario.idade,
        usuario.profissao,
        usuario.profissao.length
    ]
}
console.log(informacoesUsuario(dadosUsuario1))
 */
/* 3-
 */
/* 
const carrinho = []

fruta1 = {
    nome:'Maca',
    disponibilidade: true
}

fruta2 = {
    nome:'Laranja',
    disponibilidade: true 
}

fruta3 = {
    nome:'Abacate',
    disponibilidade: true
}

function transferidor (fruta1,fruta2,fruta3) {
    carrinho.push(fruta1,fruta2,fruta3)
    console.log(carrinho)
}
transferidor(fruta1,fruta2,fruta3)

console.log(carrinho)
 */

/* Desafio: */

/* function infoUsuario () {
    const nomeUsuario = prompt('Digite o seu nome: ')
    const idadeUsuario = Number(prompt('Digite a sua idade: '))
    const profissaoUsuario = prompt('Digite a sua profissao: ')
    
    blocoInfoUsuario = {
        nome: nomeUsuario,
        idade: idadeUsuario,
        profissao: profissaoUsuario,
    }
    console.log(blocoInfoUsuario)
}
typeof (blocoInfoUsuario)
infoUsuario() */

function objetoFilmes () {
    const filmeStarWars = {
        nome: 'Star Wars: Episódio III – A Vingança dos Sith',
        lancamento: 2005
    }

    const filmeJohnWick = {
        nome: 'John Wick – De Volta ao Jogo',
        lancamento: 2014
    }
    if (filmeStarWars.lancamento > filmeJohnWick.lancamento ) {
        return ('o primeiro filme foi lançado antes do segundo? true')
    }else if (filmeStarWars < filmeJohnWick) {
        
    }
    return(objetoFilmes)
}
