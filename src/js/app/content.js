import render from 'views/content.art';
var data = [
  {
    "name":"图书",
    "list":[
      {
        "name":"哈利波特与死亡圣器",
        "desc":"“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本",
        "money":"29.37元",
        "imgSrc":"//i1.mifile.cn/a4/5e5da924-84e3-4959-9e25-5891cdf30757"
      },
      {
        "name":"好吗好的",
        "desc":"“畅销作家大冰2016年新书！讲给你听，好吗好的！",
        "money":"17元",
        "imgSrc":"//i1.mifile.cn/a4/61e1385e-54de-48f3-8717-5e4f4b1cdd14"
      },
      {
        "desc":"“海量好书，享受精品阅读时光 海量好书，享受精品阅读时光",
        "money":"前往多看阅读",
        "imgSrc":"//s01.mifile.cn/i/index/more-duokan.jpg"
      },
    ]
  },
  {
    "name":"图书",
    "list":[
      {
        "name":"哈利波特与死亡圣器",
        "desc":"“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本",
        "money":"29.37元",
        "imgSrc":"//i1.mifile.cn/a4/5e5da924-84e3-4959-9e25-5891cdf30757"
      },
      {
        "name":"好吗好的",
        "desc":"“畅销作家大冰2016年新书！讲给你听，好吗好的！",
        "money":"17元",
        "imgSrc":"//i1.mifile.cn/a4/61e1385e-54de-48f3-8717-5e4f4b1cdd14"
      },
      {
        "desc":"“海量好书，享受精品阅读时光 海量好书，享受精品阅读时光",
        "money":"前往多看阅读",
        "imgSrc":"//s01.mifile.cn/i/index/more-duokan.jpg"
      },
    ]
  },
  {
    "name":"图书",
    "list":[
      {
        "name":"哈利波特与死亡圣器",
        "desc":"“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本",
        "money":"29.37元",
        "imgSrc":"//i1.mifile.cn/a4/5e5da924-84e3-4959-9e25-5891cdf30757"
      },
      {
        "name":"好吗好的",
        "desc":"“畅销作家大冰2016年新书！讲给你听，好吗好的！",
        "money":"17元",
        "imgSrc":"//i1.mifile.cn/a4/61e1385e-54de-48f3-8717-5e4f4b1cdd14"
      },
      {
        "desc":"“海量好书，享受精品阅读时光 海量好书，享受精品阅读时光",
        "money":"前往多看阅读",
        "imgSrc":"//s01.mifile.cn/i/index/more-duokan.jpg"
      },
    ]
  },
  {
    "name":"图书",
    "list":[
      {
        "name":"哈利波特与死亡圣器",
        "desc":"“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本",
        "money":"29.37元",
        "imgSrc":"//i1.mifile.cn/a4/5e5da924-84e3-4959-9e25-5891cdf30757"
      },
      {
        "name":"好吗好的",
        "desc":"“畅销作家大冰2016年新书！讲给你听，好吗好的！",
        "money":"17元",
        "imgSrc":"//i1.mifile.cn/a4/61e1385e-54de-48f3-8717-5e4f4b1cdd14"
      },
      {
        "desc":"“海量好书，享受精品阅读时光 海量好书，享受精品阅读时光",
        "money":"前往多看阅读",
        "imgSrc":"//s01.mifile.cn/i/index/more-duokan.jpg"
      },
    ]
  }
  
];
$('#content>ul').html(render(data))
$('#content .slideBox').slide({
  mainCell: '.bd ul',
  delayTime: 700
})
