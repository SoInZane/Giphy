//array of superheroes to start with
var superHeroes = [
    "batman", "superman", "ironman", "captain america",
    "spiderman", "barry allen", "hulk", "wolverine", 
    "thor", "scott summers", "jean grey"
]

//function to display the buttons with the above names of superheroes
function showButtons(){

    $("#buttons").empty();

    for (var i = 0; i < superHeroes.length; i++) {
        $("#buttons").append(`<button classe="btn">${superHeroes[i]}`);
}
}

showButtons();

//on click query the api and search based off of name of superhero
$(document).on('click', "button", function () {

    var sh = $(this).text();
    console.log(sh);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + sh + "&api_key=YAoar8vnGWqmr4eBqYMAbjHsKKIVTgCz&limit=10";
    console.log(queryURL);


    $.ajax({
        url: queryURL,
        method: 'GET'
    })

        .then(function (response) {
            console.log(response);
//loop through the array of superheros and after pulling down data from the api display it in the html
            for (var i = 0; i < response.data.length; i++) {
                var result = response.data[i];
                $('#gifsSuperheroes').prepend("<p>Rating: " + response.data[i].rating + "</p>");
                $('#gifsSuperheroes').prepend("<img src='" + response.data[i].images.fixed_height.url + "'>");
            }
        })
});

//on click of the submit button add a new superhero to the array and add a new button

$(document).on("click", "#submitButton", function(event){
    event.preventDefault();
  
    // adds new superhero to the superHeroes array
    var userEntry = $("#newSuperhero").val();
    superHeroes.push(userEntry);
    console.log(userEntry);
    
    // rebuilds all buttons with the new array
    showButtons();
  })
