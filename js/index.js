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
    function verificar() {
        var data = new Date()
        var ano = data.getFullYear()
        var fano = document.getElementById('txtano')
        var res = document.querySelector('div#res')
    
    
        if (fano.value.length == 0 || Number(fano > ano)) {
            window.alert (`Erro - Verifique os dados e tente novamente!`)
        } else {
            var fsex = document.getElementsByName(`radsex`)
            var idade = ano - Number(fano.value)
            var genero = ``
            var img = document.createElement('img')
                img.setAttribute(`id`, `foto`)
            if (fsex[0].checked){
                genero = `Homem`
                if (idade >= 0 && idade < 10) {
                    //criança
                    img.setAttribute(`src`,`img/Baby.png`)
                } else if (idade < 21){
                    //jovem
                    img.setAttribute(`src`, `img/youngman.png`)
                } else if (idade <50){
                    //Adulto
                    img.setAttribute(`src`, `img/Adultman.png`)
                } else {
                    //idoso
                    img.setAttribute(`src`, `img/Oldman.png`)
                }
    
            } else if (fsex[1].checked){
                genero = `Mulher`
                if (idade >= 0 && idade < 10) {
                    //criança
                    img.setAttribute(`src`,`img/Baby.png`)
                } else if (idade < 21){
                    //jovem
                    img.setAttribute(`src`, `img/youngwoman.png`)
                } else if (idade <50){
                    //Adulto
                    img.setAttribute(`src`, `img/Adultwoman.png`)
                } else {
                    //idoso
                    img.setAttribute(`src`, `img/Oldwoman.png`)
                }
            }
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)
            
        }
        
     }
   
 }