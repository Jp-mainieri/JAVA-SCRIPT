function count() {
    let cIn =  document.querySelector('input#cIni')
    let cFn = document.querySelector('input#cFim')
    let cPn = document.querySelector('input#cPas')
    let sF = document.querySelector('div#cPrep')

    let i = Number(cIn.value)
        let f = Number(cFn.value)
        let p = Number(cPn.value)

    sF.innerHTML = ''

    if (cIn.value.length == 0 || cFn.value.length == 0 || cPn.value.lenght == 0) {
        
        sF.innerHTML = `[Erro], Faltam dados!`

    }else if (i < f){
        
        for(let c = i; c <= f; c += p) {
             sF.innerHTML += `${c} ->`
        }
        sF.innerHTML += `[FIM]`
    }else {
        let i = Number(cIn.value)
        let f = Number(cFn.value)
        let p = Number(cPn.value)

        for(let c = i; c >= f; c -= p) {
             sF.innerHTML += `${c} ->`
        }
        sF.innerHTML += `[FIM]`
    }
}
