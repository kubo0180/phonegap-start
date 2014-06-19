var current;
var pages = ['index', 'p1', 'p2', 'p3'];

$(document).on('pagechange','document', function(e, d){
  current = d.toPage.attr('id');
});

// 右スワイプ時 次ページ移動
$(document).on('swipeleft', function(e, d){
  var path = '#';
  if( current == 'p3' ){
    path = path + pages[0];
  }else{
    path = path + pages[$.inArray(current, pages) + 1];
  }
  $.mobile.changePage(path, { transition : 'slide' });
});

// 左スワイプ時 前ページ移動
$(document).live('swiperight', function(e, d){
  var path = '#';
  if( current == 'index' ){
    path = path + pages[3];
  }else{
    path = path + pages[$.inArray(current, pages) - 1];
  }
  $.mobile.changePage(path, { transition : 'slide', reverse: true });
});
