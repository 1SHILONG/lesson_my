// 所有请求的封装
import { baseURL, timeout } from './config.js'
function request(options) {
  wx.showLoading({
    title: '数据加载中',
  })
  return new Promise((resolve) => {
    // 耗时任务
    console.log(baseURL + options.url);
    wx.request({
      url: baseURL + options.url,
      timeout,
      data: options.data || {},
      success: function(res) {
        resolve(res.data)
      },
      complete: function() {
        wx.hideLoading()
      }
    })
  })
}

export default request