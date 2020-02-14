// Declare response global for easy access
var data;
// Enter -> search
$(document).on('keypress',function(e) {
    if(e.which == 13) {
      search();
    }
});
// Click -> search
$("#searchBtn").on("click", function () {
    search();
});
$("#logo").on("click", function() {
    console.log("logo click");
});
// Notification X button
$(".delete").on("click",function(){
  $(".notification").hide();
});
// Shows song by ID
function displaySong(id) {
  // Loop through results obj for the song id
  for (var i = 0; i < data.length; i++) {
    if (data[i].song_id == id) {
      // Hide results tile
      $("#results").hide();
      // Set title
      $(".name").text(data[i].full_title);
      $(".artist").html("<u>Artist(s) :</u> " + data[i].artist);
      if (data[i].album)
        $(".album").html("<u>Album :</u> " + data[i].album);
      $("#lyrics").text(data[i].lyrics);
      // Show song info tiles
      $("#songTitle").show();
      $("#media").show();
      $("#lyrics").show();
      // Show youtube button on media tile
      // Show spotify button on media tile
      // Parse JSON into song
      var song = JSON.parse(data[i].media);
      console.log(song);
      $("#youtube").attr("href",song[2].url);
      $("#spotify").attr("href",song[0].url);
      $("#soundcloud").attr("href",song[1].url);
      break;
    }
  }
};
// SEARCH
function search() {
  // Remove notification
  $(".notification").hide();
  // Put loading gif to search bar while waiting to load
  $("#search-icon").html('<i class="fas fa-spinner fa-spin"></i>');
  var searchInput = $("#search-input").val();
  // Validate search input
  if (!searchInput) {
    $(".notification").show();
    // Remove loading igf
    $("#search-icon").html('<i class="fas fa-search"></i>');
    return
  }
  // Get results from API
  var api_token = "9146c1b62954f6de8a60955bbbf59323";
  var queryURL = "https://api.audd.io/findLyrics/?q=" + searchInput + "&api_token=" + api_token;

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
    data = respond.result;

    // DISPLAY THE RESULTS
    // Loop through result obj
    for (var i = 0; i < data.length; i++) {
      // Create new tile
      var newTile = $("<div>");
      newTile.attr("class","box results");
      newTile.attr("onclick","displaySong('" + data[i].song_id + "')");
      //newTile.attr("name",data[i].song_id);
      //console.log(data[i]);
      // Append title onto the tile
      newTile.append('<strong>' + data[i].full_title + '</strong><br>');
      // Append artists onto the resulttile
      newTile.append(data[i].artist);
      $("#results").append(newTile);
    }
  });
}
