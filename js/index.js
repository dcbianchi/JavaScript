//Exercicios Modulo D
 function verificar() {
     var txtv = window.document.getElementById('txtvel')
     var res = window.document.getElementById('res')
     var vel = Number(txtv.value)

     res.innerHTML = `Sua velocidade atual é de <strong>${vel}KM/h </strong>`
     if (vel > 60) {
         res.innerHTML += `<p> Você foi multado</p>`
     }
     res.innerHTML += '<p> Dirija sempre com o cinto de segurança</p>'
 }