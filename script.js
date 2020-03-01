
//search button
$("#search").on("click", function () {
    console.log("#search");
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
            //code to pull search info
            var results = response;
            //loop to push out weather info
            
            for (var i = 0; i < results.length; i++) {
                var webDiv = $("<div>");
                //pushing info found on search
                var city = $("<p>").text(results[i].city.name);
                console.log(city);
                var p = $("<p>").addClass("info");
                webDiv.append(city);
                p.append(webDiv)
                //showing the results on html
                $("#list").prepend(p);
            }console.log($.ajax);
        });
});
