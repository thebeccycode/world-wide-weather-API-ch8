const apiKey = "3426654f99a0dfa7522e4aab3cb64af2";

//event listener for form submission
$("#searchbox").on("submit", function(event){
    
    fetch("http://api.openweathermap.org/geo/1.0/direct?q=Leeds&limit=5&appid=3426654f99a0dfa7522e4aab3cb64af2")
        .then(response => response.json())
        .then(cityFound => {
            let firstCity = cityFound[0];
            event.preventDefault();
            
    //search-input is the class on the input element
            console.log("first city latitude:", firstCity.lat);
            console.log("first city longitude:", firstCity.lon);
    
            //the code above finds the longitude and latitude of the firstCity(london) and turns that into a variable.
    
            return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=3426654f99a0dfa7522e4aab3cb64af2`)
        })
    
    
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
    
    //the code above takes the first city longitude and latitude variables so that when the city is changed the variables are found.
});
