let sections = document.querySelectorAll('main section'); //pega todas as sections dentro de main

document.querySelector('.about').style.display = 'flex';
document.querySelector('.about-project').style.display = 'none';
document.querySelector('.thanks').style.display = 'none';

function changePage(page, event) {
    event.preventDefault(); //a tag a com href ja leva para outra pagina antes de executar a função
    //entao uso # no href e preventDefault() para que previna contra esse tipo de evento

    switch (page) {
        case 'about':
            document.querySelector('.about').style.display = 'flex';
            document.querySelector('.about-project').style.display = 'none';
            document.querySelector('.thanks').style.display = 'none';
            break;
        case 'project':
            document.querySelector('.about-project').style.display = 'flex';
            document.querySelector('.about').style.display = 'none';
            document.querySelector('.thanks').style.display = 'none';
            break;
        case 'thanks':
            document.querySelector('.thanks').style.display = 'flex';
            document.querySelector('.about-project').style.display = 'none';
            document.querySelector('.about').style.display = 'none';
            break;
        default:
            alert('Página não encontrada');
    }
}