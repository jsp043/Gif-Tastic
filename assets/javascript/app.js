$(document).ready(function(){

    $('button').on('click', function() {
        var characters = $(this).data('name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + characters + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
            url: queryURL,
            method: 'GET'
        })
            .done(function(response) {


                console.log(response)

                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var characterDiv = $('<div/>');

                    var p =$('<p/>');

                    p.text(results[i].rating);

                    var characterImage = $('<img/>');

                    characterImage.addClass('anImg')

                    characterImage.attr('src', results[i].images.fixed_height.url);

                    characterImage.attr('data-still', results[i].images.fixed_height_still.url)

                    characterImage.attr('data-animate', results[i].images.fixed_height.url)

                    characterImage.attr('data-state', 'still');

                    characterDiv.append(p);

                    characterDiv.append(Image);

                    characterDiv.prependTo($('#gifs'));
                }

                $('.anImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });
    });
});