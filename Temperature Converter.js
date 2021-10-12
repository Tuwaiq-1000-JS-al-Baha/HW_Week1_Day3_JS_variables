
//Convert it to fahrenheit
let celsius = Number(prompt('Enter a celsius'))
const fahrenheitInC = (celsius * 9 / 5) + 32;
console.log(`${celsius} °C is ${fahrenheitInC}°F`);


//Convert it to celsius
let fahrenheit = Number(prompt('Enter a fahrenheit'))
const celsiusInF = ((fahrenheit - 32)*5)/9;;
console.log(`${fahrenheit} °F is ${celsiusInF} °C`);