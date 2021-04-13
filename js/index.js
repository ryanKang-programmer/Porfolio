const sections = document.querySelectorAll('section');
const navbar = document.querySelector('.navbar');
const toggleBtn = document.querySelector('.navbar_toggleBtn');
const navbar_logo = document.querySelector('.navbar_logo');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');
const intro = document.querySelector('#intro');
const navContainer = document.querySelector('.navContainer');
const navbarHeight = navbar.offsetHeight;
const preloader = document.querySelector('.preloader');

window.onload = () => {
    //preloader.fadeOut(1000); // set duration in brackets
    let isCount = 0;
	preloader.style.opacity = 1.0;
	let period = setInterval(function(){
		preloader.style.opacity = isCount;
		isCount -= 0.1;
	if(isCount < 0.1){
		preloader.parentElement.removeChild(preloader);
		clearInterval(period);
	}
	},100);
}

toggleBtn.addEventListener('click', () => {
    navContainer.classList.toggle('active');
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
    scroll.style.width = scrollPer + 'vw';
    const menus = Array.prototype.slice.call(menu.children);
    let index;

    for (let i = 0; i < navbarRange.length; i++) {
        console.log(navbarRange[i]);
        console.log(window.scrollY);
        if (navbarRange[i] >= window.scrollY + 30) {
            //menus[i].style.fontWeight = 'bold';
            //menus.slice(i,1).style.fontWeight = 'normal';
            index = i;
            break;
        }
    }
    console.log(index);
    for (let i = 0; i < menus.length; i++) {
        if (i == index) {
            menus[i].style.fontWeight = 'bold';
            menus[i].style.backgroundColor = 'orange';
        } else {
            menus[i].style.fontWeight = 'normal';
            menus[i].style.backgroundColor = 'transparent';
        }
    }
    if(navbarHeight < window.scrollY) {
        navbar.classList.add('top-fix');
    } else {
        navbar.classList.remove('top-fix');
    }
}, false);
