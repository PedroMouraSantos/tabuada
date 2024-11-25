function calcular() {
    var num = document.getElementById('txtnum')
    var res = document.getElementById('res')
    var loading = document.getElementById('loading')


    res.innerHTML = ""

    if (num.value.length == 0) {
        window.alert('[ERRO] Faltam Dados')
    } else {
        // Exibe o loading
        loading.style.display = 'block'

        setTimeout(function() {
            res.innerHTML = "Tabuada:<br>" 
            var t = Number(num.value)

            for (let c = 1; c <= 10; c++) { 
                res.innerHTML += `${t} x ${c} = ${t * c} <br>`
            }

            // Oculta o loading após o cálculo
            loading.style.display = 'none'}
            , 1000)
    }
}
