```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    // Escreva seu código aqui
    const bonificacao =  100 * qtdeCarrosVendidos
    const salarioFuncionario = 2000
    const vendasPorCentagem = valorTotalVendas * 0.05
    const resultado = salarioFuncionario + bonificacao + vendasPorCentagem
    return resultado
   } ```