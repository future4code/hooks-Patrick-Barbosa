// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  /* array.sort(function(a,b){
   if(a > b) return 1;
   if(a < b) return -1;
   return 0;  Não funcionou!
 }) */
  return array.sort((a, b) => a - b)
}



// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const retornaPares = array.filter((item) => {
    return item % 2 === 0
  })
  return retornaPares
}



// EXERCÍCIO 05 
function retornaNumerosParesElevadosADois(array) {
  //NÃO FUNCIONA
  const paresElevado = array.filter((index) => {
    if (index % 2 === 0) {
    }
    return paresElevado ** 2
  })
}


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return Math.max(...array)
}






// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros
(num1, num2) {
  if (num1 > num2) {
    return num1
  } else {
    return num2
  } 
} 

// bloco 
const declaraBloco = {
  
}
console.log(retornaObjetoEntreDoisNumeros(5,6))





















  /* if (num1 > num2) {
    return num1
  } else {
    return num2
  } 
} 
console.log(retornaObjetoEntreDoisNumeros(num1, num2)) */


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}



