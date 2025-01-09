const numToConvert = document.getElementById("num-to-convert");
const convertBtn = document.getElementById("convert-btn");
const metersFeet = document.getElementById("meters-feet");
const litersGallons = document.getElementById("liters-gallons");
const kilogramsPounds = document.getElementById("kilograms-pounds");

function convertMeasurement(convertTo) {
  function inputElValue(inputEl) {
    return (parseFloat(inputEl.value) * convertTo).toFixed(4);
  }
  return inputElValue;
}

const ratioFeetToMeters = 1 / 3.281;
const ratioMetersToFeet = 1 * 3.281;
const ratioLitersToGallons = 1 * 0.264;
const ratioGallonsToLiters = 1 / 0.264;
const ratioPoundsToKilograms = 1 / 2.204;
const ratioKilogramsToPounds = 1 * 2.204;

const convertFromFeetToMeters = convertMeasurement(ratioFeetToMeters);
const convertFromMetersToFeet = convertMeasurement(ratioMetersToFeet);
const convertFromGallonsToLiters = convertMeasurement(ratioGallonsToLiters);
const convertFromLitersToGallons = convertMeasurement(ratioLitersToGallons);
const convertFromPoundsToKilos = convertMeasurement(ratioPoundsToKilograms);
const convertFromKilosToPounds = convertMeasurement(ratioKilogramsToPounds);

function renderLength(inputEl) {
  return `${inputEl.value} meters = ${convertFromMetersToFeet(inputEl)} feet | ${inputEl.value} feet = ${convertFromFeetToMeters(inputEl)} meters`;
}
function renderVolume(inputEl) {
  return `${inputEl.value} liters = ${convertFromLitersToGallons(inputEl)} gallons | ${inputEl.value} gallons = ${convertFromGallonsToLiters(inputEl)} meters`;
}
function renderMass(inputEl) {
  return `${inputEl.value} kilos = ${convertFromKilosToPounds(inputEl)} pounds | ${inputEl.value} pounds = ${convertFromPoundsToKilos(inputEl)} kilos`;
}

function render(inputEl) {
  metersFeet.innerText = renderLength(inputEl);
  litersGallons.innerText = renderVolume(inputEl);
  kilogramsPounds.innerText = renderMass(inputEl);
  return "ok";
}

convertBtn.addEventListener("click", () => render(numToConvert));
