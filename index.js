const modeBtn = document.getElementById("mode-btn")
const numToConvert = document.getElementById("num-to-convert");
const convertBtn = document.getElementById("convert-btn");
const metersFeet = document.getElementById("meters-feet");
const litersGallons = document.getElementById("liters-gallons");
const kilogramsPounds = document.getElementById("kilograms-pounds");
const resultsBackground = document.getElementById("results-section")

let currentTheme = "light"

function convertMeasurement(convertTo) {
  function inputElValue(num) {
    return (parseFloat(num) * convertTo).toFixed(3);
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
  return `${num} liters = ${convertFromLitersToGallons(num)} gallons | ${num} gallons = ${convertFromGallonsToLiters(num)} liters`;
}
function renderMass(num) {
  return `${num} kilograms = ${convertFromKilosToPounds(num)} pounds | ${num} pounds = ${convertFromPoundsToKilos(num)} kilograms`;
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

function switchTheme() {
  if (currentTheme == "light") {
    document.querySelectorAll("div.light-theme").forEach(el => toDarkTheme(el))
    document.querySelectorAll("h2.light-label").forEach(el => toDarkLabel(el))
    document.querySelectorAll("div.light-theme-background").forEach(el => toDarkBackground(el))
    modeBtn.innerText = "Light mode"
    currentTheme = "dark"
  } else {
    document.querySelectorAll("div.dark-theme").forEach(el => toLightTheme(el))
    document.querySelectorAll("h2.dark-label").forEach(el => toLightLabel(el))
    document.querySelectorAll("div.dark-theme-background").forEach(el => toLightBackground(el))
    modeBtn.innerText = "Dark mode"
    currentTheme = "light"
  }
}

function toDarkLabel(el) {
  el.classList.add("dark-label")
  el.classList.remove("light-label")
}

function toLightLabel(el) {
  el.classList.add("light-label")
  el.classList.remove("dark-label")
}

function toDarkTheme(el) {
  el.classList.add("dark-theme")
  el.classList.remove("light-theme")
}

function toDarkBackground (el) {
  el.classList.add("dark-theme-background")
  el.classList.remove("light-theme-background")
}

function toLightTheme(el) {
  el.classList.add("light-theme")
  el.classList.remove("dark-theme")
}

function toLightBackground(el) {
  el.classList.add("light-theme-background")
  el.classList.remove("dark-theme-background")
}

convertBtn.addEventListener("click", () => render(numToConvert));

modeBtn.addEventListener("click", () => switchTheme())
