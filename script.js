

const h1 = document.querySelector('h1')
/*
const p = document.querySelector('p')
const parrafito = document.querySelector('.parrafo')
const pid = document.getElementById('pid')
const input = document.querySelector('input')

console.log(input.value)
console.log(h1,p,parrafito,pid,input)

h1.innerText= 'HOLA JOSE CARLOS. <BR> JEJHE'
h1.innerHTML= 'HOLA JOSE CARLOS. <BR> JEJHE'

h1.getAttribute('PANTALLA')
console.log(h1.getAttribute('class'))
h1.setAttribute('class','rojo')
console.log(h1.getAttribute('class'))

h1.classList.add('rojo');
h1.classList.add('verde');

input.value= 'PEPE'

const img = document.createElement('img');
img.setAttribute('src',
'https://img.freepik.com/free-photo/portrait-man-posing-with-universe-projection-texture_23-2149581318.jpg?w=1380&t=st=1680467554~exp=1680468154~hmac=604abee138aa3effb08517c357bd8f4475be8ccf777fb6e31c7a103b10d00c51')


pid.append(img);

*/

const calculo1 = document.querySelector('#calculo1');
const calculo2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');
/*
form.addEventListener('submit',sumarInputValues);

function sumarInputValues(event){
    console.log({event})
    event.preventDefault();
    let total = calculo1.value + calculo2.value;
    pResult.innerText = "El resultado es : " + total;
}*/

btn.addEventListener('click',sumarInputValues);

function sumarInputValues(event){
   // console.log({event})
    //event.preventDefault();
    let total = calculo1.value + calculo2.value;
    pResult.innerText = "El resultado es : " + total;
}