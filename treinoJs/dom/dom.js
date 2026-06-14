// var p = document.getElementsByTagName('p');

// for(var i = 0; i < p.length; i++){
//     p[i].innerHTML = "Manipulando o DOM com JavaScript " + i;
// }

// for(var i = 0; i < 10; i++){
//     p[0].innerHTML = p[0].innerHTML + i;
// }

/*
let elementos = document.getElementsByClassName('box');

let el = elementos[0];

el.style.width = '100px';
el.style.height = '100px';
el.style.backgroundColor = 'green';

for (let i = 0; i < elementos.length; i++){
    let el = elementos[i];

    el.style.width = '100px';
    el.style.height = '100px';
    el.style.backgroundColor = 'red';
    el.style.padding = '5px';
}
*/


// const els = document.querySelectorAll('.box .text');
// els[0].innerHTML = 'Olá Mundo'
/*
els[0].style.color = 'green';
els[1].style.color = 'yellow';
*/

// Animações

/*
const box = document.querySelectorAll('.box')[0];
setTimeout(() => {
    box.classList.add('animEsquerda')
}, 1000)
*/

/*
box.addEventListener('click', ()=>{
    box.classList.add('animEsquerda');
    box.innerHTML = 'OII GALERINHA DO JAVAScript';
})
*/
/*
var span = document.querySelector('.conteudo span');

span.addEventListener('click',()=>{
    let conteudo = document.querySelector('.conteudo p');

    if (conteudo.classList.contains('mostrar')){
        span.innerHTML = 'Ver mais!';
        conteudo.classList.remove('mostrar');
    }else{
        span.innerHTML = 'Ocultar'
        conteudo.classList.add('mostrar');
    }
})
*/

var spans = document.querySelectorAll('.conteudo span');

spans.forEach(span => {
    span.addEventListener('click', () => {
        let conteudo = span.closest('.conteudo').querySelector('p');

        if(conteudo.classList.contains('mostrar')){
            span.innerHTML = 'Ver mais!';
            conteudo.classList.remove('mostrar');
        }else{
            span.innerHTML = 'Ocultar';
            conteudo.classList.add('mostrar');
        }
    })
});