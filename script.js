
//search button
$("#search").on("click", function () {
    console.log("#search");
    //taking value of search 
    var search = $('#text').val();
    console.log(search);
    //nytimes search engine info
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=Austin,Texas&appid=" +
        search + "dd3678bf60e37d99bb495e887356c617";

    // var queryURL =  "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=4ooBwyM9KtRfqGUIYHwIamHTT8tMJ8it"


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
            // var results = response.response.docs;
            // //loop to push out articles 
            // console.log(response);
            // for (var i = 0; i < results.length; i++) {
            //     var webDiv = $("<div>");
            //     //pushing urls found on search
            //     var person = $("<p>").text(results[i].web_url);
            //     var p = $("<p>").addClass("articles");
            //     webDiv.append(person);
            //     p.append(webDiv)
            //     //showing the results on html
            //     $("#list").prepend(p);
            // }console.log(ajax);
        });
});
