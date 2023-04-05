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