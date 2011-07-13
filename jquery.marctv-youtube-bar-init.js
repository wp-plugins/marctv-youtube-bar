(function ($) {
  $(document).ready(function($) {
      
    function colorbox_callback(el,linkttitle){
      if($.isFunction($.colorbox)){
        $('a', el).colorbox({
          title:function(){
            var title_ar = '';
            if($(this).attr("data-desc")!== undefined){
              title_ar = $(this).attr("data-desc").split(" | ");
            }
            if(title_ar.length > 1){
              var link = title_ar[0];
              var title = $(this).attr("data-title");
              return title + ' | <a href="' + link + '">' + linkttitle + '</a>';
            }else{
              return $(this).attr("data-title");
            }
          },
          iframe: true,
          innerWidth: 600,
          innerHeight: 368,
          current: '{current}/{total}'
        });
      }
    }

        
    $("#marctvyoutubebar").marctvyoutubebar({
      playlistID: 'E963CAE762718528', // youtube playlist id
      display_limit: 3,               // limit of items which are not hidden
      channelname: "MarcDK",          // name of your youtube account channel
      linktitle: "Artikel zum Video", // title of the colorbox link
      headline: "Ausgewählte Videos", // headline of the video bar
      query_limit: 18,                // query limit
      callback: colorbox_callback     // name of the callback function
    });

  });
}(jQuery));