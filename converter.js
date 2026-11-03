const meter_to_feet = 3.28;
const liter_to_gallons = 0.26;
const kg_to_pounds = 2.2;

var lengthEl = document.getElementById("length-el")
var volumeEl = document.getElementById("volume-el")
var massEl = document.getElementById("mass-el")

var inputEl = document.getElementById("input-el")
var convert_btn = document.getElementById("btn")

convert_btn.addEventListener("click", function(){
    if(inputEl.value == ""){
        alert("Empty Input!")
    }
    else{
        var value = Number(inputEl.value)

        lengthEl.textContent = `${value} meters = ${(value * meter_to_feet).toFixed(2)} feet
        | ${value} feet = ${(value / meter_to_feet).toFixed(2)} meters`

        volumeEl.textContent = `${value} liter = ${(value * liter_to_gallons).toFixed(2)} gallons
        | ${value} gallons = ${(value / liter_to_gallons).toFixed(2)} liters`

        massEl.textContent = `${value} kg = ${(value * kg_to_pounds).toFixed(2)} pounds
        | ${value} pounds = ${(value / kg_to_pounds).toFixed(2)} kg`
    }
})

