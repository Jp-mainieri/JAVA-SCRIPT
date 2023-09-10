const finalTxt = document.querySelector('div#analiseTxt')
const numberList = document.querySelector('select#sN')
let numberInput = document.querySelector('input#cNt')
let num = []

function isNumber(n) {

    if (Number(n.value) >= 1 && Number(numberInput.value) <= 100) {
        return true
    }else {
        return false
    }

}

function inlist(n,l) {

    if (l.indexOf(n) != -1) {
        return true
    }else {
        return false
    }

}


function adicionar() {

    finalTxt.innerHTML = ``

    if (isNumber(numberInput) && !inlist(numberInput, num)) { // Não consegui fazer funcionar a analise da lista na função inlist.
        num.push(Number(numberInput.value))

        let item = document.createElement('option')
        item.text = `Valor ${numberInput.value} foi adicionado`
        numberList.appendChild(item)

    }else {
        window.alert('Insira um numero válido, ou um numero fora da lista')
    }
}

function finalizar() {
    finalTxt.innerHTML = ``
    if (num.length != 0) {
        let tot = num.length
        let maior = num[0]
        let menor = num[0]
        let soma = 0
        let media = 0

        for(let pos in num) {

            soma += num[pos]

            if (num[pos] > maior)
                maior = num[pos]
            if (num[pos] < menor)
                menor = num[pos]
        }
        media = soma / tot
    finalTxt.innerHTML += `<p>Ao todo temos ${tot} numeros cadastrados.</p>`
    finalTxt.innerHTML += `<p>O menor valor adicionado foi ${menor}.</p>`
    finalTxt.innerHTML += `<p>O maior valor adicionado foi ${maior}.</p>`
    finalTxt.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`
    finalTxt.innerHTML += `<p>A media dos valores digitados é ${media}.</p>`
    }else {
        window.alert('Adicione Valores antes de finalizar')
    }
}

