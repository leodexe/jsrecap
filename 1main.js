const h1t = document.getElementById('h1title');
const pdp = document.querySelector('.pollo');
const duo = document.querySelector('.duo');
const basicp = document.querySelector('.basicp');

pdp.classList.toggle('rojo');
duo.classList.toggle('verde');
//classList.add
//classList.remove
//classList.contains(returns true/false of value)
basicp.classList.toggle('rojo');
const diglett = document.createElement('img');
diglett.src = '/1img.jpg';
diglett.classList.add('digstyle')
document.body.appendChild(diglett);

const formBox = document.getElementById('formID');
formBox.addEventListener('click', forwardToSumButton);
const i1 = document.getElementById('input1');
const i2 = document.getElementById('input2');
const sumbutton = document.getElementById('sumbutton');

const rb = document.getElementById('result');
let i3;

function forwardToSumButton(event) {
    sumbutton.addEventListener('click', fsum);
    event.preventDefault();
}

function fsum() {
    console.log('Burrito rico');
    if (i1.value != "" && i2.value != "") {
        rb.value = parseInt(i1.value) + parseInt(i2.value);
    }
    if (isNaN(rb.value)) {
        i3 = parseInt(rb.value);
        rb.value = "Not a Number.";
    }
    rb.disabled = true;
}

const input1 = document.querySelector("#numero1"); 
const form = document.querySelector("#form"); 
const input2 = document.querySelector("#numero2"); 
const btn = document.querySelector("#btncalcular"); 
const suma = document.querySelector("#sumaid");

// const input1 = document.querySelector("#numero1"); 
// const form = document.querySelector("#form"); 
// const input2 = document.querySelector("#numero2"); 
// const btn = document.querySelector("#btncalcular"); 
// const suma = document.querySelector("#sumaid");

//addEventListener

// form.addEventListener("mouseover", enviarFormulario)

// function enviarFormulario(e){
//     e.preventDefault();

//     alert("virus")
// }

