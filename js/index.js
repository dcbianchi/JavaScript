var agora = new Date()
//var diaSem = agora.getDay()
var diaSem = 5
/*
    0 = Domingo
    1 = Segundo
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sabado
*/

 switch (diaSem) {
    case 0:
        console.log('Domingo')
    break //break é obrigatorio!!
    case 1:
        console.log('Segunda')
    break //break é obrigatorio!
    case 2:
        console.log('Terça')
    break //break é obrigatorio!
    case 3:
        console.log('Quarta')
    break //break é obrigatorio!
    case 4:
        console.log('Quinta')
    break //break é obrigatorio!
    case 5:
        console.log('Sexta')
    break //break é obrigatorio!
    case 6:
        console.log('Sabado')
    break //break é obrigatorio!
    default:
        console.log('Dia errado')
    break
 }

  if (diaSem == 6 || diaSem == 0){
    console.log(`Hoje NÃO é dia de samana, descança Guerreiro`)
  } else if (diaSem < 6) {
    console.log(`Hoje é dia da semana, vai trabalhar`)
  } else {
    console.log(`Insira os dados corretamente`)
  }