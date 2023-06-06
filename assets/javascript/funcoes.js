
function alterarQtd (produto, acao) {
    const qtd = document.querySelector("#qtd_" + produto);
    const valor = document.querySelector("#valor_" + produto);
    const total = document.querySelector("#total_" + produto);

    if (acao == '-' && qtd.innerHTML == 0) {
        alert('A quantidade não pode ser menor que 0')
    } else {
        acao == '+' ? qtd.innerHTML++ : qtd.innerHTML--
        const valorTotal = qtd.innerHTML * somenteNumeros(valor.innerHTML)
        total.innerHTML = formatarValor(valorTotal)
        soma()
    }
}

function soma() {
    let soma = 0 

    for(let i = 1; i < 4; i++) {
        let numero = somenteNumeros(document.querySelector("#total_" + i).innerHTML)
        soma += Number(numero);
    }

    document.querySelector('#subTotal').innerHTML = formatarValor(soma)
}

function somenteNumeros(n) {
    return n.replace(/\D/g, '')
}

function formatarValor(n) {
    return 'R$ ' + n.toLocaleString('pt-BR')
}