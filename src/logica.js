function mostrar_tutoriais() {

    tutorial = document.getElementById('id_tutoriais')
    site = document.getElementById('id_site')
    portfolio = document.getElementById('id_portfolio')


    tutorial.style.display = "block";
    site.style.display = "none";
    portfolio.style.display = "none";

}

function mostrar_site() {
    tutorial = document.getElementById('id_tutoriais')
    site = document.getElementById('id_site')
    portfolio = document.getElementById('id_portfolio')

    site.style.display = "block";
    tutorial.style.display = "none";
    portfolio.style.display = "none";
}

function mostrar_portfolio() {

    tutorial = document.getElementById('id_tutoriais')
    site = document.getElementById('id_site')
    portfolio = document.getElementById('id_portfolio')

    portfolio.style.display = "block";
    site.style.display = "none";
    tutorial.style.display = "none";

}