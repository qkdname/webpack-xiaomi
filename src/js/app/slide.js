import '../lib/jquery.SuperSlide.2.1.1';

var data = [
  '//i1.mifile.cn/a4/xmad_15235903896859_YbOJA.jpg',
  '//i1.mifile.cn/a4/T1a5JjBbVT1RXrhCrK.jpg',
  '//i1.mifile.cn/a4/xmad_15235219017074_KXToD.jpg'
];

import render from 'views/slide.art';
$('.category-slide .slideBox').append(render(data));
$('.category-slide .slideBox').slide({
  mainCell: '.bd ul',
  autoPlay: true,
  delayTime: 700
})
