// EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO.
/* 
1- 
a) Resposta: o código executará pedindo ao usuário um número que será feito um calculo, onde caso o resto da divisão por 2 resultar a 0, aparecerá então no console, uma mensagem "Passou no teste", caso o resultado do resto da divisão seja um valor diferente, então, será executado no console a mensagem "Não passou no teste." 

b) Resposta: Para números que resultem no resto da divisão por 2, o valor de 0.

c)Resposta: Para números que resultem no resto da divisão por 2, o valor diferente de 0.

2-
a) o código serve como um meio de consulta de fruta e seu valor.

b) Se a fruta escolhida for maçã, será impresso: O preço da fruta maçã, é R$ 2,25

c) será impresso : O preço da fruta Pêra, é R$ 5,5
 

3-

a) a primeira linha está criando uma variável chamada numero que pedirá um número ao usuário.

b) se o dígito for 10 será impresso: "Esse número passou no teste". Caso o número for -10 não irá aparecer mensagem

c) Sim, caso o valor for -10 não aparecerá mensagem.
*/


    /* EXERCÍCIO DE ESCRITA DE CÓDIGO */


 const idadeUsuario = Number(prompt('Digite a sua idade:'))
if (idadeUsuario >= 18) {
    console.log('Você pode dirigir.')
} else{
    console.log('Você não pode dirigir.')
} 

 
 

 const turnoDoDia = prompt("Digite em que turno você estuda? M, V ou N ?  ")
if (turnoDoDia === 'M') {
    console.log('Bom Dia!')
}else if (turnoDoDia === 'V'){
    console.log('Boa Tarde!')
}else if (turnoDoDia === 'N') {
    console.log('Boa Noite!')
} 

 let turnoDoDia1 = prompt('Digite em que turno você estuda? M, V ou N ? ')
switch (turnoDoDia1) {
    case 'M':
        console.log('Bom Dia!')
        break;
    case 'V':
        console.log('Boa Tarde!')
        break
    case 'N':
        console.log('Boa Noite!')
        break
    default:
        console.log('Erro: 404')
        break;
}


const generoDoFilme = prompt('Escolha o filme: Suspense, Drama, Acao, Fantasia, Aventura, Terror, Ficcao. ')
const precoDoIngresso = prompt('Qual é o valor do ingresso? ')
const amigoAcompanhante = prompt('Digite se seu amigo vai: Sim ou Não')
switch (generoDoFilme) {
    case 'Suspense':
        console.log('Escolha outro filme')
        break;
    case 'Drama':
        console.log('Escolha outro filme')
        break
    case 'Acao':
        console.log('Escolha outro filme')
        break
    case 'Fantasia':
        console.log('Bom filme!')
        break
    case 'Aventura':
        console.log('Escolha outro filme')
        break
    case 'Terror':
        console.log('Escolha outro filme')
        break
    case 'Ficcao':
        console.log('Escolha outro filme')
        break
    default:
        console.log('Erro: 404')
        break;
} 

if (precoDoIngresso <= 15) {
    console.log('15')
}else { 
    console.log('Sem dinheiro suficiente!')

}

if (amigoAcompanhante === 'Sim') {
    console.log("Bom filme!")
}else if (amigoAcompanhante === 'Nao'){
    console.log("Amigo da onça")
}


/*   Desafio 2  */
const identidadeUsuario = prompt('Digite seu nome completo:')
const tipoDeJogo = prompt('Digite o tipo de jogo: para jogo internácional (IN), para jogo domestico (DO)' )
const etapaDoJogo = prompt('Digite a etapa do jogo desejada (SF) para Semi-Final; (DT) para Decisão do Terceiro Lugar; e (FI)para Final')         
const categoria = ('Selecione a categoria entre as opções 1 , 2 , 3 e 4')
const quantidadeIngresso = Number(prompt('Digite a quantidade de ingresso que deseja: '))
console.log("-------- Dados da Compra --------")
console.log('Nome do Cliente:' ,identidadeUsuario)

if (tipoDeJogo === 'IN'){
    console.log('Tipo de Jogo: Internácional')
}else if (tipoDeJogo === "DO") {
    console.log('Tipo de Jogo: Nacionál')
}

switch (etapaDoJogo) {
    case 'SF':
        console.log('Etapa do Jogo: Semi-Final')
        break;
    case 'DT':
        console.log('Etapa do Jogo: Decisão do Terceiro Lugar')
        break;
    case 'FI':
        console.log('Etapa do Jogo: Final')
        break;
    default:
        break;
}
const catSF1 = (1.320,00)
const catDT1 = (660,00)
const catFI1 = (1.980,00)
const catSF2 = (880,00)
const catDT2 = (440,00)
const catFI =  (1.320,00)
const catSF3 = (550,00)
const catDT3 = (330,00)
const catFI3 = (880,00)
const catSF4 = (220,00)
const catDT4 = (170,00)
const catFI4 = (330,00)



