function mostrar_site() {
    tutorial = document.getElementById('id_tutoriais ')
    site = document.getElementById('id_site ')
    portfolio = document.getElementById('id_portfolio ')
    inicio = document.getElementById('inicio')

    site.style.display = "block";
    tutorial.style.display = "none";
    portfolio.style.display = "none";
    inicio.style.display = "none";

}

function mostrar_tutoriais() {

    tutorial = document.getElementById('id_tutoriais ')
    site = document.getElementById('id_site ')
    portfolio = document.getElementById('id_portfolio ')
    iniciot = document.getElementById('inicio')


    tutorial.style.display = "block";
    site.style.display = "none";
    portfolio.style.display = "none";
    iniciot.style.display = "none";

}

function mostrar_portfolio() {

    tutorial = document.getElementById('id_tutoriais ')
    site = document.getElementById('id_site ')
    portfolio = document.getElementById('id_portfolio ')
    inicio = document.getElementById('inicio')

    portfolio.style.display = "block";
    site.style.display = "none";
    tutorial.style.display = "none";
    inicio.style.display = "none";
}

function pet_monitor() {
    pet_ = document.getElementById('portfolio_pet ')
    if (pet_.style.display === "none") {
        pet_.style.display = "block"
    } else {
        pet_.style.display = "none"
    }

}