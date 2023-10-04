
function convertTemperature() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const unitFrom = document.getElementById("unit-from").value;
    const unitTo = document.getElementById("unit-to").value;
    let result;

    if (unitFrom === "celsius" && unitTo === "fahrenheit") {
        result = (temperature * 9/5) + 32;
    } else if (unitFrom === "fahrenheit" && unitTo === "celsius") {
        result = (temperature - 32) * 5/9;
    } else if (unitFrom === "celsius" && unitTo === "kelvin") {
        result = temperature + 273.15;
    } else if (unitFrom === "kelvin" && unitTo === "celsius") {
        result = temperature - 273.15;
    } else if (unitFrom === "fahrenheit" && unitTo === "kelvin") {
        result = (temperature - 32) * 5/9 + 273.15;
    } else if (unitFrom === "kelvin" && unitTo === "fahrenheit") {
        result = (temperature - 273.15) * 9/5 + 32;
    } else {
        result = temperature;
    }

    document.getElementById("result").textContent = `Result: ${result.toFixed(2)} ${unitTo}`;
}
