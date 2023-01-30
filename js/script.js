const apiKey = "3426654f99a0dfa7522e4aab3cb64af2";

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

       // function weatherObject(){
       //     return{
       //         location: data.name,
       //         icon:
        //        date:,
        //        temp:,
        //        humidity:,
        //        wind:
        //    }
        //}

//retrieve data on weather function

//render to current weather card

//render to 5 day forecast cards

