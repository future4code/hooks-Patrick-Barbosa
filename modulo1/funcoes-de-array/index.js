//     Exercícios de Interpretação

//  1- Será impresso um bloco de array para cada nome seus respectivos apelidos e númeração. Pois no console.log pede item,array ,e index.

/*  *****************************    */

//  2- será impresso uma nova array contendo apenas os nomes. Pois no console pede para imprimir apenas itam.nome.

/*  *****************************    */

//   3- O código cria uma nova array com nomes e posição da variavel e array, com exceção da Chijo.

/* ficaria algo como: 
const novoArrayC = [
    {nome:"Amanda Rangel", apelido: "Mandi"[0]},
    {nome:"Laís Petra", apelido: "Laura"[1]},
]
 */


/* ************************Exercício de Escrita de código************************************ */
  

//1- 

 /* const pets = [
    {nome: "Lupin" , raca: "Salsicha"},
    {nome: "Polly" , raca: "Lhasa Apso"},
    {nome: "Madame" , raca: "Poodle"},
    {nome: "Quentinho" , raca: "Salsicha"},
    {nome: "Fluffy" , raca: "Poodle"},
    {nome: "Caramelo" , raca: "Vira-Lara"}
] */

//****************************** */

// a-

/* const nomeDogs = pets.map((item) => {
    return item.nome
})
console.log(nomeDogs)  */

//********************************* 

//b-

/* const dogsSalsicha = pets.filter((item,) => {
    return item.raca === "Salsicha"
    
})
console.log(dogsSalsicha) */
 

//********************************* 


// c- 

/* const enviarMensagem = pets.map((item) => {
    if( item.raca ==="Poodle") {
    /* imprime ('Você ganhou um cupom de desconto de 10% para tosa o/a ' + (nome.pet))
    } 
    const poodle1 = "Fluffy";
    const poodle2 = "Madamme"
    console.log('Você ganhou um cupom de desconto de 10% para tosar o/a ' + poodle1);
     console.log('Você ganhou um cupom de desconto de 10% para tosar o/a ' + poodle2) 
    
}
})
 enviarMensagem() 
 */
//********************************* //********************************* 

// 2- 
 
const produtos = [
    {nome: "Alface Lavada" , categoria: "Hortifruti" , preco: 2.5 },
    {nome: "Guarana 2l" , categoria: "Bebidas" , preco: 7.8 },
    {nome: "Veja Multiuso" , categoria: "Limpeza" , preco: 12.6 },
    {nome: "Dúzia de Bananas" , categoria: "Hortifruti" , preco: 5.7 },
    {nome: "Leite" , categoria: "Bebidas" , preco: 2.99},
    {nome: "Cândida" , categoria: "Limpeza" , preco: 3.30},
    {nome: "Detergente Ype" , categoria: "Limpeza" , preco: 2.2 },
    {nome: "Vinho Tinto" , categoria: "Bebidas" , preco: 55},
    {nome: "Berinjela kg" , categoria: "Hortifruti" , preco: 8.99},
    {nome: "Sabão em Pó Ype" , categoria: "Limpeza" , preco: 10.00}
]

//a 
/* const nomeItens = produtos.map((index) => {
    return index.nome
})
console.log(nomeItens) */

//b 
/* const listaPromocao = [
    itensPromocao = 
    {nome: "Alface Lavada" , preco: 2.5 },
    {nome: "Guarana 2l" , preco: 7.8 },
    {nome: "Veja Multiuso" , preco: 12.6 },
    {nome: "Dúzia de Bananas" , preco: 5.7 },
    {nome: "Leite" , preco: 2.99},
    {nome: "Cândida" , preco: 3.30},
    {nome: "Detergente Ype" , preco: 2.2 },
    {nome: "Vinho Tinto" ,  preco: 55},
    {nome: "Berinjela kg" , preco: 8.99},
    {nome: "Sabão em Pó Ype" , preco: 10.00}, 
]

const novoArrayDeObjetos = [
    
    produtosEmDesconto = {
        ...listaPromocao,
        preco:  itensPromocao.preco *95/100
    }
    
]
console.log(novoArrayDeObjetos) */

// c

/* const arrayBebidas = [
objetoBebidas = produtos.filter((index) =>{
    return index.categoria === "Bebidas"
    
})
]
console.log(arrayBebidas) */

// d 
/*  const arrayYpe = [
    objetoNome = produtos.filter ((index) => {
      return index.nome.includes("Ype")  
    })
]
console.log(arrayYpe)  */

// e 
 
  const arrayDeFrase = produtos.map((index,indice) => [
    ...produtos
  ])
  console.log(`Compre   ${index}   por   ${indice}`)












/*
const listaDeDesconto = listaPromocao.map((nome, valor) => {
    console.log(nome.nome, valor.preco * 95/100)
})


 Para Consertar , basta retirar os comentario desta parte debaixo. que faz parte do exercicio 2 letra b .
 const listaDeProdutos = listaPromocao.map((nome) => {
    return nome.nome
}) 
 
console.log(listaDeProdutos,listaDeDesconto)  */
















/*  ***************************** Testes *****************************   */


/* const listaPromocao = [
    itensPromocao = 
    {nome: "Alface Lavada" , preco: 2.5* 95/100 },
    {nome: "Guarana 2l" , preco: 7.8* 95/100 },
    {nome: "Veja Multiuso" , preco: 12.6* 95/100 },
    {nome: "Dúzia de Bananas" , preco: 5.7* 95/100 },
    {nome: "Leite" , preco: 2.99* 95/100},
    {nome: "Cândida" , preco: 3.30* 95/100},
    {nome: "Detergente Ype" , preco: 2.2* 95/100 },
    {nome: "Vinho Tinto" ,  preco: 55* 95/100},
    {nome: "Berinjela kg" , preco: 8.99* 95/100},
    {nome: "Sabão em Pó Ype" , preco: 10.00* 95/100}, 
]
console.log(listaPromocao) */










































/* const verificaPar = (numero,imprimir) => {
    if (numero % 2 === 0) {
        const resultado = numero/2
        imprimir(resultado)
    }
}
const imprimeMensagem = (valor) => {
    console.log('O resultado da sua conta é ' + valor )
}
verificaPar(98, imprimeMensagem) */
























/* const imprimeMensagem = (valor) => {
    console.log("o resultado da sua conta é " valor)
} */




















/* function somaNumeros () {
    let num1 = Number(prompt('Digite um numero:'))
    let num2 = Number(prompt('Digite outro valor: '))
    let soma = (num1 + num2)
    console.log(soma)
}
somaNumeros() */



/*
******************* Calcular Area de Retangulo uando Function *******************


 let alturaRetangulo = (lado1,lado2) => {
    const resultado = (lado1 * lado2)
    return resultado
}

const alturaDoRetangulo = prompt('Digite a altura de um retângulo: ')

const larguraDoRetangulo = prompt('Digite a largura de um retângulo')

 const totalDaAreaRetangulo = alturaRetangulo(alturaDoRetangulo,larguraDoRetangulo)

 console.log(`O Resultado da altura de um retangulo é ${totalDaAreaRetangulo}`) 

 ****************************************************************************************
*/




