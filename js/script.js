const apiKey = "3426654f99a0dfa7522e4aab3cb64af2";

console.log("hi");

//event listener for form submission
$("#search-form").on("submit", function(event){
    //search-form is 1st ID on form
    event.preventDefault();
    let citySearch = $("#search-input").val();
    //search-input is the class on the input element
    console.log(citySearch);
    console.log("hiya");
    let queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=3426654f99a0dfa7522e4aab3cb64af2";

    fetch(queryURL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
});


//create function to append city onto html document


//


