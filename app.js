function convertCelsiusToFahrenheit() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');

    const celsiusValue = parseFloat(celsiusInput.value);

    const fahrenheitValue = (celsiusValue * 1.8) + 32;

    fahrenheitInput.value = fahrenheitValue.toFixed(2);
}

function convertCelsiusToKelvin() {
    const celsiusInput = document.getElementById('celsius');
    const kelvinInput =  document.getElementById('kelvin');

    const celsiusValue =  parseFloat(celsiusInput.value);

    const kelvinValue = celsiusValue + 273.15;

    kelvinInput.value =  kelvinValue.toFixed(2);
}

function convertFahrenheitToCelsius() {
    const fahrenheitInput = document.getElementById('fahrenheit');
    const celsiusInput = document.getElementById('celsius');

    const fahrenheitValue = parseFloat(fahrenheitInput.value);

    const celsiusValue = (fahrenheitValue - 32) * 0.556;

    celsiusInput.value = celsiusValue.toFixed(2);
}

function convertFahrenheitToKelvin() {
    const fahrenheitInput = document.getElementById('fahrenheit');
    const kelvinInput = document.getElementById('kelvin');

    const fahrenheitValue = parseFloat(fahrenheitInput.value);

    const kelvinValue = (fahrenheitValue - 32) * 0.556;
    
    kelvinInput.value = kelvinValue.toFixed(2);
}

