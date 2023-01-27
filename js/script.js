//3426654f99a0dfa7522e4aab3cb64af2  (api key)
console.log("hi");

//event listener for form submission
$("#search-form").on("submit", function(event){
    //search-form is 1st ID on form
    event.preventDefault();
    let citySearch = $("#search-input").val();
    //search-input is the class on the input element
    console.log(citySearch);
    console.log("hiya");
    let queryURL = "http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}" + "&apikey=3426654f99a0dfa7522e4aab3cb64af2";

    fetch(queryURL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
});




