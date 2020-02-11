$("#search").on("click", function () {
    console.log("clicked");
});

var data = {
    'url': 'https://audd.tech/example1.mp3',
    'return': 'timecode,apple_music,deezer,spotify',
    'api_token': 'aac442290d3b6228e5387dc8352ecb4e'
}

$.getJSON('https://api.audd.io/?jsonp=?', data, function (result) {
    console.log(result);
});