const convertToCelsius = function (fahrenheit) {
  return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
  return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
};
//convert celcius to farenheit and vice versa
//conversion from celcius to fahreheit is (0°C × 9/5) + 32 = 32°F
//make it rounded so it's only one decimal place (math.round and the  * 10 / 10 makes it one decimal place)

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
