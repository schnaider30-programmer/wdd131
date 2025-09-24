let year = new Date().getFullYear();
document.querySelector("#currentYear").innerHTML = year;
let modified = document.lastModified;
document.querySelector("#lastModified").innerHTML = "Last Modification: " + modified;

const windChill = document.querySelector("#windchill");
let temperature = 25;
let speed = 9;


function calculateWindChill(temp, windSpeed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
}
let computeWindChill;

if (temperature <= 10 && speed > 4.8) {
    computeWindChill = calculateWindChill(temperature, speed).toString() + ` °C`;
}
else {
    computeWindChill = "N/A";
}
console.log(computeWindChill);

windChill.textContent = `${computeWindChill}`;