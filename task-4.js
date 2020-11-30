let counterValue = 0

let value = document.getElementById('value')
let btnIncrement = document.querySelector('button[data-action = "increment"]')
let btnDecrement = document.querySelector('button[data-action = "decrement"]')


function increment(params) { 
    counterValue ++
    value.textContent = counterValue
};

function decrement(params) {
    counterValue --
    value.textContent = counterValue
 };

btnIncrement.addEventListener('click',increment)
btnDecrement.addEventListener('click', decrement)