(function($) {
  $.fn.marctvyoutubebar = function (o) {
    o = $.extend({
      playlistID: 'E963CAE762718528',
      callback: null,
      channelname: "MarcDK",
      headline: "Videos",
      linktitle: "Artikel zum Video",
      display_limit: 3,
      query_limit: 6
    }, o);

    $.fn.getYouTubeData = function (i){
      var that = this;
      $.ajax({
        url: "http://gdata.youtube.com/feeds/api/playlists/" + o.playlistID + "?v=2&alt=json-in-script" + '&max-results=' + o.query_limit,
        dataType: 'jsonp',
        success: function(data) {
          var list = '<ul class="col_container">';
          var item = '';
          $.each(data.feed.entry,function(key, value){
            var ytID = value["media$group"]["yt$videoid"].$t;
            var ytURL = 'http://www.youtube.com/embed/' + ytID + '?autoplay=1';
            var ytIMG = value["media$group"]["media$thumbnail"][1].url;
            var ytDES = value["media$group"]["media$description"].$t;
            var ytTITLE = value["media$group"]["media$title"].$t;
            if(key < o.display_limit){
              if(key === o.display_limit-1){
                item =  '<li class="col last"><div class="crop">';
              }else if(key === 0){
                item =  '<li class="col first"><div class="crop">';
              }else{
                item =  '<li class="col"><div class="crop">';
              }
              item += '<a data-title="' + ytTITLE + '" data-desc="' + ytDES + '" title="' + ytTITLE + '" rel="marctvyoutubebar' + i + '" href="' + ytURL + '">';
              item += '<span class="sprite playicon"> </span>';
              item += '<span class="sprite icon_youtube"> </span>';
              item += '<img src="' + ytIMG + '" alt="' + ytTITLE + '">';
              item += '</a></div>';
              item += '<div class="title">' + ytTITLE + '</div>';
              item += '</li>';
            }else{
              item =  '<li style="display:none;">';
              item += '<a data-title="' + ytTITLE + '" title="' + ytDES + ' | http://www.youtube.com/' + o.channelname + '" rel="marctvyoutubebar' + i + '" href="' + ytURL + '"></a>';
              item += '</li>';
            }
            list += item;
          });
          list += '</ul>';
          that.append('<h2 class="col_title supertitle">' + o.headline + '</h2>').append(list);
          if (o.callback) o.callback(that,o.linktitle);
        }
      });
     
    };
    return this.each(function (i) {
      $(this).getYouTubeData(i);
    });
  };
}(jQuery));