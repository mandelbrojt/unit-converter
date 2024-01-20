/*
Changes made from last commit:
1. Grouped conversion factors into a single object for better organization and readability.
2. Grouped DOM elements into a single object for better organization and readability.
3. Added comments for better understanding of the code.
*/

// Constants for unit conversion
const CONVERSION_FACTORS = {
    meterToFeet: 3.281,
    literToGallon: 0.264,
    kilogramToPound: 2.204
}

// DOM elements
const DOM_ELEMENTS = {
    conversionButton: document.getElementById("conversion-button"),
    inputElement: document.getElementById("input-number"),
    lengthDescription: document.getElementById("length-desc"),
    volumeDescription: document.getElementById("volume-desc"),
    massDescription: document.getElementById("mass-desc")
}

// Function to convert units
function convertUnits() {
    renderUnits(DOM_ELEMENTS.inputElement.value)
}

// Function to render units
function renderUnits(inputNum) {
    DOM_ELEMENTS.lengthDescription.textContent = `${inputNum} meter(s) = ${(inputNum * CONVERSION_FACTORS.meterToFeet).toFixed(3)} feet | ${inputNum} feet = ${(inputNum / CONVERSION_FACTORS.meterToFeet).toFixed(3)} meter(s)`
    DOM_ELEMENTS.volumeDescription.textContent = `${inputNum} liter(s) = ${(inputNum * CONVERSION_FACTORS.literToGallon).toFixed(3)} gallon(s) | ${inputNum} gallon(s) = ${(inputNum / CONVERSION_FACTORS.literToGallon).toFixed(3)} liter(s)`
    DOM_ELEMENTS.massDescription.textContent = `${inputNum} kilogram(s) = ${(inputNum * CONVERSION_FACTORS.kilogramToPound).toFixed(3)} pound(s) | ${inputNum} pound(s) = ${(inputNum / CONVERSION_FACTORS.kilogramToPound).toFixed(3)} kilogram(s)`
}

// Initial render
renderUnits(DOM_ELEMENTS.inputElement.value)

// Event listener for conversion button
DOM_ELEMENTS.conversionButton.addEventListener("click", convertUnits)
