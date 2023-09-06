function genT() {

    let nT = document.querySelector('input#cNt')
    let txtT = document.querySelector('select#sT')

    txtT.innerHTML = ``

    if (nT.value.length == 0){

        window.alert('Por Favor,  digite um numero!')

    }else {
        let n = Number(nT.value)
        let c = 1
        while (c <= 10) {

        let item = document.createElement('option')
        item.text = `${c} * ${n} = ${n*c}`
        
        txtT.appendChild(item)
        c++
        }

    }  
}
