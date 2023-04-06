//Modulo E do Curso em Video de JavaScript totalmente patrocinado pelo Google.
// Professor Gustavo Guanabara
// Tema do modulo: Repetições em JavaScript

// Exercici 16 - Super Contador
function contar(){ 
    // Capturando os campos HTML 
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pass = document.getElementById('txtp')
    let res = document.getElementById('res')

    //Checagem de dados.
    if (ini.value.length==0 || fim.value.length==0 || pass.value.length==0){
        window.alert('[Erro] Faltam dados')
        } 
        else {
            res.innerHTML = 'Contando: ' //Alterando o conteudo da Div
            let i = Number(ini.value)  // Convertendo os tipos das variaveis em numeros
            let f = Number(fim.value)
            let p = Number(pass.value)

            // Contagem crescente
            if (i < f) {
                for(let c = i; c <= f; c += p){
                    res.innerHTML += ` ${c} \u{1F449}`
                }
            }
            else {
                // Contagem regressiva
                for (let c = i; c>= f; c -= p){
                    res.innerHTML += ` ${c} \u{1f449}`
                }
            }
    }
    //chequered flag emoji
    res.innerHTML += `\u{1f3c1}`
}

// Exercicio 17 