let inputElem = document.querySelector('.input');
let maxLengthElem = document.querySelector('.maxLength');
let boxElem = document.querySelector('.box');


inputElem.addEventListener('keydown', function(){

    let maxLength = inputElem.getAttribute('maxLength');
    maxLengthElem.innerHTML = maxLength - inputElem.value.length 
})

boxElem.addEventListener('click', function(){
    boxElem.style.color = 'skyblue';
    document.querySelector('.border-right').style.backgroundColor = 'skyblue';
    inputElem.classList.add('focusInput');
})
