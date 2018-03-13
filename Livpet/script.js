// GERAL

let menu = document.querySelector('.navbar-toggle');
let menu1 = document.querySelector('.menu1');

menu.addEventListener('click', function () {
    menu1.style.display = "block";
})

// REGISTRO

let input = document.querySelector('.upload');
let foto = document.querySelector('uploadDiv');

console.log(input.files[0].name);