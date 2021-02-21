const sections = document.querySelectorAll('section');
const navbar = document.querySelector('.navbar');
const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');
const intro = document.querySelector('#intro');
const navbarHeight = navbar.offsetHeight;

window.onload = () => {
}

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})

window.addEventListener('scroll', function(e) {
    let navbarRange = [];
    let navbarSum = 0;
    for (let i = 0; i < sections.length; i++) {
        navbarSum += sections[i].offsetHeight;
        navbarRange.push(navbarSum);
    }

    var body = document.body,
    html = document.documentElement;

    var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

    let scrollPer = window.scrollY/(height-window.innerHeight) * 100

    const scroll = document.querySelector('#scroll');
    scroll.style.height = scrollPer + 'vh';
    const menus = Array.prototype.slice.call(menu.children);

    for (let i = 0; i < menus.length; i++) {
        if (navbarRange[i] >= window.scrollY + 30) {
            //menus[i].style.fontWeight = 'bold';
            menus.slice(i).forEach(menu => {
                //console.log(menu);
                menu.style.fontWeight = 'normal';
            })
            menus[i].style.fontWeight = 'bold';
            //menus.slice(i,1).style.fontWeight = 'normal';
            break;
        }
    }
    if(navbarHeight < window.scrollY) {
        navbar.classList.add('fix');
    } else {
        navbar.classList.remove('fix');
    }
})