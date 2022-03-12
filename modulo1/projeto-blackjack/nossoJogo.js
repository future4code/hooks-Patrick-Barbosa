/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
/* const carta = comprarCarta(); */



 //        Configurações Usuário

 const jogoBlackjack = () => {
   console.log ( `Boas Vindas ao jogo de Blackjack!`)
   if (confirm ('Quer iniciar uma nova partida?')) {
      console.log('O programa deve iniciar uma nova rodada.')
      const nomeUsuario = prompt('Digite o seu nome: ')
const cartasUsusario = comprarCarta()
const cartasUsuario2 = comprarCarta()
const pontosUsuario = (cartasUsusario.valor + cartasUsuario2.valor)
//                  ***

//          Configurações  PC
const cartasPc = comprarCarta()
const cartasPc2 = comprarCarta()
const pontosPc = (cartasPc.valor + cartasPc2.valor)
//                  ***

console.log(`${nomeUsuario} - Cartas: ${cartasUsusario.texto} ${cartasUsuario2.texto}  Pontuação:${pontosUsuario}`) 

console.log(`Computador - Cartas: ${cartasPc.texto} ${cartasPc2.texto} Pontuação: ${pontosPc}`)

if (pontosUsuario > pontosPc) {
   console.log(`${nomeUsuario} Ganhou!`)
}else if(pontosPc > pontosUsuario) {
   console.log("O computador ganhou!")
} else if (pontuacaoUsuario === pontuacaoPc) {
   console.log("Empate!")
}
      
   }else{
      console.log('O jogo acabou.')
   } 
 }
 jogoBlackjack()






















 