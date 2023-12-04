function inserir(num) {
    let tela = document.querySelector(".tela");
    let ultimoCaractere = tela.innerHTML.slice(-1);

    // Verifica se o último caractere é um operador ou ponto e o novo caractere também é um operador ou ponto
    if ((["+","-","*","/","."].includes(ultimoCaractere) && ["+","-","*","/","."].includes(num)) ||
        (ultimoCaractere === "." && num === ".")) {
        // Se sim, não adiciona o novo caractere
        return;
    }

    // Adiciona o caractere normalmente
    tela.innerHTML += num;
}

function clean() {
    document.querySelector(".tela").innerHTML = "";
}

function back() {
    let tela = document.querySelector(".tela").innerHTML;
    document.querySelector(".tela").innerHTML = tela.substring(0, tela.length - 1);
}

function somar() {
    let tela = document.querySelector(".tela").innerHTML;
    if(tela) {
        document.querySelector(".tela").innerHTML = eval(tela);
    } else {
        document.querySelector(".tela").innerHTML = "nenhum comando..."
    }
}
