
var date = new Date();
$('.time>div').text((date.getHours() + 2 + ':00场'))
var time = 7200 - date.getMinutes() * 60 - date.getSeconds();

countTime(time)
function countTime(time) {
  var timer = null;
  timer = setInterval(function () {
    var h, m, s;
    if (time >= 0) {
      if (time === 0) {
        h = '00', m = '00', s = '00';
      } else {
        h = Math.floor(time / 3600);
        m = Math.floor((time / 60)) - h * 60;
        s = time % 3600 - m * 60;
        h = '0' + h;
        if (m <= 9) m = '0' + m;
        if (s <= 9) s = '0' + s;
      }
      var lis = $('.time>ul>li');
      $(lis[0]).text(h);
      $(lis[2]).text(m);
      $(lis[4]).text(s);
      time--;
    } else {
      clearInterval(timer)
    }
  }, 1000)

}
