let button1 = document.querySelector('.btn-primary');
let button2 = document.querySelector('.btn-default');
let menu = document.querySelector('navbar-toogle');

menu.addEventListener('click', function() {
    
})

button1.addEventListener('click', function(){
    let url_atual = window.location.href;
    url_atual= url_atual.replace('inicio.html', 'registro.html');
    window.location.href = url_atual;
})

button2.addEventListener('click', function(){
    let url_atual = window.location.href;
    url_atual= url_atual.replace('inicio.html', 'escolha.html');
    window.location.href = url_atual;
})

