//Modulo E do Curso em Video de JavaScript totalmente patrocinado pelo Google.
// Professor Gustavo Guanabara
// Tema do modulo: Repetições em JavaScript

// Exercici 16 - Contagem



function contar(){
    var ini = document.getElementById('sta')
    var fim = document.getElementById('end')
    var pass = document.getElementById('pass')
    var contage = document.getElementById('contagem')
    var txt = document.getElementById('txt')
    if (ini == 0 || fim ==0 || pass == 0) {
        txt.innerHTML = 'impossivel contar, verifique os dados'
    } else if (inicio < fim) {
        var c = pass
        for(c; c >= fim; c++) {
            console.log(`${c}`)
        }
    } else if (fim > inicio) {
        var c = pass
        for (c; fim >= c; c--){
            console.log(`${c}`)
        }
    }
}