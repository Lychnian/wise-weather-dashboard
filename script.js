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