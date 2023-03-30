
var agora = new Date() //instanciando o valor de retorno da função Date() na variavel agora.
var diaSem = agora.getDay() //recuperando O dia (getDay()) da instancia agora para a variavel diaSem
var hora = agora.getHours()//recuperando hora local do sistema (getHours()) da instancia agora para a variavel diaSem
/* Pro JavaScript a semana começa no domingo e tem valor 0
    0 = Domingo
    1 = Segundo
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sabado
*/

 if (hora < 12){
    console.log(`Bom dia`)
    var tramp = `Hoje`
 } else if (hora < 18) {
    console.log(`Boa tarde`)
    var tramp = `preguiços(0)`
 } else {
    console.log(`Boa noite`)
    var tramp = `Amanhã`
 }

 switch (diaSem) {
    case 0:
        console.log(`Domingo, ${hora}`)
    break //break é obrigatorio!!
    case 1:
        console.log(`Segunda, ${hora}`)
    break //break é obrigatorio!
    case 2:
        console.log(`Terça, ${hora}`)
    break //break é obrigatorio!
    case 3:
        console.log(`Quarta, ${hora}`)
    break //break é obrigatorio!
    case 4:
        console.log(`Quinta, ${hora}`)
    break //break é obrigatorio!
    case 5:
        console.log(`Sexta, ${hora}`)
    break //break é obrigatorio!
    case 6:
        console.log(`Sabado, ${hora}`)
    break //break é obrigatorio!
    default:
        console.log(`Dia errado`)
    break
 }

  if (diaSem == 6 || diaSem == 0){
    console.log(`Hoje NÃO é dia de samana, descança Guerreiro ${tramp}`)
  } else if (diaSem < 6) {
    console.log(`Hoje é dia da semana, vai trabalhar ${tramp}`)
  } else {
    console.log(`Insira os dados corretamente ${tramp}`)
  }