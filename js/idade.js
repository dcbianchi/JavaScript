 function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')


    if (fano.value.length == 0 || Number(fano > ano)) {
        window.alert (`Erro - Ano Zero`)
    } else {
        window.alert (`Deu certo`)
    }
    
 }