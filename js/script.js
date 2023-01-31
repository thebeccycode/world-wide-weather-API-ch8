const apiKey = "3426654f99a0dfa7522e4aab3cb64af2";
let searchInput = document.getElementById("searchinput");
let historyBtn = document.getElementById("historybtn");
let currentForecast = document.getElementById("currentforecast");



//render user input
//get user input using html form element
//store input in variable
//insert into html with javascript innerhtml
function getUserInput(){
    let userInput = document.getElementById("searchinput").value;
    document.getElementById("submit-search").innerHTML;

}

//store in local storage
//check variable exists (querySelector) and then run an event listener
let searchbox = document.getElementById("searchbox")
searchbox.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(searchInput.value)
    localStorage.setItem("searchInput", searchInput)

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchInput.value}&limit=5&appid=3426654f99a0dfa7522e4aab3cb64af2`)
        .then(response => response.json())
        .then(cityFound => {
            let firstCity = cityFound[0];
            console.log("first city latitude:", firstCity.lat);
            console.log("first city longitude:", firstCity.lon);

            return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=3426654f99a0dfa7522e4aab3cb64af2`)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)

            let cityList = data.list;
            console.log("city list:", cityList)
            //console.log(list[0]);
            //how to log the list

        });
})


