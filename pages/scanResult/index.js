// pages/scanResult/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:10
  },

  /**
   * 生命周期函数--监听页面加载-通过redirectto跳转时会触发load?-接受传入的参数，不触发load
   */
  onLoad: function (options) {
    this.setData({
      password:options.psw,
    })
    this.timer = setInterval(() => {
      let time = this.data.time
      this.setData({
        time: --time
      })
      if(time<=0){
        clearInterval(this.timer);
        wx.redirectTo({//1、重定向到某个页面
          url: '../billing/index?number='+options.number,
        })
      }
    },1000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})