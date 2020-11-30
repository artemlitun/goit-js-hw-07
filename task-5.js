let inputName = document.getElementById("name-input")

let outputName = document.getElementById("name-output")

inputName.addEventListener('input', (event) => {
  outputName.textContent = event.target.value
  if (event.target.value === '') {
    outputName.textContent = 'незнакомец'
  }
})