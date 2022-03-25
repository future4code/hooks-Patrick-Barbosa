```function calculaPrecoTotal(quantidade) {
    // Escreva seu código aqui
    if(quantidade < 12) {
      return 1.30 * quantidade
    }else if (quantidade >= 12) {
      return 1.00 * quantidade
    }
    
  }```


  
  ```function calculaPrecoTotal(quantidade) {
    // Escreva seu código aqui
    const precoDaMacaMaior = quantidade * 1.00;
    const precoDaMacaMenor = quantidade * 1.30;
    if(quantidade < 12){
      return precoDaMacaMenor
    }else if (quantidade > 12){
      return precoDaMacaMaior
    }```