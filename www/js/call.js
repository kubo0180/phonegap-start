var dates = get_url_vars().date.split('+');
var day = dates[0];
var times = dates[2].split(':');
var hour = times[0]
var min  = times[1];
var sec = times[2];

$('#counter').countdown({
  format: 'hh:mm:ss', 
  startTime: dates[2], 
  digitImages: 6,
  digitWidth: 46,
  digitHeight: 60.4, 
  timerEnd: function() { alert("done"); }, 
  image: "img/digits.png"
});

function get_url_vars()
{
  var vars = new Object,  params;
  var temp_params = window.location.search.substring(1).split('&');
  for(var i = 0; i <temp_params.length; i++) {
    params = temp_params[i].split('=');
    vars[params[0]] = decodeURIComponent(params[1]);
  }
  return vars;
}
