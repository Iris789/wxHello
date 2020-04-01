// pages/charge/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  input:function(e){
    this.setData({
      money:e.detail.value
    })
  },

  charge:function(){
    //每次点充值都要累加到余额上-付钱接口 获取输入的金额 用参数传到余额界面 或设置缓存
    //充值成功后跳转到余额界面
    //判断格式
    var reg = /^[1-9]{1}\d*$/g;//大于0
    if(reg.test(this.data.money)){
      let chargeMoney = parseInt(this.data.money);
      wx.getStorage({
        key: 'chargeMoney',
        success: function (res) {
          wx.getStorage({
            key: 'chargeMoney',
            success: function (res) {
              chargeMoney += parseInt(res.data);
              // wx.setStorage({
              //   key: 'chargeMoney',
              //   data: chargeMoney
              // })
              wx.setStorageSync('chargeMoney', chargeMoney)
              wx.navigateBack({//只触发返回界面的show方法 -为啥缓存取得上一次的？
                delta: 1,
                success: function () {
                  wx.showToast({
                    title: '充值成功',
                    duration: 1000
                  })
                }
              })
            },
          })
        },
        fail: function () {
          // wx.setStorage({//异步 未执行完不阻碍后续执行
          //   key: 'chargeMoney',
          //   data: chargeMoney
          // })
          wx.setStorageSync('chargeMoney', chargeMoney)//同步 执行完后再执行后续
          wx.navigateBack({//只触发返回界面的show方法 -为啥缓存取得上一次的？
            delta: 1,
            success: function () {
              wx.showToast({
                title: '充值成功',
                duration: 1000
              })
            }
          })
        }
      })
      // wx.redirectTo({
      //   url: '../wallent/index',
      //   success: function () {
      //     wx.showToast({
      //       title: '充值成功',
      //       duration: 1000
      //     })
      //   }
      // })
    }else{
      wx.showModal({
        title: '充值失败',
        content: '充值金额应为整数',
        // confirmText: '好嘛',
        // cancelText: '我不'
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