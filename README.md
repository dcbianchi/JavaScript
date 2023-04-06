# JavaScript
## https://dcbianchi.github.io/JavaScript/
 Curso em Video de JavaScript 

       n.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
         Esse comando serve para formatar um numero para um String em formato de uma moeda local
         
            n.toLocaleString(
         Pegamos a Variavel n e convertemos para uma String baseada em Localidade
            'pt-br', {Style: 'currency', currency: 'BRL'}
         Aqui estamos dizendo o idioma da string, Português Brazil e definimos o estilo de saida com moeda (currency)
         em seguida definimos o atributo currency com Real Brazileiro.

          O resultado é: R$ 0.000,00

 Para usar a hora do sistema use: Date() e GetHours()
 var agora = new Date()
var hora = agora.getHours()
