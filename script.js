document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.getElementById("convert");
    const celsiusInput = document.getElementById("celsius");
    const resultOutput = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            resultOutput.textContent = `${celsius} Celsius = ${fahrenheit.toFixed(2)} Fahrenheit`;
        } else {
            resultOutput.textContent = "Please enter a valid temperature in Celsius.";
        }
    });
});
