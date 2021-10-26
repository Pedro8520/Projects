const calendar = document.querySelector("#calendario");

let dataAtual = new Date();
var dataAtualizada = new Date();

function checarMes(data) {
    switch(data.getMonth()) {
        case 0:
            document.getElementById("mes").innerHTML = "Janeiro/" + dataAtualizada.getFullYear();
            break;
        case 1:
            document.getElementById("mes").innerHTML = "Fevereiro/" + dataAtualizada.getFullYear();
            break;
        case 2:
            document.getElementById("mes").innerHTML = "Março/" + dataAtualizada.getFullYear();
            break;
        case 3:
            document.getElementById("mes").innerHTML = "Abril/" + dataAtualizada.getFullYear();
            break;
        case 4:
            document.getElementById("mes").innerHTML = "Maio/" + dataAtualizada.getFullYear();
            break;
        case 5:
            document.getElementById("mes").innerHTML = "Junho/" + dataAtualizada.getFullYear();
            break;
        case 6:
            document.getElementById("mes").innerHTML = "Julho/" + dataAtualizada.getFullYear();
            break;
        case 7:
            document.getElementById("mes").innerHTML = "Agosto/" + dataAtualizada.getFullYear();
            break;
        case 8:
            document.getElementById("mes").innerHTML = "Setembro/" + dataAtualizada.getFullYear();
            break;
        case 9:
            document.getElementById("mes").innerHTML = "Outubro/" + dataAtualizada.getFullYear();
            break;
        case 10:
            document.getElementById("mes").innerHTML = "Novembro/" + dataAtualizada.getFullYear();
            break;
        default:
            document.getElementById("mes").innerHTML = "Dezembro/" + dataAtualizada.getFullYear();
            break;
    }
}

checarMes(dataAtual);
let number_of_days = 0;

function numberDaysMonth(year, month) {
    return number_of_days = new Date(year, month+1, 0).getDate();
}

numberDaysMonth(dataAtual.getFullYear(), dataAtual.getMonth());

function changeMonth(number) {
    number = parseInt(number);
    let novo_mes = dataAtualizada.getMonth() + number

    if(dataAtualizada.getDate == 11 && number == 1) {
        dataAtualizada.setMonth(0);
    }
    else if(dataAtualizada.getDate == 0 && number == -1) {
        dataAtualizada.setMonth(11);
    }
    else {
        dataAtualizada.setMonth(novo_mes);
    }

    checarMes(dataAtualizada);
    numberDaysMonth(dataAtualizada.getFullYear(), dataAtualizada.getMonth());
    var div = document.getElementById('day');
    while(calendar.lastChild.nodeName == "DIV") {
        calendar.removeChild(calendar.lastChild);
    }
    calendarBuilding();
}

calendarBuilding();

function calendarBuilding() {

    for (let day = 1; day <= number_of_days; day++) {


        calendar.insertAdjacentHTML("beforeend", `<div class="day" id="day">${day}</div>`);
    }

}