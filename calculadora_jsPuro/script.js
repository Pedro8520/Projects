var initial_zero =  new Boolean(true);
var total = '0';

function insert(num) {
    
    if (!initial_zero) {
        total += num;
    }
    else if (initial_zero && num != '0') {
        total = num;
        initial_zero = false;
    }
    else {
        total = num;
    }

    document.getElementById("resultado").innerHTML = total;
}

function clearResult() {
    initial_zero = true;
    total = '0';
    document.getElementById("resultado").innerHTML = total;
}

function delNumb() {

    if(total.length > 1 && !initial_zero) {
        total = total.slice(0, -1);
    }
    else if(total.length == 1 && !initial_zero) {
        total = '0'
        initial_zero = true;
    }
    document.getElementById("resultado").innerHTML = total;
}

function calcular() {
    let resultado = document.getElementById("resultado").innerHTML;
    if(resultado) {
        total = eval(resultado).toString();
        document.getElementById("resultado").innerHTML = total;
    }
}