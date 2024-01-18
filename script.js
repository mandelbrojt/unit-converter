const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204

const conversionButton = document.getElementById("conversion-button")
const inputElement = document.getElementById("input-number")

const lengthDescription = document.getElementById("length-desc")
const volumeDescription = document.getElementById("volume-desc")
const massDescription = document.getElementById("mass-desc")

function convertUnits() {
    renderUnits(inputElement.value)
}

function renderUnits(inputNum) {
    lengthDescription.textContent = `${inputNum} meter(s) = ${(inputNum * meterToFeet).toFixed(3)} feet | ${inputNum} feet = ${(inputNum / meterToFeet).toFixed(3)} meter(s)`
    volumeDescription.textContent = `${inputNum} liter(s) = ${(inputNum * literToGallon).toFixed(3)} gallon(s) | ${inputNum} gallon(s) = ${(inputNum / literToGallon).toFixed(3)} liter(s)`
    massDescription.textContent = `${inputNum} kilogram(s) = ${(inputNum * kilogramToPound).toFixed(3)} pound(s) | ${inputNum} pound(s) = ${(inputNum / kilogramToPound).toFixed(3)} kilogram(s)`
}

renderUnits(inputElement.value)

conversionButton.addEventListener("click", convertUnits)