//index.js
//获取应用实例
var app = getApp()
var api = require('../../utils/api.js');

Page({
   data: {
    menu:
    [{"id":"top","text":"头条"},{"id":"shehui","text":"社会"},{"id":"guonei","text":"国内"},{"id":"guoji","text":"国际"},{"id":"yule","text":"娱乐"},{"id":"tiyu","text":"体育"},{"id":"junshi","text":"军事"},{"id":"keji","text":"科技"},{"id":"caijing","text":"财经"},{"id":"shishang","text":"时尚"}]    ,
    newsData: []
  },
  onLoad: function () {
    console.log('index');
    var self = this;
    api.getNewsData(self,'toutiao');
  },
  getTypeId: function (e) {
    var typeId = e.currentTarget.id;
    var self = this;
    console.log(typeId);
    api.getNewsData(self,typeId);
    // self.scroll(0,self.currentWindow.scrollHeight);
  },
  detail: function () {

  }
})
