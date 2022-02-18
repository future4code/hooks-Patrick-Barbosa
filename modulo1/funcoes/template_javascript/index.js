/* 
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

a) 10
   50

b)retirando os console.log, é realizado a conta apenas no segundo caso , o primeiro é ignorado.

 
/*  
a.
A Função apenas reconhece a palavra cenoura em lowercase , no caso de uppercase a função não reconhece.

b.  True
    True
    True

*/

function sobreMim () {
    const nome = ("Patrick")
    const idade = (27)
    const endereco = ("Rio de Janeiro")
    const profissao = ("estudante")
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}`) 
    
}
sobreMim() 

//b
 function informacaoPessoa (nomePessoa,idadePessoa,cidadePessoa,profissaoPessoa) {
   
    console.log (`eu sou ${nomePessoa}, tenho ${idadePessoa} anos, moro em ${cidadePessoa} e sou ${profissaoPessoa} `)

}
informacaoPessoa("Patrick", 27 ,"Rio de Janeiro", "Dev"  )

// 2-a
 function somaNumeros(num1, num2){
    const calculo = num1 + num2
    return calculo
    }
    console.log(somaNumeros(7,2))


// 2-b
function qualEmaior(numero1, numero2){
        const calculo = numero1 > numero2
        console.log(calculo)
        
        }
        qualEmaior(9,5) 

//2 c
 function parOuNao (num) {
    return num % 2 === 0
}
console.log (parOuNao(5)) 

//2 d 
function dimensaoDaString (string){
    return ` A string ${string.toUpperCase()} tem ${string.length} caracteres `

}
console.log(dimensaoDaString("Verde")) 
5


//Exercicio 3

function soma(numeroUm,numeroDois){
    return numeroUm+numeroDois
}
function subtracao(numeroUm,numeroDois){
    return numeroUm-numeroDois 
}
function multiplicacao(numeroUm,numeroDois){
    return numeroUm*numeroDois 
}
function divisao(numeroUm,numeroDois){
    return numeroUm/numeroDois
}
let primeiroNum = Number(prompt("digite um numero:"))
let segundoNum = Number(prompt("digite outro numero:"))

console.log(`Nùmeros inseridos: ${primeiroNum}, ${segundoNum}`)
console.log("soma:", soma(primeiroNum,segundoNum))
console.log("subtracao:", subtracao(primeiroNum,segundoNum))
console.log("multiplicacao:", multiplicacao(primeiroNum,segundoNum))
console.log("divisao:", divisao(primeiroNum,segundoNum))