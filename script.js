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


        $("#result-cont").show();
        $("#songTitle").show();
        $("#albumCover").show();
        $("#lyrics").show();
    */




});
$("#logo").on("click", function () {
    console.log("logo click");

    alert(searchInput);
});

function search() {
  // SEARCH INPUT BY USER
  var searchInput = $("#search-input").val();

  // GET RESULTS WITH API
  var queryURL = "https://api.audd.io/findLyrics/?q=" + searchInput + "&api_token=aac442290d3b6228e5387dc8352ecb4e";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(respond) {
    console.log(respond);
    var result = respond.data;
  });
}
