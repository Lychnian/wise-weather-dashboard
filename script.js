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

// Current day forecast function
$.ajax({
    url: URLWeather,
    method: "GET"
})
    .then(function (response) {
        // Add weather info to page
        $('.city').html("<h2>" + response.name + "</h2>");
        $('.weather-icon').html("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png' >");
        $('.wind').text("Wind Speed: " + response.wind.speed + " MPH");
        $('.humidity').text("Humidity: " + response.main.humidity + "%");
        $(".temperature").text("Temperature: " + response.main.temp + " F");
});

// 5 day forecast function
$.ajax({
    url: URLForecast,
    method: "GET"
})
.then(function (response) {
    var dayOne = moment(response.list[0].dt_txt).format("ddd, MMM D");
    // Adds day 1 data to page
    $(".day-one-temperature").text("Temp: " + response.list[0].main.temp + " F");
    $(".day-one-date").html("<h6>" + dayOne + "</h6>");
    $(".day-one-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
    $(".day-one-humidity").text("Humidity: " + response.list[0].main.humidity + "%");
    $(".day-one-wind").text("Wind Speed: " + response.list[8].wind.speed + " MPH"); 
    