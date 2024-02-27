let side_btn = document.querySelector('.side-bar-expand');
let nav_bar = document.querySelector('.fa-bars');
let rev_btn = document.querySelector('.fa-remove');
let color_btn = document.querySelector('.part-2');


function showSidebar() {
    side_btn.style.left = '0px';
    color_btn.style.opacity = '0.8';
}

function hideSidebar() {
    side_btn.style.left = '-300px';
    color_btn.style.opacity = '1';
}

nav_bar.addEventListener('click', () => {
    showSidebar();
});

rev_btn.addEventListener('click', () => {
    hideSidebar();
});

window.addEventListener('resize', () => {
   
    if (window.innerWidth > 992) {
        showSidebar();
    } else {
        hideSidebar();
    }
});
