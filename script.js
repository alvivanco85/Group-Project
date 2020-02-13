$(document).on('keypress',function(e) {
    if(e.which == 13) {
      search();
    }
});
$("#searchBtn").on("click", function () {
    search();
    /*
    var data = {
        'url': 'https://api.audd.io/findLyrics/?q=Adele',
        'return': 'timecode,spotify,lyrics',
        'api_token': 'aac442290d3b6228e5387dc8352ecb4e'
    };
    $("#lyrics").text(data.result.lyrics.lyrics);
    $(".title").text(data.result.title);
    $(".artist").text(data.result.artist);
    $(".album").text(data.result.album);


        $("#results").show();
        $("#songTitle").show();
        $("#albumCover").show();
        $("#lyrics").show();
    */

});
$("#logo").on("click", function () {
    console.log("logo click");
});

function search() {
  // Put loading gif to search bar while waiting to load
  $("#search-icon").html('<i class="fas fa-spinner fa-spin"></i>');
  var searchInput = $("#search-input").val();
  // Validate search input
  if (!searchInput) {
    alert("Search input cannot be empty");
    // Remove loading igf
    $("#search-icon").html('<i class="fas fa-search"></i>');
    return
  }
  // Get results from API
  var queryURL = "https://api.audd.io/findLyrics/?q=" + searchInput + "&api_token=aac442290d3b6228e5387dc8352ecb4e";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(respond) {
    $("#results").show();
    console.log(respond);
    // Clear results
    $("#results").text("");
    // Clear search bar
    $("#search-input").val("");
    // Remove loading gif
    $("#search-icon").html('<i class="fas fa-search"></i>');
    var data = respond.result;
    // DISPLAY THE RESULTS
    // LOoop through result obj
    for (var i = 0; i < data.length; i++) {
      // Create new tile
      var newTile = $("<div>");
      newTile.attr("class","box results");
      console.log(data[i]);
      // Append title onto the tile
      newTile.append('<strong>' + data[i].full_title + '</strong><br>');
      // Append artists onto the tile
      newTile.append(data[i].artist);
      $("#results").append(newTile);
    }
  });


}
