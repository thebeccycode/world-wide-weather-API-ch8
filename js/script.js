const apiKey = "3426654f99a0dfa7522e4aab3cb64af2";

//event listener for form submission
$("#searchbox").on("submit", function (event) {


});

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
        
        let list = data.list;
        //console.log(list)
        console.log(list[0]);
        //console.log(list[7]);
//how to turn api object global variables into local variables on vsc

    });

let userCity = " ";
//need to find a way to link this to query URL so that the users entry is searched when the fetch is returned

