// pages/wallent/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    money:0,
    count:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  readdesc:function(){
    wx.showModal({
      title: '余额说明',
      content: '余额仅限在哈啰单车小程序及官方APP使用',
    })
  },

  charge:function(){
    wx.navigateTo({
      url: '../charge/index',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {//通过navigateBack返回的界面只触发show 不触发load
    //看有余额缓存没 有更新余额
    // wx.getStorage({
    //   key: 'chargeMoney',
    //   success: (res) => {
    //     console.log(res)
    //     this.setData({
    //       money: res.data
    //     })
    //   },
    // })
    let chargeMoney = wx.getStorageSync('chargeMoney');
    if(chargeMoney){
      this.setData({
        money: chargeMoney
      })
    }
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