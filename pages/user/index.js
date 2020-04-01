// pages/user/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:{
      photo:'',
      nickname:'未登录',
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'user',
      success: (res) => {
        let userObj = JSON.parse(res.data);
        this.setData({
          user:{
            photo: userObj.user.photo,
            nickname: userObj.user.nickname
          }
        })
      },
    })
  },

  login: function (e) {//1、获取用户信息 button按钮设置open-type="getUserInfo" bindgetuserinfo="login"操作回调函数
    let userData = e.detail.userInfo;
    let userObj = {
      user: {
        photo: userData.avatarUrl,
        nickname: userData.nickName
      }
    };
    this.setData(userObj),
    wx.setStorage({//添加缓存 有缓存一进页面就得显示已登录
      key: 'user',
      data: JSON.stringify(userObj),
    })
  },

  loginout:function(){//退出登录
    this.setData({
      user: {
        photo: '',
        nickname: '未登录'
      }
    });
    wx.removeStorageSync('user');//清缓存 以防一进页面有缓存还显示已登录状态
  },

  movetowallent:function(){
    wx.navigateTo({
      url: '../wallent/index',
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