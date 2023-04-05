 //Exercicios do Modulo 
 function carregar(){
    var data = new Date() //Instanciando Data na Variavel Agora
    var hora = data.getHours() //capturando a hora do sistema pelo retorno da função getHours do objeto Agora
    var msg = document.getElementById('pHora')
    var foto = document.getElementById('imgCenterPage')

    //Usando a variavel hora como base, condicionamos o Paragrafo time
    if (hora >=0 && hora < 12) {
        //Bom dia
        msg.innerHTML = `Bom dia, agora são ${hora} hs`
        foto.src = `img/sunrise.jpg`
        document.body.style.background = '#e4bc7f'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML = `Boa tarde, agora são ${hora} hs`
        foto.src = `img/sunset.jpg`
        document.body.style.background = '#b97029'
    } else {
        msg.innerHTML = `Boa noite, agora são ${hora} hs`
        foto.src = `img/night.jpg`
        document.body.style.background = '#2b526f'
    }
 }

 function verificar() {
    var data = new Date() //Instanciando Data na Variavel Agora
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.quereySelector('div#res')

    window.alert ('verifique os dados e tente novamente')
   
 }