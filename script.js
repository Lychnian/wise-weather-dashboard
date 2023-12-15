// API Key
var apiKey = '&appid=93abf10815d5d5f5254148354eacc3c8';

// DOM Elements
var inputEl = document.querySelector('.input');
var searchBtnEl = document.querySelector('.search-button');
var citiesListEl = document.querySelector('.search-history-list');

// Function to perform the weather search
function searchWeather(cityName) {
    // Set the cityName in localStorage
    localStorage.setItem('cityNameStore', cityName);

    // Update the input field with the selected city name
    inputEl.value = cityName;

     // Trigger the search
    searchBtnEl.click();
}

// Event listener for the search history list items
$(".search-history-list").on('click', 'p', function () {
    var cityName = $(this).text();
    // Call the function to perform the weather search for the clicked city
    searchWeather(cityName);
});

// Event listener for search button
searchBtnEl.addEventListener('click', function (event) {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page

    // Get the city name from the input field
    var cityName = inputEl.value.trim();

    // Check if the user entered a city name
    if (cityName !== "") {
        // Set the cityName in localStorage
        localStorage.setItem('cityNameStore', cityName);
        $(".search-history-list").append("<p>" + cityName + "</p>");

// URL for current day parameters (city name + weather units of measurements)
var URLWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + '&units=imperial' + apiKey;

// URL for 5-days forecast parameters (city name + weather units of measurements)
var URLForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + '&units=imperial' + apiKey;
