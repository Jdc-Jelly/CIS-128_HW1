$("button").on('click', function() {

    $("h1")
        .animate({fontSize: "120px"}, 1000 )
        .animate({fontSize: "60px"}, 1000 )
        .css({"color": "darkred"});
    
    $("img.photo")
        .css({border: '0 solid white'})
        .animate({ borderWidth: 1}, 500);

    var timer = setTimeout(function() 
        {$("h1")
            .css("color", "white")}, 2300);
});

