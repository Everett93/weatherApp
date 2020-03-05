
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
        
                var cityDiv = $("<div>");
                //pushing info found on search
                var city = $("<p>").text(response.city.name);
                var a = $("<p>").addClass("city");
                cityDiv.append(city);
                a.append(cityDiv)
                //showing the results on html
                $("#list").prepend(a);
            console.log(city);
                var date = $("<p>").text(response.list[0].dt_txt);
                var b = $("<p>").addClass("date");
                cityDiv.append(date);
                b.append(cityDiv);
                $("#list1").prepend(b);
            console.log(date);

                var temp = $("<p>").text(Math.floor((response.list[0].main.temp - 273.15) * 1.80 + 32));
                var c = $("<p>").addClass("temp");
                cityDiv.append(temp);
                c.append(cityDiv);
                $("#list2").prepend(c);
            console.log(temp);


           var humidity = $("<p>").text(response.list[0].main.humidity);
           var d = $("<p>").addClass("humid");
           cityDiv.append(humidity);
           d.append(cityDiv);
           $("#list3").prepend(d);
           console.log(humidity);

           var wind = $("<p>").text(response.list[0].wind.speed);
           var e = $("<p>").addClass("wind");
           cityDiv.append(wind);
           e.append(cityDiv);
           $("#list4").prepend(e);
           console.log(wind);


           var icon = $("<p>").text(response.list[0].weather[0].description);
           var h = $("<p>").addClass("icon");
           cityDiv.append(icon);
           h.append(cityDiv);
           $("#list5").prepend(h);
           console.log(icon);


        });
});
