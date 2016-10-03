// 调用聚合数据 - 新闻头条API

var URL = 'http://v.juhe.cn/toutiao/index'
var KEY = '639381dabc2167ac27d651fc630bdb50'

function getNewsData(self,typeId) {
     wx.request({
      url: URL,
      data:{
        type:typeId,
        key:KEY
      },
      header:{
          "Content-Type":"application/json"
      },
      success: function(res) {
        self.setData({
          newsData:res.data.result.data
        });
      },
      fail: function(res) {
        console.log(res.reason)
      }
    });
}

module.exports = {
    getNewsData: getNewsData
}