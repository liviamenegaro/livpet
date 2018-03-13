let button1 = document.querySelector('.btn-primary');
let button2 = document.querySelector('.btn-default');
let menu = document.querySelector('.navbar-toggle');
let estado = 'off';
let container = document.querySelector('div.container');
let navbar = document.querySelector('#myNavbar');
let ul = document.querySelector('.navbar-nav');
menu.addEventListener('click', function() {
    
    if (estado === 'off') {
        container.textContent = "";
        container.textContent = menu.textContent;
        console.log('alo celso');
    }
    console.log('maoe');
})

// button1.addEventListener('click', function(){
//     let url_atual = window.location.href;
//     url_atual= url_atual.replace('inicio.html', 'registro.html');    
//     window.location.href = url_atual;
// })

// button2.addEventListener('click', function(){
//     let url_atual = window.location.href;
//     url_atual= url_atual.replace('inicio.html', 'escolha.html');
//     window.location.href = url_atual;
// })

