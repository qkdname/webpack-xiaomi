import render from 'views/pc.art';
var data = [
  {
    "name":"热门",
    "list":[
      {
        "imgSrc":"//i1.mifile.cn/a1/pms_1496997930.13622399!220x220.jpg",
        "name": "13.3小米笔记本Air i5 8G 256G MX150 银色",
        "desc":"全金属超薄机身搭配独显",
        "price":"5199元",
        "old":"5299元"
      },
      {
        "imgSrc":"//i1.mifile.cn/a1/pms_1496997930.13622399!220x220.jpg",
        "name": "13.3小米笔记本Air i5 8G 256G MX150 银色",
        "desc":"全金属超薄机身搭配独显",
        "price":"5199元",
        "old":"5299元"
      },
      {
        "imgSrc":"//i1.mifile.cn/a1/pms_1496997930.13622399!220x220.jpg",
        "name": "13.3小米笔记本Air i5 8G 256G MX150 银色",
        "desc":"全金属超薄机身搭配独显",
        "price":"5199元",
        "old":"5299元"
      },
      {
        "imgSrc":"//i1.mifile.cn/a1/pms_1496997930.13622399!220x220.jpg",
        "name": "13.3小米笔记本Air i5 8G 256G MX150 银色",
        "desc":"全金属超薄机身搭配独显",
        "price":"5199元",
        "old":"5299元"
      },
      {
        "imgSrc":"//i1.mifile.cn/a1/pms_1496997930.13622399!220x220.jpg",
        "name": "13.3小米笔记本Air i5 8G 256G MX150 银色",
        "desc":"全金属超薄机身搭配独显",
        "price":"5199元",
        "old":"5299元"
      },
      {
        "imgSrc":"//i1.mifile.cn/a1/pms_1496997930.13622399!220x220.jpg",
        "name": "13.3小米笔记本Air i5 8G 256G MX150 银色",
        "desc":"全金属超薄机身搭配独显",
        "price":"5199元",
        "old":"5299元"
      },
      {
        "imgSrc":"//i1.mifile.cn/a1/pms_1496997930.13622399!220x220.jpg",
        "name": "13.3小米笔记本Air i5 8G 256G MX150 银色",
        "desc":"全金属超薄机身搭配独显",
        "price":"5199元",
        "old":"5299元"
      },
      {
        "imgSrc":"//i1.mifile.cn/a1/pms_1496997930.13622399!220x220.jpg",
        "name": "13.3小米笔记本Air i5 8G 256G MX150 银色",
        "desc":"全金属超薄机身搭配独显",
        "price":"5199元",
        "old":"5299元"
      }
    ]
  },
  {
    "name":"电视影音",
    "list":[
      {
        "imgSrc": "//i1.mifile.cn/a1/pms_1510111588.69169839!220x220.jpg",
        "name": "小米电视4 55英寸",
        "desc": "4.9mm 极超薄机身 / 2GB+8GB 大内存空间",
        "price": "2199元",
        "old": "3299元"
      },
      {
        "imgSrc": "//i1.mifile.cn/a1/pms_1510111588.69169839!220x220.jpg",
        "name": "小米电视4 55英寸",
        "desc": "4.9mm 极超薄机身 / 2GB+8GB 大内存空间",
        "price": "2199元",
        "old": "3299元"
      },
      {
        "imgSrc": "//i1.mifile.cn/a1/pms_1510111588.69169839!220x220.jpg",
        "name": "小米电视4 55英寸",
        "desc": "4.9mm 极超薄机身 / 2GB+8GB 大内存空间",
        "price": "2199元",
        "old": "3299元"
      },
      {
        "imgSrc": "//i1.mifile.cn/a1/pms_1510111588.69169839!220x220.jpg",
        "name": "小米电视4 55英寸",
        "desc": "4.9mm 极超薄机身 / 2GB+8GB 大内存空间",
        "price": "2199元",
        "old": "3299元"
      },
      {
        "imgSrc": "//i1.mifile.cn/a1/pms_1510111588.69169839!220x220.jpg",
        "name": "小米电视4 55英寸",
        "desc": "4.9mm 极超薄机身 / 2GB+8GB 大内存空间",
        "price": "2199元",
        "old": "3299元"
      },
      {
        "imgSrc": "//i1.mifile.cn/a1/pms_1510111588.69169839!220x220.jpg",
        "name": "小米电视4 55英寸",
        "desc": "4.9mm 极超薄机身 / 2GB+8GB 大内存空间",
        "price": "2199元",
        "old": "3299元"
      },
      {
        "imgSrc": "//i1.mifile.cn/a1/pms_1510111588.69169839!220x220.jpg",
        "name": "小米电视4 55英寸",
        "desc": "4.9mm 极超薄机身 / 2GB+8GB 大内存空间",
        "price": "2199元",
        "old": "3299元"
      },
      {
        "imgSrc": "//i1.mifile.cn/a1/pms_1510111588.69169839!220x220.jpg",
        "name": "小米电视4 55英寸",
        "desc": "4.9mm 极超薄机身 / 2GB+8GB 大内存空间",
        "price": "2199元",
        "old": "3299元"
      }
    ]
  }
];
$('.pc .title>ul').html(render(data));
var lis = $('.pc .title>ul>li');
$(lis[0]).addClass('active');
lis.each(function (index,el) {
  $(this).mouseover(function () {
    $(this).addClass('active').siblings().removeClass('active')
  })
})