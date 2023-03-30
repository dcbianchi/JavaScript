 //Exercicios do Modulo D
 function carregar(){
    var agora = new Date() //Instanciando Data na Variavel Agora
    var hora = agora.getHours() //capturando a hora do sistema pelo retorno da função getHours do objeto Agora
    var msg = document.getElementById('pHora')
    var foto = document.getElementById('imgCenterPage')

    //Usando a variavel hora como base, condicionamos o Paragrafo time
    if (hora >=0 && hora < 12) {
        //Bom dia
        msg.innerHTML = `Bom dia, agora são ${hora} hs`
        foto.src = `img/sunrise.jpg`
        document.body.style.background = '#e2cd2f'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML = `Boa tarde, agora são ${hora} hs`
        foto.src = `img/sunset.jpg`
        document.body.style.background = '#e2cd2f'
    } else {
        msg.innerHTML = `Boa noite, agora são ${hora} hs`
        foto.src = `img/night.jpg`
    }
 }