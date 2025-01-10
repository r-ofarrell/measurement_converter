const numToConvert = document.getElementById("num-to-convert");
const convertBtn = document.getElementById("convert-btn");
const metersFeet = document.getElementById("meters-feet");
const litersGallons = document.getElementById("liters-gallons");
const kilogramsPounds = document.getElementById("kilograms-pounds");

function convertMeasurement(convertTo) {
  function inputElValue(num) {
    return (parseFloat(num) * convertTo).toFixed(2);
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

function renderLength(num) {
  return `${num} meters = ${convertFromMetersToFeet(num)} feet | ${num} feet = ${convertFromFeetToMeters(num)} meters`;
}
function renderVolume(num) {
  return `${num} liters = ${convertFromLitersToGallons(num)} gallons | ${num} gallons = ${convertFromGallonsToLiters(num)} meters`;
}
function renderMass(num) {
  return `${num} kilos = ${convertFromKilosToPounds(num)} pounds | ${num} pounds = ${convertFromPoundsToKilos(num)} kilos`;
}

function render(inputEl) {
  if (inputEl.value === "" || isNaN(inputEl.value)) {
    metersFeet.innerText = renderLength(0);
    litersGallons.innerText = renderVolume(0);
    kilogramsPounds.innerText = renderMass(0);
  } else {
    metersFeet.innerText = renderLength(inputEl.value);
    litersGallons.innerText = renderVolume(inputEl.value);
    kilogramsPounds.innerText = renderMass(inputEl.value);
  }
  return "ok";
}

convertBtn.addEventListener("click", () => render(numToConvert));
