var data = require('../../data/data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:0,
    longitude:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.timer = options.timer;
    wx.getLocation({//1、获取位置信息
      success: (res) => {//箭头函数为获取当前页面的this
        this.setData({
          latitude:res.latitude,
          longitude:res.longitude
        })
      }
    }),
    wx.getSystemInfo({//2、获取系统信息 设置位置
      success: (res) => {
        this.setData({
          controls: [
            {
              id: 1,
              position: {
                width: 60,
                height: 60,
                left: res.windowWidth / 2 - 32,
                top: res.windowHeight /2 - 60
              },
              iconPath: "../../images/location.png",
              clickable: false
            },
            {
              id: 2,
              position: {
                width: 50,
                height: 50,
                left: 20,
                top: res.windowHeight - 80
              },
              iconPath: "../../images/focus.png",
              clickable: true
            },
            {
              id: 3,
              position: {
                width: 80,
                height: 80,
                left: res.windowWidth / 2 - 40,
                top: res.windowHeight - 70
              },
              iconPath: "../../images/scan.png",
              clickable: true
            },
            {
              id: 4,
              position: {
                width: 50,
                height: 50,
                left: res.windowWidth - 70,
                top: res.windowHeight - 80
              },
              iconPath: "../../images/warn.png",
              clickable: true
            },
            {
              id: 5,
              position: {
                width: 50,
                height: 50,
                left: res.windowWidth - 70,
                top: res.windowHeight - 155
              },
              iconPath: "../../images/user.png",
              clickable: true
            }
          ]
        })
      },
    })
  },

  mapcontroltap:function(e){
    switch(e.controlId){
      //回到原点
      case 2:
        // wx.createMapContext('mymap').moveToLocation();
        this.moveToCenter();
        break;
      //扫码用车
      case 3:
        //已结束骑行了就可重新扫码
        //未结束骑行跳转到计时页面
        if(!this.timer){//结束骑行 或第一次扫码
          wx.scanCode({//4、调用扫码接口
            success: function () {
              //一般是根据扫成功的响应信息去请求 数据匹配成功就跳转
              // wx.request({
              //   url: 'https://www.easy-mock.com/mock/5e7b02eb5c63b7101f224d8e/example/scan',//使用easymock假数据需在小程序后台-开发配置中配置https://www.easy-mock.com域名
              //   success:function(res){
              //     console.log(res.password)
              //     wx.redirectTo({
              //       url: '../scanResult/index?psw='+res.password,
              //       success: function() {
              //         wx.showToast({
              //           title: '获取密码成功',
              //           duration: 1000
              //         })
              //       }
              //     })
              //   },
              //   // fail:function(){
              //   // }
              // })
              wx.showLoading({//5、获取进度条
                title: '正在获取密码'
              })
              if (data.password.data.password == '1234') {//本地假数据
                wx.hideLoading();//5、隐藏进度条
                wx.redirectTo({//6、定位到某个页面 当前页面销毁
                  url: '../scanResult/index?psw=6666&number=12345',
                  success: function () {
                    wx.showToast({//7、获取弹窗
                      title: '获取密码成功',
                      duration: 1000
                    })
                  }
                })
              }
            }
          })
        }else{
          wx.navigateBack({
            delta:1//返回的页面数 页面栈
          })
        }
        break;
      //故障申请
      case 4:
        break;
      //个人中心
      case 5:
        wx.navigateTo({
          url: '../user/index',
        })
        break;
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  moveToCenter: function(){
    this.mapctx.moveToLocation();//当前点回到中心点
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.mapctx = wx.createMapContext('mymap');//3、获取map的上下文 同canvas获取
    this.moveToCenter();
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