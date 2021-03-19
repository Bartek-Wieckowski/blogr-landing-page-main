const menu = document.querySelector('.nav__list');
const ham = document.querySelector('.ham');
const xIcon = document.querySelector('.xIcon');
const menuIcon = document.querySelector('.menuIcon');   

ham.addEventListener('click', toggleMenu);

menu.classList.contains('showMenu');

function toggleMenu(){
    if(menu.classList.contains('showMenu')){
        menu.classList.remove('showMenu');
        xIcon.style.display = 'none';
        menuIcon.style.display = 'block';
    }else{
        menu.classList.add('showMenu');
        xIcon.style.display = 'block';
        menuIcon.style.display = 'none';
    }
}







const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(
    function(nav__link){
        nav__link.addEventListener('click', toggleMenu)
    }
);



// function linkAction(){
//     navLink.forEach(n => n.classList.remove('active'));
//     this.classList.add('active');
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))