
var data = [{
    "imgSrc": "//i1.mifile.cn/a1/pms_1502962291.85477516!140x140.jpg",
    "name": "小米5x",
    "price": "1299",
    "desc": "4.7万人好评"
  },
  {
    "imgSrc": "//i1.mifile.cn/a1/pms_1502962291.85477516!140x140.jpg",
    "name": "小米5x",
    "price": "1299",
    "desc": "4.7万人好评"
  },
  {
    "imgSrc": "//i1.mifile.cn/a1/pms_1502962291.85477516!140x140.jpg",
    "name": "小米5x",
    "price": "1299",
    "desc": "4.7万人好评"
  },
  {
    "imgSrc": "//i1.mifile.cn/a1/pms_1502962291.85477516!140x140.jpg",
    "name": "小米5x",
    "price": "1299",
    "desc": "4.7万人好评"
  },
  {
    "imgSrc": "//i1.mifile.cn/a1/pms_1502962291.85477516!140x140.jpg",
    "name": "小米5x",
    "price": "1299",
    "desc": "4.7万人好评"
  },
  {
    "imgSrc": "//i1.mifile.cn/a1/pms_1505110828.06928608!140x140.jpg",
    "name": "小米note3",
    "price": "1499",
    "desc": "2.1万人好评"
  },
  {
    "imgSrc": "//i1.mifile.cn/a1/pms_1505110828.06928608!140x140.jpg",
    "name": "小米note3",
    "price": "1499",
    "desc": "2.1万人好评"
  },
  {
    "imgSrc": "//i1.mifile.cn/a1/pms_1505110828.06928608!140x140.jpg",
    "name": "小米note3",
    "price": "1499",
    "desc": "2.1万人好评"
  },
  {
    "imgSrc": "//i1.mifile.cn/a1/pms_1505110828.06928608!140x140.jpg",
    "name": "小米note3",
    "price": "1499",
    "desc": "2.1万人好评"
  },
  {
    "imgSrc": "//i1.mifile.cn/a1/pms_1505110828.06928608!140x140.jpg",
    "name": "小米note3",
    "price": "1499",
    "desc": "2.1万人好评"
  }
];
import render from 'views/recommend.art';
$('.recommend .list .picList').html(
  render(data)
)
jQuery(".recommend .list").slide({
  titCell: ".hd ul",
  mainCell: ".bd ul",
  autoPage: true,
  pnLoop:true,
  effect: "left",
  scroll: 5,
  vis: 5,
  trigger: "click"
});