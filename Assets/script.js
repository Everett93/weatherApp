
//search button
$("#search").on("click", function () {
    
    //taking value of search 
    var search = $('#text').val();
    console.log(search);
    //nytimes search engine info
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
        search + "&api-key=4ooBwyM9KtRfqGUIYHwIamHTT8tMJ8it";

    // var queryURL =  "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=4ooBwyM9KtRfqGUIYHwIamHTT8tMJ8it"


    $.ajax({
        url: queryURL,
        method: "GET",
        // crossDomain: true,

        //   headers: {
        //     "Access-Control-Allow-Origin" : "*"
        //   }
    })
        .then(function (response) {
            //code to pull search info
            var results = response.response.docs;
            //loop to push out articles 
            console.log(response);
            for (var i = 0; i < results.length; i++) {
                var webDiv = $("<div>");
                //pushing urls found on search
                var person = $("<p>").text(results[i].web_url);
                var p = $("<p>").addClass("articles");
                webDiv.append(person);
                p.append(webDiv)
                //showing the results on html
                $("#list").prepend(p);
            }
        });
});
