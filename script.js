const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

const form = document.querySelector('#form');

 

// form.addEventListener('submit',sumarInputsValues);

// function sumarInputsValues(event){
//     // console.log({event});
//     event.preventDefault();
//     const sumaInputs = input1.value + input2.value
//     pResult.innerText = "Resultado: " + sumaInputs

// }

document.addEventListener("click", function(){
    // event.preventDefault();
    const sumaInputs = input1.value + input2.value
    pResult.innerHTML = "Resultado: " + sumaInputs;
  });
