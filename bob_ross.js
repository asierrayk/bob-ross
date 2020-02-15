d3.csv("./bob_ross_paintings.csv").then(function(data) {
    var index = Math.floor(Math.random() * data.length); 
    var row = data[index]

    $("#title").html(row.painting_title);
    $("#episode").html("S"+row.season+"E"+row.episode);
    $("#image").attr("href", row.youtube_src);
    $("#image img").attr("src", row.img_src);
});
