const apiKey = "3426654f99a0dfa7522e4aab3cb64af2";
let searchInput = document.getElementById("searchinput");
let historyBtn = document.getElementById("historybtn");
let currentForecast = document.getElementById("currentforecast");



//event listener for form submission
$("#searchbox").on("submit", function (event) {
   

});

//add search history to html
function userSearchHistory(){
    let button = document.createElement("button")
    button.addEventListener("click", (event) =>{
        event.preventDefault()
        console.log(userSearchHistory);
    })
};

//this fetches current weather for location based on co-ordinates 
fetch("http://api.openweathermap.org/geo/1.0/direct?q=Leeds&limit=5&appid=3426654f99a0dfa7522e4aab3cb64af2")
    .then(response => response.json())
    .then(cityFound => {
        let firstCity = cityFound[0];
        console.log("first city latitude:", firstCity.lat);
        console.log("first city longitude:", firstCity.lon);

        return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=3426654f99a0dfa7522e4aab3cb64af2`)
    })
    .then(response => response.json())
    .then(data => {
        
        let cityList = data.list;
        console.log("city list:", cityList)
        //console.log(list[0]);
        //how to log the list

    });

    //to do list

    //turn the data in the api into a new object using a function

    //retrieve data on weather function

       function weatherObject(){
      return{
         icon: cityList.weather.icon,
         temp: cityList.main.temp,
         humidity: cityList.main.humidity,
         wind: cityList.wind.speed
          }
        };

        console.log(weatherObject);


//render to current weather card
//take the data from weather object and render into currentforecast card 
//the icon needs to render into the icon-label
//the temperature -> temp-label
//the wind speed -> wind-label
//the humidity -> humidity-label

//render to 5 day forecast cards
//the above also needs to render to the five cards
//maybe there's a simpler way to display this info

//add recent searches to local storage 

//retrieve searches from local storage

//bonus points for creating a reset/clear history button