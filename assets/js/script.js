// var date = moment().format('dddd, MMMM Do YYYY')



// $('.button').on("click", function (event) {
// 	event.preventDefault();
// 	city = $(this).parent('.btnPar').siblings('.textVal').val().trim();
// 	if (city === "") {
// 		return;
// 	};
// 	cityHist.push(city);

// 	localStorage.setItem('city', JSON.stringify(cityHist));



// function getWeather() {
//     var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city}&units=imperial&appid=3e7100d27d3c8f3ba457fb04f9abe4e1";

//     $(today).empty();



//     function(response) {
//         $(".searchedName").text(response.name)
//         $(".currentDate").text(date);
//     }
// }

// var getWeather = function(cityWeather) {
    // var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=3e7100d27d3c8f3ba457fb04f9abe4e1";
// }

// fetch(apiUrl).then(function(response) {

//     if (response.ok) {
//         response.json().then(function(data) 
//     }
// })

// $('search').on("click", function (event) {
    
// })



//     });
//     }
// }

var getCityName = function() {
    
    var queryString = document.location.search;
    var cityName = queryString.split("=")[1];
  
    if (cityName) {
      
      repoNameEl.textContent = cityName;
  
      getCityWeather(cityName);
    } else {
      
    }
  };
  
  var getCityWeather = function(weather) {
   
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=3e7100d27d3c8f3ba457fb04f9abe4e1";
  
    fetch(apiUrl).then(function(response) {
    
      if (response.ok) {
        response.json().then(function(data) {
          displayWeather(data);
  
        });
      } else {
      
        document.location.replace("./index.html");
      }
    });
  };
  
    for (var i = 0; i < weather.length; i++) {
     
      var weatherEl = document.createElement("a");
      issueEl.classList = "list-item flex-row justify-space-between align-center";

  
 
      var titleEl = document.createElement("span");
      titleEl.textContent = weather[i].title;
  

      weatherEl.appendChild(titleEl);
 
 
      issueEl.appendChild(typeEl);
  

      weatherContainerEl.appendChild(weatherEl);
    }

  ;
  
  getCityName();
  getCityWeather();