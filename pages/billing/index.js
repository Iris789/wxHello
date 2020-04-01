// pages/billing/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hour:0,
    min:0,
    sec:0,
    actionText:'正在计费',
    disabled:false
  },

  /**
   * 生命周期函数--监听页面加载-页面初始化
   */
  onLoad: function (options) {
    this.setData({
      number:options.number
    })
    let hour=0;
    let min=0;
    let sec=0;
    this.timer = setInterval(() => {
      sec++;
      if(sec<60){
        this.setData({
          sec: sec
        })
      }else{
        sec=0;
        min++;
        if(min<60){
          this.setData({
            min: min,
            sec: sec
          })
        }else{
          min=0;
          hour++;
          this.setData({
            hour: hour,
            min: min
          })
        }
      }
    },1000)
  },

  endride:function(){
    clearInterval(this.timer);
    this.timer='';//定时器清了timer还是有值
    this.setData({
      actionText:'本次骑行时间',
      disabled:true
    })
  },

  backmap:function(){
    if(this.timer == ''){//结束骑行
      wx.redirectTo({//1、直接到某个页面 当前页面销毁
        url: '../index/index',
      })
    }else{
      wx.navigateTo({//2、到某个页面 当前页面挂载到后台
        url: '../index/index?timer='+this.timer,
      })
    }
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