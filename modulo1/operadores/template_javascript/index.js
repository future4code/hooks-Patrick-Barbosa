/* const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 
console.log("a. ",resultado )

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado) */

/*
 A - False
 B - False
 C - True
 D - Boolean 
*/

// 2-  a conta está errada pelo fato do console interpretar que seja uma string e nao números. Ele vai concatenar e não realizar a devida soma. 


/* 3-
O codigo correto seria : 


const primeiroNumero = Number(prompt("Digite o promeiro número: "))
const segundoNumero = Number(prompt("Digite o segundo número: "))

const soma = primeiroNumero + segundoNumero

console.log(soma)
 */
 



//2 
 const idade = prompt('Digite a sua idade: ')
const idadeMelhorAmigo = prompt('Digite a idade de seu melhor amigo: ')
const Boolean = maiorIdade = idade > idadeMelhorAmigo
const diferencaIdade = idade - idadeMelhorAmigo
console.log (maiorIdade)
console.log (diferencaIdade) 


 3
A
const numeroPar = Number(prompt("Digite um número par: ")) 
console.log (numeroPar % 2)

// Quando números pares o resto é 0 , quando impares o resto é 1.  




 const anoNascimento = Number(prompt("Digite o ano de nascimento: "))
 const anoAtual = 2022
 const idadeUsuario = (anoAtual - anoNascimento)
 const diasUsuario = (365 * idadeUsuario)
 
 console.log ('Você possui ' , (diasUsuario) , ' dias')
 console.log ('Você possui ' , (idadeUsuario * 12) , ' meses de vida' )
 console.log (' Você possui' , (diasUsuario * 24) , 'horas de vida')

 



 
  
 const primeroNumero = prompt('Digite um número: ')
 const segundoNumero = prompt('Digite o segundo número: ')

 console.log ( " O primeiro número é maior que o segundo ? " , (primeroNumero > segundoNumero) )
 console.log ( " O primeiro número é igual ao segundo ? " , (primeroNumero === segundoNumero) )
 console.log ( " O primeiro número é divisivel pelo segundo ? " , (primeroNumero / segundoNumero ===0) )
 console.log ( " O segundo número é divisivel pelo primeiro ? " , (segundoNumero / primeroNumero===0 ) )
 
 
 
 
 
 


 