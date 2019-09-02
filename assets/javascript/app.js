$('button').on('click',function(){
            
    var sh = $(this).data("search");
    console.log(sh);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+sh+"&api_key=YAoar8vnGWqmr4eBqYMAbjHsKKIVTgCz&limit=10";
    console.log(queryURL);
    $.ajax({url:queryURL,method:'GET'})
    .done(function(response){
        console.log(response);
        for(var i=0;i<response.data.length;i++){
            $('#gifsSuperheroes').prepend("<p>Rating: "+response.data[i].rating+"</p>");
            $('#gifsSuperheroes').prepend("<img src='"+response.data[i].images.downsized.url+"'>");
        }
    })
})