$("#searchBtn").on("click", function () {
    console.log("clicked");
    $("#result-cont").removeClass("hide");
    $("#songTitle").removeClass("hide");
    $("#albumCover").removeClass("hide");
    $("#lyrics").removeClass("hide");
});
$("#logo").on("click", function () {
    console.log("logo click");
});
var data = {
    'url': 'https://audd.tech/example1.mp3',
    'return': 'timecode,spotify,lyrics',
    'api_token': 'aac442290d3b6228e5387dc8352ecb4e'
}
$.getJSON('https://api.audd.io/?jsonp=?', data, function (result) {
    $("#lyrics").text(result.result.lyrics.lyrics);
    console.log(result);
});
