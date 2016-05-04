// window.onload = function () {
// 	var formElement = document.getElementById('form');
// 	var inputElement = document.getElementById('input');

// 	formElement.onsubmit = function (event) {
// 		event.preventDefault();
// 		var cityName = inputElement.value;
// 		getWeather(cityName);
// 	}

$(function () {
    $('form').on('submit', function (event) {
        event.preventDefault();
    
    var userInput = $('input').val();
    var cities = userInput.split(',');
    
    for(var i = 0; i < cities.length; i++){
        console.log(cities[i]);
       getWeather(cities[i]);
    }
    });
});

function printWeather(response) {
    console.log(response);
    
    var stringresponse = JSON.stringify(response);
    document.write(response.main.temp );
    //document.write(response.main.temp_min);
  //var response = JSON.parse(e.target.responseText);

//   var node = document.createElement("P");
//      var currentWeather = document.createTextNode(response.main.temp)
//      node.appendChild(currentWeather);

}

function getWeather(cityName) {
  var url = 'https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather' +
  '?appid=c2f2d170f6f6fc336058e9851edb828c' +
  '&q=' + cityName +
  '&units=imperial';
  
  $.get(url, printWeather);
}


