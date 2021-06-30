var phone = document.getElementsByClassName("barra-ok");

//phone.style.background = "blue";



function cell() {
    var t = [phone[0].style.background = "blue", phone[1].style.background = "none", phone[2].style.background = "none"]

}

function cell_balao_on() {

    document.getElementById('balao').style.display = "block"

}

function cell_balao_off() {

    document.getElementById('balao').style.display = "none"

}

function pc() {
    var t = [phone[0].style.background = "none", phone[1].style.background = "blue", phone[2].style.background = "none"]

}

function cell_balao_on1() {

    document.getElementById('balao1').style.display = "block"

}

function cell_balao_off1() {

    document.getElementById('balao1').style.display = "none"

}

function web() {
    var t = [phone[0].style.background = "none", phone[1].style.background = "none", phone[2].style.background = "blue"]

}

function cell_balao_on2() {

    document.getElementById('balao2').style.display = "block"

}

function cell_balao_off2() {

    document.getElementById('balao2').style.display = "none"

}

// funções das escolhas de contatos 

function email() {
    var t = [phone[3].style.background = "blue", phone[4].style.background = "none", phone[5].style.background = "none", phone[6].style.background = "none"]
    if (t[0] == "blue") {

        document.getElementById('inst ').style.display = "none";


    }
}

function inst() {
    var t = [phone[3].style.background = "none", phone[4].style.background = "blue", phone[5].style.background = "none", phone[6].style.background = "none"]
    if (t[1] == "blue") {

        document.getElementById('inst ').style.display = "block";


    }
}

function telegram() {
    var t = [phone[3].style.background = "none", phone[4].style.background = "none", phone[5].style.background = "blue", phone[6].style.background = "none"]

    if (t[2] == "blue") {

        document.getElementById('inst ').style.display = "none";


    }

}

function wapp() {
    var t = [phone[3].style.background = "none", phone[4].style.background = "none", phone[5].style.background = "none", phone[6].style.background = "blue"]

    if (t[3] == "blue") {

        document.getElementById('inst ').style.display = "none";


    }
}