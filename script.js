
//search button
$("#search").on("click", function () {
    console.log("#search");
    $("#list").empty();
    $("#date").empty();
    $("#temp").empty();
    $("#humid").empty();
    $("#speed").empty();
    $("#des").empty();
    //taking value of search 
    var search = $('#text').val();
   
    //nytimes search engine info
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" +
        search + "&appid=dd3678bf60e37d99bb495e887356c617";



    $.ajax({
        url: queryURL,
        method: "GET"
        // crossDomain: true,
    
        //   headers: {
        //     "Access-Control-Allow-Origin" : "*"
        //   }
    }) 
        .then(function (response) {
            console.log(response)


                        //pushing info found on search
                        var headDiv = $("<header>")
                        var city = $("<p>").text(response.city.name);
                        var a = $("<p>").addClass("city");
                        headDiv.append(city);
                        a.append(headDiv)
                        //showing the results on html
                        $("#list").prepend(a);
            //code to pull search info
            for(var i = 2; i < response.list.length; i+=8){

                var date = $('<div class="col-sm-2">').text("Date: " + (response.list[i].dt_txt) + " AM");
                var temp = $("<div class='col-sm-2'>").text("Temperature: " + (Math.floor((response.list[i].main.temp - 273.15) * 1.80 + 32)));
                var humidity = $("<div class='col-sm-2'>").text("Humidity: " + (response.list[i].main.humidity));
                var wind = $("<div class='col-sm-2'>").text("Wind Speed: " + (response.list[i].wind.speed));
                var icon = $("<div class='col-sm-2'>").text("Description: " + (response.list[i].weather[0].description));
                
                $("#date").append(date);
               $("#temp").append(temp);
               $("#humid").append(humidity);
               $("#speed").append(wind);
               $("#des").append(icon);



       



            }













        });
});


